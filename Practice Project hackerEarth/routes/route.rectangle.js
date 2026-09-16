import express from "express"
import { Router } from "express"
const rectangleRouter = express.Router()

rectangleRouter.get("/area",(req,res)=>{
    let {width, height} = req.body;
    let area = width*height;
    return res.status(202).json({message : `The area of the rectangle is ${area}`});
})

rectangleRouter.get("/perimeter",(req,res)=>{
    let {width, height} = req.body;
    let perimeter = 2*(width+height);
    return res.status(202).json({message : `The perimeter of the rectangle is ${perimeter}`});
})


export default rectangleRouter;