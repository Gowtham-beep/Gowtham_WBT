const mongoose=require("mongoose")
const Schema=mongoose.Schema

const todo= new Schema({
    title:{type:String},
    done:{type:Boolean},
    userId:{type:Schema.ObjectId}
})

const Todo= mongoose.model("Todo",todo)
module.exports=Todo