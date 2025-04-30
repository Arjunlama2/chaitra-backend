const express=require("express")

router=express.Router()

router.get("/product",(req,res,next)=>{
res.send([{porduct:"All products"}])
})


module.exports=router



// restful api