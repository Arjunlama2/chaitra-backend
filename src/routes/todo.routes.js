const express=require("express")
const { getTodo, createTodo } = require("../controller/todo.controller")

const router=express.Router()

router.get("/todo",getTodo)
router.post("/todo",createTodo)


module.exports=router