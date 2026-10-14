import express from "express"
import taskRouter from "./routes/task.route.js";
import cors from "cors"
import connectDB from "./Mongodb/connect.js";
import dotenv from "dotenv"
const port = 4000;

dotenv.config()
const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: "http://localhost:5173",
        methods : ['GET','POST','DELETE'],
        credentials : true
    }
))
app.use("/task",taskRouter)

app.listen(port,()=>{
    connectDB()
    console.log("App is listening at port", port);
})