
const { courseRouter } = require("express");

courseRouter.get('/purchase', (req, res) => {
  res.send('Purchasing COurse')
})

courseRouter.get('/courses', (req, res) => {
    res.send('Courses purchases')
  })

module.exports = {
    courseRouter
}