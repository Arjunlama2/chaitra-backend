const express=require("express")
const { getuser } = require("../controller/controller.user")
const { isAutheticated } = require("../middleware/auth")


const router = express.Router()

router.get("/user",
    
    // check validations like authentication and authorization
    isAutheticated,
    getuser
)


router.get("/user/:id",(req,res,next)=>{
    res.send("Messgae for user from id")
    })

    
module.exports=router