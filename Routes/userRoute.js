
const { registerController, loginController, homeController } = require('../Controller/controllers')
const middleware = require('../authmiddleware')


const userRoute = require('express').Router()

userRoute.post('/register',registerController)
userRoute.post('/login',loginController)
userRoute.get('/home',middleware,homeController)


        module.exports=userRoute;