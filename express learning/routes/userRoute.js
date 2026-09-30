import express from "express";
import { Router } from "express";
import User from "../Models/userModel";
import bcrypt from "bcrypt"

const userRouter = express.Router();

userRouter.post("/signup",async (req,res)=>{
    try {
        const {name,userName,email,password} = req.body;
        if(!name || !userName || !email || !password){
            return res.status(400).json({message : "All fields requires"});
        }
        
        const userExist = await User.find({email});
        if(userExist){
            return res.status(401).json({message : "User already Exists"})
        }
        const userNameExist = await User.find({userName});
        if(userNameExist){
            return res.status(401).json({message : "UserName already Exists"})
        }

        const hashedPassword = await bcrypt.hash(password,10);

        await User.create({
            name : name,
            userName : userName,
            email : email,
            password : hashedPassword
        })

        return res.status(200).json({message : "User successfully created"});

    } catch (error) {
        return res.status(400).json({error : error})
    }
})


userRouter.post("/login",async (req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({message : "All fields required"});
        }
        
        const userExist = await User.findOne({email});
        if(!userExist){
            return res.status(401).json({message : "User doesn't Exists"})
        }

        const comparePassword = await bcrypt.compare(password,userExist.password);
        if(!comparePassword){
            return res.status(400).json({message : "Password doesn't match"});
        }

        return res.status(200).json({
            message : "User successfully login",
            user : {
                name : userExist.name,
                userName : userExist.userName,
                email : userExist.email
            }

        })

    } catch (error) {
        return res.status(400).json({error : error})
    }
})


export default userRouter;