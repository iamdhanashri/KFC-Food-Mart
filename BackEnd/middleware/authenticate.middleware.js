const jwt=require("jsonwebtoken")

const authenticate=(req,res,next)=>{
    const token=req.headers.autherization
    if(token){
        jwt.verify(token,"masai",(err,decoded)=>{
            if(decoded){
                next()
            }else{
                res.send({"msg":"please login first"})
            }
        })
    }else{
        res.send({"msg":"please login"})
    }
}

module.exports={
    authenticate
}