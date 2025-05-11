
const express = require("express");
const userRouter = express.Router();

userRouter.post('/login', (req, res) => {
   res.json({
        message: "User login"
    })
})

userRouter.post('/signup', (req, res) => {
     res.json({
        message: "User SignUp"
    })
  })

module.exports = {
    userRouter : userRouter
}