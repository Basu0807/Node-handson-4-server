const express =require('express')
const cors =require('cors');
const userRoute = require('./Routes/userRoute');
// const middleware = require("./Middleware/middleware")
const port = 4000;
const app =express();
app.use(cors({
  origin:"*"
}))
// app.use(middleware)
app.use(express.json()) // body parser( to read the data from the client side)

app.use('/user',userRoute)

app.get('/',(req,res)=>{
    res.send("This is Serverhome page")
})


app.listen(port,()=>{
  try {
   console.log(`my server is running on port no. ${port}`);
   
  } catch (error) {
   console.log(`Error occured`);
  }
})