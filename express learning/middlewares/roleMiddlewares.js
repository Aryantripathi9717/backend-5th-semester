const checkRoles = (...allowedroles)=> {
    return (req,res,next)=>{
        const role = req.headers.role
        if(!role){
            return res.status(404).json({message : "Role is not provided"})
        }

        if(allowedroles.includes(role)){
            next()
        }else{
            return res.status(404).json({message : "You role is not allowed"})
        }
    }
}

export default checkRoles;