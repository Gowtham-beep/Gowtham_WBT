const express=require("express")
const router=express.Router()
const mongoose=require('mongoose')
const User =require('../model/users')
const jwt=require('jsonwebtoken')
const authmiddleware = require("../middleware/auth")
JWT_secret="jwedgiwehi"


router.post('/signup',async(req,res)=>{
try{
    const {username,password}=req.body
    const user= User.find({username})
    if(user){
        res.json({
            message:"user alredy exists"
        })
    }
    const newUser=  await new User({
        username,
        password
    })
    await newUser.save()
    res.json({
        message:"signup done",
        username,
        password
    })

}catch(error){
 res.json({
    message:"error in signup",
    error:error.message
 })
}
})


router.post('/signin',(req,res)=>{
    try{
    const {username,password}=req.body
    const user= User.findOne({username})
    if(user){
        const token=jwt.sign({id:req.userId},JWT_secret);
        res.json({
            message:"signin done",
            token:token
        })
    }
}catch(error){
    res.json({
        message:"Error in signin",
        error:error.message
    })
    }
})

module.exports=router;