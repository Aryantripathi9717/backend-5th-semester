// import http from 'http'
// import fs from 'fs'
// import { json } from 'stream/consumers';

// const port = 5000;

// const server = http.createServer((req,res)=>{
//     // if(req.url == '/about' && req.method == 'GET'){
//     //     res.end("this is about page");
//     //     fs.appendFileSync("./fsmodule.txt", `this is about section with the url ${req.url} and method ${req.method} and all the headers ${JSON.stringify(req.headers)}`);
//     // }
//     // else if(req.url == '/' && req.method == 'GET'){
//     //     res.end("this is home page")
//     // }
//     // else if(req.url == '/contact' && req.method == 'GET'){
//     //     res.end("this is contact page")
//     // }else{`
//     //     res.statusCode = 404;
//     //     res.end("404 page not found")
//     // }



//     switch(req.url){
//         case "/" : res.json({"message": "this is home page"}); return;
//         case "/about" : res.end("this is about page"); return 
//         case "/contact" : res.end("this is contact page"); return 
//         default : res.end("no such url exists");

//     }
    
// })


// server.listen(port,()=>{
//     console.log("Server is listening at port 5000")
// })





import http from 'http';

const server = http.createServer((req,res)=>{

    if(req.url === "/user" && req.method === "POST"){
        let body = ''
        req.on('data',(chunk)=>{
            body += chunk
        })


        req.on('end',()=>{
            console.log("Raw data",body);
            let user = JSON.parse(body)
            console.log("User :",user);
            
            res.end(JSON.stringify({
                message: 'user created successfully',
                user : user
            }))
        })


    }else{
        res.end('Not found');
    }

})


const port = 3000;
server.listen(port,()=>{
    console.log("Server is listening on port " + port);
    
})
