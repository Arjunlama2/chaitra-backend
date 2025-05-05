
const jwt=require("jsonwebtoken")
const isAutheticated=(req,res,next)=>{


   let  tokenUSer=""
const token=req.headers.authorization.split(" ")[1]
if(token){
    atheticated=true
    let  decoded = jwt.verify(token, 'shhhhh');
    console.log(decoded)
}

if(atheticated)
{
    req.user=tokenUSer
    next()
}else{
    
res.status(401).send("Not athenticated")
const err="this ier error "
next(err)
} 

}

module.exports={
    isAutheticated
}