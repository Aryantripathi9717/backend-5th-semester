import express from "express"
import {Router} from 'express'
import checkRoles from "../middlewares/roleMiddlewares.js"
const studentRouter = express.Router()

studentRouter.use((req,res,next)=>{
    console.log("You are at student page");
    next()
    
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


studentRouter.get("/all",checkRoles('teacher','student','admin'),(req,res)=>{
    res.json(students)
})

studentRouter.get("/:id",checkRoles('teacher','student','admin'),(req,res)=>{
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

studentRouter.post("/create",checkRoles('teacher','admin'),(req,res)=>{
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

studentRouter.delete("/delete/:id",checkRoles('admin'),(req,res)=>{
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

studentRouter.put("/put/:id",checkRoles('teacher','admin'),(req,res)=>{
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

studentRouter.patch("/patch/:id",checkRoles('teacher','admin'),(req,res)=>{


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


studentRouter.get("/search",checkRoles('teacher','student','admin'),(req,res)=>{
    const {course, age} = req.query;

    const student = students.filter(s=> s.course.toLowerCase()=== course.toLowerCase() && s.age === parseInt(age));

    if(!student){
        return res.status(400).json({
            message : "No data found"
        })
    }

    res.send(student)

})

export default studentRouter;