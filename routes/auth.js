const auth=require("express").Router();
auth.get("/",(req,res)=>{
    res.send("auth");
})
module.exports=auth;