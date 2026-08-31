import express from "express"

const app = express();

app.get("/",(req,res)=>{
    res.send("This is home page")
})

let students = [
    {
        id : 1,
        name : "Aryan",
        age : 20,
        course : "B.tech"
    },
    {
        id : 2,
        name : "Maurya",
        age : 50,
        course : "Atankwadi"
    },
    {
        id : 3,
        name : "anshul",
        age : 20,
        course : "patru"
    },
    {
        id : 4,
        name : "arpit",
        age : 50,
        course : "chota don"
    },
    {
        id : 5,
        name : "nimesh",
        age : 20,
        course : "producer"
    },
    {
        id : 6,
        name : "singh",
        age : 50,
        course : "mca"
    },
]

app.get("/students",(req,res)=>{
    res.json(students)
})

app.get("/students/:id",(req,res)=>{
    console.log(req.params.id);
    const id = parseInt(req.params.id)
    let student = students.find(student => student.id===id)
    if(!student){
        return res.status(404).json({
            message : "Student not found"
        })
    }
    res.json(student)
})

const port = 4000;
app.listen(port,()=>{
    console.log("Server has started at port",port);
    
})