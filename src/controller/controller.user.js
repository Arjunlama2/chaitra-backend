

const User=require("../Schema/User")
// async function getuser(){

// }
const getuser=async(req,res,next)=>{
  
    try{
        const users=await User.find()
        res.status(200).send(users)
    }catch(err){
        console.log(err)
next(err)
    }

}



const createUser=async (req,res,next)=>{
    try{
        const data=req.body
        await User.create(data)
        res.statu(200).send({message:"user created sucessfully"})
    }catch(err){
// next(next)
console.log(err)

    }
}
module.exports={
    getuser,
    createUser
}


///async await
