const mongoose=require('mongoose')

const databaseconnection=()=>{
    mongoose.connect("mongodb+srv://gn86923:gncy4589@cluster0.dnlth.mongodb.net/interview")
    .then(console.log("Databse connected"))
}

module.exports=databaseconnection