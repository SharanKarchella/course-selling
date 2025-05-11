
const express = require("express");
const adminRouter = express.Router();
const { adminModel } = require("../db");

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

adminRouter.get("/create", (req, res) => {
   res.json({
        message: "Admin"
    })
});

adminRouter.get("/delete", (req, res) => {
   res.json({
        message: "Admin"
    })
});


module.exports = {
    adminRouter: adminRouter
}