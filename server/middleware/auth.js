import { clerkClient } from "@clerk/express"

//code to check the user id and the user haspremiumplan
 export const auth = async (req, res, next) => {
    try {
        //here we will get the user and userid and has from clerk
        const { userId, has } = await req.auth()
        const hasPremiumPlan = await has({ plan: 'premium' })  //if user has premiumplan then it set true otherwise false

        const user = await clerkClient.users.getUser(userId)

        if (!hasPremiumPlan && user.privateMetadata.free_usage) {
            req.free_usage = user.privateMetadata.free_usage
        } else {
            await clerkClient.users.updateUserMetadata(userId, {
                privateMetadata: {
                    free_usage: 0
                }
            })
            req.free_usage=0
        }
        req.plan = hasPremiumPlan ? 'premium' : 'free'
        next()
    } catch (error) {
        res.status(400).json({ msg: "authorization failed" })
    }
}