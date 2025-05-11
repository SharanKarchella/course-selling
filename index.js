
const express = require('express');
const { userRouter } = require('./user');
const { adminRouter } = require('./admin');
const { courseRouter } = require('./course');
const app = express()
const port = 3000


app.use("/user",userRouter);
app.use("/admin", adminRouter);
app.use("/course", courseRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
