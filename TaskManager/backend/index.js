import express from "express"
import taskRouter from "./routes/task.route.js";
import cors from "cors"
const port = 4000;

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
    console.log("App is listning at port", port);
})