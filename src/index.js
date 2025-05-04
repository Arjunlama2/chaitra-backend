const express=require("express")
const { isAutheticated } = require("./middleware/auth")
const { getuse } = require("./controller/controller.user")
const { handleError } = require("../handleerror")
const user=require("./routes/index")
const dotenv=require("dotenv")
const app=express()
const cors=require("cors")
const product=require("./routes/product.routes")
const todo=require("./routes/todo.routes")
// middleware
require("./config/database")
app.get("/",(req,res)=>{
    res.send("Server is Listining")
})
dotenv.config()

const port=process.env.PORT
app.use(express.json())


// app.get("/test",isAutheticated,getuse)
app.use(cors())
app.use(user)
app.use(product)
app.use(todo)
app.use(handleError)
app.listen(port,()=>{
    console.log(`Server is listing to port ${port}`)
})



//install postman 
//Install MONGODB
//install MOnogsh cell
// jwt
//bycript


 
