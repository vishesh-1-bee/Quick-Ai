import OpenAI from "openai";
import sql from "../utils/db.js";
import { clerkClient } from "@clerk/express";
import axios from 'axios'
import { v2 as cloudnary } from 'cloudinary'


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



//generate  blogtitle
export const generateBlogTitle = async (req, res) => {
    try {
        //we will get the userid from the clerk
        const { userId } = req.auth()
        const { prompt } = req.body
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
            max_tokens: 100
        });

        const content = response.choices[0].message.content

        //now we are storung the data genereated in the database
        await sql`INSERT INTO creations (user_id, prompt, content, type)
        VALUES (${userId}, ${prompt}, ${content}, 'blog-title')`

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


//generate image
export const generateimage = async (req, res) => {
    try {
        //we will get the userid from the clerk
        const { userId } = req.auth()
        const { prompt, publish } = req.body
        const plan = req.plan;


        //this feature is only for premium user
        if (plan !== 'premium') {

            return res.status(400).json({ msg: "This feature is available for premium user" })
        }
        //clpdrop api for image
        const formData = new FormData()
        formData.append('prompt', prompt)

        const { data } = await axios.post('https://clipdrop-api.co/text-to-image/v1', formData,
            {
                headers: {
                    'x-api-key': process.env.CLIPDROP_API,
                },
                responseType: "arraybuffer"
            },

        )
        //we will get the image in base64 we will convert it into the imageurl
        const base64Image = `data:image/png;base64,${Buffer.from(data, 'binary').toString('base64')}`;

        //storing the genrated image in the cloudnary so we fetch in frontend
        const { secure_url } = await cloudnary.uploader.upload(base64Image);


        //now we are storung the data genereated in the database
        await sql`INSERT INTO creations (user_id, prompt, content, type, publish)
        VALUES (${userId}, ${prompt}, ${secure_url}, 'image' , ${publish ?? false})`


        res.status(200).json({ success: true, content: secure_url })
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.message })

    }
}

//code for background removal
export const removeBcakgroundImage = async (req, res) => {
    try {
        //we will get the userid from the clerk
        const { userId } = req.auth()
        const { image } = req.file
        const plan = req.plan;


        //this feature is only for premium user
        if (plan !== 'premium') {

            return res.status(400).json({ msg: "This feature is available for premium user" })
        }


        //storing the genrated image in the cloudnary so we fetch in frontend
        const { secure_url } = await cloudnary.uploader.upload(image.path, {
            transformation: [
                {
                    effect: 'background_removal',
                    background_removal: 'remove_the_background'
                }
            ]
        });


        //now we are storung the data genereated in the database
        await sql`INSERT INTO creations (user_id, prompt, content, type, )
        VALUES (${userId}, 'remove background from image', ${secure_url}, 'image' , )`


        res.status(200).json({ success: true, content: secure_url })
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.message })

    }
}

//code to remove the object from the image
export const removeImageObject = async (req, res) => {
    try {
        //we will get the userid from the clerk
        const { userId } = req.auth()
        const { object } = req.body
        const { image } = req.file
        const plan = req.plan;


        //this feature is only for premium user
        if (plan !== 'premium') {

            return res.status(400).json({ msg: "This feature is available for premium user" })
        }


        //storing the genrated image in the cloudnary so we fetch in frontend
        const { public_id } = await cloudnary.uploader.upload(image.path);



        //we are removing object using cloudnary
       const imageUrl = cloudnary.url(public_id , {
            transformation:[{effect : `gen_remove:${object}`}],
            resource_type: 'image'
        })
        //now we are storung the data genereated in the database
        await sql`INSERT INTO creations (user_id, prompt, content, type, )
        VALUES (${userId}, ${`remove ${object} from image`}, ${imageUrl}, 'image'  )`


        res.status(200).json({ success: true, content: imageUrl })
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.message })

    }
}

