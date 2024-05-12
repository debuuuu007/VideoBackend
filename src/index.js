// require('dotenv').config()

import mongoose from "mongoose"
import { DB_NAME } from "./constant.js"

import connectDB from "./db/index.js"
import { app } from "./app.js"
import dotenv from "dotenv"

dotenv.config({
    path:'./env'
})

// import express from "express"
// const app=express()

// const connectDB= async ()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error",()=>{
//         console.log("Unable to connect")
//        })

//        app.listen(process.env.PORT,()=>{
//         console.log("listening in port")
//        })
//     }
//     catch(error){
//         console.log("Error")
//     }
// }

connectDB()
.then(
    app.listen(process.env.PORT,()=>{
        console.log(`server is running on port ${process.env.PORT}`)
    })
)
.catch((err)=>{
    console.log("connection failed")
})


