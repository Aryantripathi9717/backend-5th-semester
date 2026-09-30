import express from "express"
import { Router } from "express"

const contactRouter = express.Router();

let contacts = [
    
    {   
        id : 1,
        name : "Aryan Tripathi",
        address : "Ghaziabad",
        email : "aryantripathi@gmail.com"
    },
    {
        id : 2,
        name : "kabir Tripathi",
        address : "Ghaziabad",
        email : "kabirtripathi@gmail.com"
    },
    {
        id : 3,
        name : "Arpit Rajput",
        address : "Farukhabad",
        email : "arpitrajput@gmail.com"
    },
]


contactRouter.get("/all",(req,res)=>{
    res.status(200).json({contact : contacts})
})

contactRouter.get("/getOne/:id",(req,res)=>{
    let id = req.params.id;
    let contact = contacts.filter((contact)=> contact.id === id);
    return res.json({contact : contact})
})

contactRouter.post("/create",(req,res)=>{
    const {name,email,address} = req.body
    let newContact = {
        id : contacts.length+1,
        name : name,
        address : address,
        email : email
    }
    contacts.push(newContact);
    res.status(200).json({
        message : "A new contact has been created",
        contact : contacts
    })
})

export default contactRouter