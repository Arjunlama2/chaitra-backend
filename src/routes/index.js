const express=require("express")
const { getuser, createUser } = require("../controller/controller.user")
const { isAutheticated } = require("../middleware/auth")


const router = express.Router()

router.get("/user",
  
    getuser
)

router.post("/user",
  
 createUser
)


router.get("/user/:id",(req,res,next)=>{
    res.send("Messgae for user from id")
    })  

    
module.exports=router