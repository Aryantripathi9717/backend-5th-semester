import jwt from "jsonwebtoken"


const authMiddlewares = (req,res,next) => {
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            message : "Not logged in"
        })
    }

    const verifyToken = jwt.verify(token,process.env.JWTSECRETE);
    if(!verifyTOken){
        return res.status(401).json({
            message : "Token not valid"
        })
    }
    return next();
}