const jwt=require('jsonwebtoken')
JWT_secret="jwedgiwehi"

const authmiddleware=(req,res,next)=>{
 const token=req.headers.token
 const decodeddata=jwt.verify(token,JWT_secret)
 if(decodeddata){
    console.log(decodeddata)
    req.userId=decodeddata.id
    next()
 }else{
    res.json({
        message:"failed to verify the token"
    })
 }
}
module.exports=authmiddleware;