const mongoose=require('mongoose')
const Schema=mongoose.Schema


const user= new Schema({
    username:{type:String,required:true},
    password:{type:String}
})

const User= mongoose.model("USer",user);
module.exports=User
