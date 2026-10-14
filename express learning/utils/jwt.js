import jwt from "jsonwebtoken"

export const generateAccessToken = (user) =>{
    return jwt.sign(
        { 
            id : user._id,
            email : user.email
        },
            process.env.JWT_ACCESS_SECRETE
        ,{
            expiresIn : '1h'
        }
    )
}

export const generateRefreshToken = (user) =>{
    return jwt.sign(
        { 
            id : user._id
        },
            process.env.JWT_REFRESH_SECRETE
        ,{
            expiresIn : '24h'
        }
    )
}