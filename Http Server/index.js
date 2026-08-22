import http from 'http'

const port = 5000;

const server = http.createServer((req,res)=>{
    if(req.url == '/about' && req.method == 'GET'){
        res.end("this is about page")
    }
    else if(req.url == '/' && req.method == 'GET'){
        res.end("this is home page")
    }
    else if(req.url == '/contact' && req.method == 'GET'){
        res.end("this is contact page")
    }else{
        res.statusCode = 404;
        res.end("404 page not found")
    }
    
})


server.listen(port,()=>{
    console.log("Server is listening at port 5000")
})