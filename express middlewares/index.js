import express from "express"
const app = express();

                                                         
// app.get("/",(req,res)=>{
//     res.json({message : "Home page"})
// })
// app.use((req,res,next)=>{
//     console.log('Middleware 1');
//     next()
// })
// app.use((req,res,next)=>{
//     console.log('Middleware 2');
//     next()
// })

// //mount on path

// app.use('/student/:id',(req,res)=>{
//     console.log("Response type",req.method);
    
// })


// // multiple route handler
// app.use('/user/:id',
//     (req,res,next)=>{
//         console.log('Requested  Url',req.url);
//         next()
        
// },
// (req,res,next)=>{
//         console.log('Requested  type',req.method);
        
// })

// app.get("/studet/:id",(req,res,next)=>{
//     res.send("special route here")
// })
// app.get("/studet/:id",(req,res,next)=>{
//     if(req.params.id==0) next('route')
//         else next()
//     res.send("special route here")
// })

// app.use((err,req,res,next)=>{
//     console.error(err.stack);
//     res.status().send();
    
// })

app.use((req,res,next)=>{
    console.log("Request URL",req.originalUrl);
    console.log("REquested method ", req.method);
    next()
    
    
})

const port = 4000;
app.listen(port,()=>{
    console.log("Server has started at port",port);
    
})