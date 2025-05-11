
const express = require("express");
const courseRouter = express.Router();

courseRouter.get('/purchase', (req, res) => {
  res.json({
    message: 'Purchasing Course'
  })
})

courseRouter.get('/preview', (req, res) => {
    res.json({
    message: 'Preview Courses'
  })
  })

module.exports = {
    courseRouter
}