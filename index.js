const express=require('express')
const cors=require('cors')
const app= new express;
const databaseconnection=require('./db/db')
const user=require('./routes/users')
const todos=require('./routes/todos')

app.use(cors())
app.use(express.json())

app.use('/users',user)
app.use("/todo",todos)

databaseconnection();

app.listen(3000,()=>{
    console.log("app listening in port 3000")
})