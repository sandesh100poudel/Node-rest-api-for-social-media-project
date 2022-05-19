const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const userAuth = require("./routes/auth");

const app=express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{useNewParser:true},()=>{
    console.log("connected to mongodb");
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users",userRoute);
app.use("/api/auth",userAuth);



app.get("/user",(req,res)=>{
    res.send("this is your user profuile");
});







app.listen(8800,()=>{
    console.log("sever is running");
})