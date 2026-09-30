import express from "express"
import contactRouter from "./router/contactRouter.js";
const app = express();

app.get("/",(req,res)=>{
    res.send("Contact app")
})
app.use(express.json())
app.use("/contact",contactRouter);


const port = 8000;
app.listen(8000,()=>{
    console.log("App is listening at port",port);
})