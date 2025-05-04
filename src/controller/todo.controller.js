const Todo = require("../Schema/Todo")

const getTodo=async(req,res,next)=>{
  W
    try {
        const options={}
        
        if(req.query.status){
            options.status=req.query.status
        }

        console.log(options)
const data=await Todo.find(options).populate("user")
res.status(200).send(data)
    }
    catch(err){
next(err)
    }
}


const createTodo=async(req,res,next)=>{

    try{

        const data=Todo.create(req.body)
        res.send(200).send({message:"Todo created sucessfully"})
    }catch(err){    
        console.log(err)
        next(next)
    }
}
module.exports={
    getTodo
    ,createTodo
}