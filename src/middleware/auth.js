

const isAutheticated=(req,res,next)=>{
const atheticated=false
if(atheticated)
{
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