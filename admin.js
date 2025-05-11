
const { adminRouter } = require("express");

//Admin
adminRouter.post("/login", (req, res) => {
  res.send("Admin");
});

adminRouter.post("/signup", (req, res) => {
  res.send("Admin");
});

adminRouter.get("/course/create", (req, res) => {
  res.send("Admin");
});

adminRouter.get("/delete/course", (req, res) => {
  res.send("Admin");
});


module.exports = {
    adminRouter: adminRouter
}