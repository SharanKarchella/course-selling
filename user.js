
const { userRouter } = require("express");

userRouter.post('/login', (req, res) => {
  res.send('Hello World!')
})

userRouter.post('/signup', (req, res) => {
    res.send('Hello World!')
  })

module.exports = {
    userRouter
}