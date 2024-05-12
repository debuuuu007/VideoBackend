const asynchandler =(reqhand)=>{
    (req,res,next=>{
        Promise.resolve(reqhand(req,res,next)).catch((err)=>{
            next(err)
        })    
    })
}

export { asynchandler }

// const asynchandler=(fn)=>async (req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.send(err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }