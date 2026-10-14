import User from "../Models/userModel.js";
import bcrypt from "bcrypt"
import { generateAccessToken, generateRefreshToken } from "../utils/jwt.js";
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
        
        const token = generateAccessToken(newUser);

        res.cookie("token",token,{
            httpOnly : true,
            secure : false,
            sameSite : "lax",
            maxAge : 60*60*1000 //millisecond
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

        const token = generateAccessToken(userExist);
        const refreshToken = generateRefreshToken(userExist);
        const hashedRefreshToken = await bcrypt.hash(refreshToken,12);
        
        userExist.refreshToken = hashedRefreshToken;
        await userExist.save();

        res.cookie("token",token,{
            httpOnly : true,
            secure : false,
            sameSite : "lax",
            maxAge : 60*60*1000 // millisecond
        })

        return res.status(200).json({
            message : "User successfully login",
            user : {
                name : userExist.name,
                userName : userExist.userName,
                email : userExist.email,
            }

        })

    } catch (error) {
        return res.status(400).json({error : error})
    }
}


export const logout = async (req,res)=>{
    try {
        let token = req.cookies.token;
        if(!token){
            return res.status(200).json({message : "Token not found"});
        }
        await res.clearCookie("token");
        return res.status(201).json({message : "Logout successfully"});
    } catch (error) {
        return res.status(400).json({
            message : "Logout Error",
            error : error
        })
    }
}
