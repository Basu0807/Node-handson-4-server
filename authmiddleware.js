

const jwt =require('jsonwebtoken')
const secretkey ="vasu"
const middleware=(req,res,next)=>{
const BearerToken = req.headers["authorization"]
// console.log(BearerToken);


if(BearerToken){
    const token = BearerToken.split(" ")[1]
    
    const validate = jwt.verify(token, secretkey);
    if(validate){
        next();
    }

}
else{
    return res.send("Undefined user")

}

}

module.exports=middleware;