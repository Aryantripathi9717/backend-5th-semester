import express from "express"
import studentRouter from "./routes/studentRoute.js";
import teacherRouter from "./routes/teacherRoute.js";
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB_URL)
.then(()=> {
    console.log("Database connected");
    
})
.catch((error)=>{
    console.log("Database connection error" , error);
    
});
   
app.use(express.json())
app.use(cookieParser())
app.get("/",(req,res)=>{
    res.send("This is home page")
})


app.use("/student", studentRouter)
app.use("/teacher", teacherRouter)
app.use("/user",userRouter);


const port = process.env.PORT;
app.listen(port,()=>{
    console.log("Server has started at port",port);
    
})