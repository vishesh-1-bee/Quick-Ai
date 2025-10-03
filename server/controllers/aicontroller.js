import OpenAI from "openai";
import sql from "../utils/db.js";
import { clerkClient } from "@clerk/express";

const AI = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});


export const generateArticle = async (req, res) => {
    try {
        //we will get the userid from the clerk
        const { userId } = req.auth()
        const { prompt, length } = req.body
        const plan = req.plan;
        const free_usage = req.free_usage

        //if user do not have premium plan
        if (plan !== 'premium' && free_usage >= 5) {

            return res.status(400).json({ msg: "Limit reached , Upgrade to continue" })
        }
        const response = await AI.chat.completions.create({
            model: "gemini-2.0-flash",
            messages: [

                {
                    role: "user",
                    content: prompt,
                },
            ],
            temperature: 0.5,
            max_tokens: length || 500
        });

        const content = response.choices[0].message.content

        //now we are storung the data genereated in the database
        await sql`INSERT INTO creations (user_id, prompt, content, type)
        VALUES (${userId}, ${prompt}, ${content}, 'article')`

        if (plan !== 'premium') {
            await clerkClient.users.updateUserMetadata(userId, {
                privateMetadata: {
                    free_usage: free_usage + 1
                }

            })
        }
        res.status(200).json({ success: true, content })
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.message })

    }
} 