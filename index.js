
const express = require('express');
const { userRouter } = require('./user');
const { adminRouter } = require('./admin');
const { courseRouter } = require('./course');
const app = express()
const port = 3000


app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
