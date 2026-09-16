import express from "express"
import { Router } from "express"
const squareRouter = express.Router()

squareRouter.get("/area",(req,res)=>{
    let {side} = req.body;
    let area = side*side;
    return res.status(202).json({message : `The area of the square is ${area}`});
})

squareRouter.get("/perimeter",(req,res)=>{
    let {side} = req.body;
    let perimeter = 4*side;
    return res.status(202).json({message : `The perimeter of the square is ${perimeter}`});
})


export default squareRouter;