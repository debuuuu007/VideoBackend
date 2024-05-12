import mongoose from "mongoose"
import { DB_NAME } from "../constant.js"

const connectDB= async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)  
        console.log("Connected successfully") 
    }
    catch(error){
        console.log("MongoDB not connected")
        throw error
    }
}

export default connectDB