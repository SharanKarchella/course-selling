
const express = require("express");
const adminRouter = express.Router();
const { adminModel } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = "admin321";

//Admin
adminRouter.post("/signup", async (req, res) => {
    
  const { email, firstName, lastName, password} = req.body; //TODO: Add Zod validation
  
      //Put it in db
      //try and catch
      
      console.log("adminModel:", adminModel); // Should not be undefined

      try{
          await adminModel.create({
          email,
          password,
          firstName,
          lastName,
      }) 
      }catch(e){
          console.log(e);
      }
  
     res.json({
          message: "Admin Signup Successful"
      })

});

adminRouter.post("/signin", async (req, res) => {

   const { email,password} = req.body;

    const admin = await adminModel.findOne({
        email: email,
        password: password,
    });
    
    if(admin){
        const token = jwt.sign({
            id: admin._id
        }, JWT_ADMIN_PASSWORD);
        
        //After signin we have to writeen response token
        res.json({
            token: token
        })
    } else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
});


module.exports = {

    adminRouter: adminRouter
}