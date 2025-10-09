import sql from "../utils/db.js"


export const getusercreation = async (req, res) => {
    try {
        const { userId } = req.auth()

        const creations = await sql`SELECT * FROM creations WHERE user_id=${userId} ORDER BY  created_at DESC`;
        res.status(200).json({ success: true, creations })

    } catch (error) {
        return res.status(400).json({ msg: error.message })
    }
}



export const getPublishedData = async (req, res) => {
    try {
       
        const creations = await sql`SELECT * FROM creations WHERE publish = true ORDER BY  created_at DESC`;
        res.status(200).json({ success: true, creations })

    } catch (error) {
        return res.status(400).json({ msg: error.message })
    }
} 