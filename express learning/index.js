import express from "express"

const app = express();

app.get("/",(req,res)=>{
    res.send("This is home page")
})
app.use(express.json())
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

app.get("/student/:id",(req,res)=>{
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

app.post("/student/create",(req,res)=>{
    const newStudent = {
        id : students.length + 1,
        name : req.body.name,
        age : req.body.age,
        course : req.body.course
    }

    students.push(newStudent);
    return res.status(201).json({
        message : "Student created",
        student : newStudent
    })
})

app.delete("/student/delete/:id",(req,res)=>{
    let id = parseInt(req.params.id);

    const index = students.findIndex(student =>  student.id === id);
    if(index===-1){
         return res.status(401).json({
            message : "Student not found"
        })
    }

    students.splice(index,1);

    // let student = students.filter(student => student.id !== id);
    // if(!student){
    //     return res.status(401).json({
    //         message : "Student not found"
    //     })
    // }
    // students = student;
    
    res.status(201).json({
        message : "Student successfully deleted",
        student : students
    })
})

app.put("student/update/:id",(req,res)=>{
    let {name, age, course} = req.body;

    let id = parseInt(req.params.id);
    let student = students.find(student => student.id===id)
    if(!student){
        return res.status(404).json({
            message : "Student not found"
        })
    }
    student.name = name;
    student.age = age;
    student.course = course;

    res.status(201).json({
        message : "Student successfully Updated",
        student : students
    })

})

app.patch("student/patch/:id",(req,res)=>{


    let {name,age,course} = req.body;
    let id = parseInt(req.params.id)
    let student = students.find(student => student.id===id)
    if(!student){
        return res.status(404).json({
            message : "Student not found"
        })
    }

    if(name) {
        student.name = name;
    }
    if(course) {
        student.course = course;
    }
    if(age) {
        student.age = age;
    }

    res.status(201).json({
        message : "Student successfully Updated",
        student : student
    })

})













const port = 4000;
app.listen(port,()=>{
    console.log("Server has started at port",port);
    
})