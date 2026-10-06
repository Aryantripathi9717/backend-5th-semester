import User from "../Models/userModel.js";
import bcrypt from "bcrypt"
import { generateToken } from "../utils/jwt.js";
import cookieParser from 'cookie-parser';

export const signup = async (req,res)=>{
    try {
        const {name,userName,email,password} = req.body;
        if(!name || !userName || !email || !password){
            return res.status(400).json({message : "All fields requires"});
        }
        
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(401).json({message : "User already Exists"})
        }
        const userNameExist = await User.findOne({userName});
        if(userNameExist){
            return res.status(401).json({message : "UserName already Exists"})
        }

        const hashedPassword = await bcrypt.hash(password,13);

        const newUser = await User.create({
            name : name,
            userName : userName,
            email : email,
            password : hashedPassword
        })
        
        const token = generateToken(newUser);

        res.cookie("token",token,{
            httpOnly : true,
            secure : false,
            sameSite : "lax",
            maxAge : 24*60*60*1000 //millisecond
        })

        return res.status(200).json({message : "User successfully created"});

    } catch (error) {
        return res.status(400).json({error : error})
    }
}


export const login  = async (req,res)=>{
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

        const token = generateToken(userExist);

        res.cookie("token",token,{
            httpOnly : true,
            secure : false,
            sameSite : "lax",
            maxAge : 24*60*60*1000
        })

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
}

