
const express = require('express');
const { userRouter } = require('./routes/user');
const { adminRouter } = require('./routes/admin');
const { courseRouter } = require('./routes/course');
const { mongoose } = require("mongoose");

const app = express()
const port = 3000


app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main(){
  await mongoose.connect("mongodb://localhost:27017/coursera-app");
  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
}
main();
