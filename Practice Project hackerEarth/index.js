import express from "express"

import squareRouter from "./routes/route.square.js";
import rectangleRouter from "./routes/route.rectangle.js";
const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.status(201).json({message : "You are at home page"});
})
app.use("/rectangle",rectangleRouter);
app.use("/square",squareRouter);


let port = 8000;
app.listen(port,()=>{
    console.log("App is listening at port",port); 
})
