import express from "express"
import studentRouter from "./routes/studentRoute.js";
import teacherRouter from "./routes/teacherRoute.js";
import dotenv from "dotenv"
import mongoose from "mongoose";

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
app.get("/",(req,res)=>{
    res.send("This is home page")
})


app.use("/student", studentRouter)
app.use("/teacher", teacherRouter)


const port = process.env.PORT;
app.listen(port,()=>{
    console.log("Server has started at port",port);
    
})