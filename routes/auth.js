const router=require("express").Router();
const User=require("../models/User");




//REGISTER
router.get("/register",async(req,res)=>{
    const user = await new User({
        username:"json",
        email:"sandesh100poudel@gmail.com",
        password:"1243"
    })
    await user.save()
    res.send("hello");
})
module.exports=router;