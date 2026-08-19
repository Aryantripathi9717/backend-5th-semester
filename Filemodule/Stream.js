const fs = require('fs')

const readStream = fs.createReadStream("./text2.txt")
const res = fs.createWriteStream('./output.txt')
readStream.on('data',(chunk)=>{
    // console.log(chunk.toString());  
    res.write(chunk)
})


readStream.on('end',()=>{
    console.log("Reached at the end of file");  
})
