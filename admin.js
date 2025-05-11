
const express = require("express");
const adminRouter = express.Router();

//Admin
adminRouter.post("/login", (req, res) => {
   res.json({
        message: "Admin"
    })
});

adminRouter.post("/signup", (req, res) => {
   res.json({
        message: "Admin"
    })
});

adminRouter.get("/course/create", (req, res) => {
   res.json({
        message: "Admin"
    })
});

adminRouter.get("/delete/course", (req, res) => {
   res.json({
        message: "Admin"
    })
});


module.exports = {
    adminRouter: adminRouter
}