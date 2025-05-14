
const express = require("express");
const { userModel } = require("../db");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const JWT_PASSWORD = "asd12345";

userRouter.post('/signup', async (req, res) => {
    
    const { email, firstName, lastName,password} = req.body; //TODO: Add Zod validation

    //Put it in db
    //try and catch

    try{
        await userModel.create({
        email,
        password,
        firstName,
        lastName,
    }) 
    }catch(e){
        console.log(e);
    }

   res.json({
        message: "User Signup Successful"
    })
})

//Ideally passwords should be hashed
userRouter.post('/signin', async (req, res) => {
    
    const { email,password} = req.body;

    const user = await userModel.findOne({
        email: email,
        password: password,
    });

    if(user){

        const token = jwt.sign({
            id: user._id
        }, JWT_PASSWORD);
        
        //After signin we have to writeen response token
        res.json({
            token: token
        })
    } else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
  })

userRouter.post('/purchase', (req,res) => {
    res.json({
        message: "Purchased the course"
    })
})

module.exports = {
    userRouter : userRouter
}