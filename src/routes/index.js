const express=require("express")


const router = express.Router()

router.get("/user",(req,res,next)=>{
res.send("Messgae for user")
})


router.get("/user/:id",(req,res,next)=>{
    res.send("Messgae for user from id")
    })

    
module.exports=router