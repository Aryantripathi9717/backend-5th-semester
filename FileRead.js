const fs = require("fs")

FilePath = "./text.txt"
// const result = fs.readFileSync(FilePath,'utf-8')
// console.log(result);

fs.readFile(FilePath,(err,data)=>{
    if(err) throw err
    console.log(data);
    
})

