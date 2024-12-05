const express=require('express')
const router=express.Router()
const authmiddleware=require('../middleware/auth')
const Todo=require("../model/todo")

router.post("/addtodo",authmiddleware,async(req,res)=>{
    try{
        const {title,done}=req.body

        const newtodo= await new Todo({
            title,
            done,
            userId:req.userId
        })
         await newtodo.save()
         res.json({
            message:"todo added",
            newtodo
         })
    }catch(error){
        res.json({
            message:"error in adding todo"
        })
    }
})


router.get("/gettodo",authmiddleware,(req,res)=>{
    try{
 const todos= Todo.find({userId:req.userId})
 if(todos){
    res.json({
        todos
    })
 }
    }catch(error){
        res.json({
            message:"error in fetching todos"
        })
    }
    
})


router.put("/updatetodo/:id",authmiddleware,async(req,res)=>{
    const{title,done}=req.body
    const updatedtodo= await Todo.findByIdAndUpdate(
        id,
        {title:title},
        {done:done},
        {new:true}
    )
    res.json({
        message:"todo updated",
        updatedtodo
    })

})


router.delete("/deletetodo/:id",authmiddleware,()=>{
    try{
        const {id}=req.body
    const deletetodo= Todo.findByIdAndDelete({id})
    res.json({
        deletetodo,
        message:"todo deleted"
    })
}catch(error){
 res.json({
    message:"failed to delete the todo"
 })
}
    
})

module.exports=router
