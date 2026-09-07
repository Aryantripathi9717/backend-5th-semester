import express from "express"
import studentRouter from "./routes/studentRoute.js";
import teacherRouter from "./routes/teacherRoute.js";

const app = express();

app.use(express.json())
app.get("/",(req,res)=>{
    res.send("This is home page")
})

app.use("/student", studentRouter)
app.use("/teacher", teacherRouter)

                                                                  

app.use((req,res,next)=>{
    console.log('Middleware 1');
    next()
})
app.use((req,res,next)=>{
    console.log('Middleware 2');
})


const port = 4000;
app.listen(port,()=>{
    console.log("Server has started at port",port);
    
})