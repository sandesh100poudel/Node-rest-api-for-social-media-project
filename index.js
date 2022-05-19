const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

const app=express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true, useUnifiedTopology:true }).then(()=>{
    console.log("connected to mongodb");
}).catch((err)=>{
    console.log(err);
})

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);



app.get("/user",(req,res)=>{
    res.send("this is your user profuile");
});







app.listen(8800,()=>{
    console.log("sever is running");
})