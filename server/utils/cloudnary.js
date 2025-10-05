//config file for cloudnary data
import {v2 as cloudnary} from 'cloudinary'

const connectCloudnary = async ()=>{
    cloudnary.config({
        cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
        api_key: process.env.CLOUDNARY_API_KEY,
        api_secret: process.env.CLOUDNARY_SCREAT_KEY
    })
}

export default connectCloudnary