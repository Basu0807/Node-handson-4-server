const array =[];
const bcrypt=require('bcrypt')
const jwt =require('jsonwebtoken');
const secretkey ="vasu"

const registerController =(req,res)=>{
    const data =req.body;
    // console.log(data);

    const userdetail =array.find((item)=>{
        if(item.email==data.email){
            return item;
        }
    })
    if(userdetail){
         return res.send({msg:"User is already registered with this email id. Try to login"})
    }
const hashpassword =bcrypt.hashSync(data.password,10); // some random string+symbol+number+password
// console.log(hashpassword);
 
const userObj={
    name:data.name,
    email:data.email,
    phone:data.phone,
    password:hashpassword
}
     array.push(userObj)

     const token =jwt.sign({useremail:data.email},secretkey,{expiresIn:"7 d"})
     res.send({msg:"You have successfully registered", token:token})
    }

const loginController =(req,res)=>{
    const logindata =req.body;
    // console.log(logindata.email);

    const userdetail =array.find((item)=>{
        if(item.email==logindata.email){
            return item;
        }
    })
    if(userdetail){
        const validpassword =bcrypt.compareSync(logindata.password,userdetail.password) // if both passwords match then it gives true or false value
        const token =jwt.sign({useremail:logindata.email},secretkey,{expiresIn:"7 d"})

        if(validpassword){
            return res.send({msg:"You have sucessfully logged in",token:token})
        }
        else{
            return res.send({msg:"Your password is wrong"})
        }

    }

    else{
       return res.send({msg:"your email id is wrong"})
    }
}

const homeController =(req,res)=>{
            res.send(` Welcome to the our website`)
        }

module.exports={registerController,loginController,homeController}