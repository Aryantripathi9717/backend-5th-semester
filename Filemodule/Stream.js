const fs = require('fs')

const readStream = fs.createReadStream("./text2.txt")
const writeStream = fs.createWriteStream('./output.txt')
// readStream.on('data',(chunk)=>{
//     // console.log(chunk.toString());  
//     writeStream.write(chunk)
// })


// readStream.on('end',()=>{
//     console.log("Reached at the end of file"); 
//     writeStream.end() 
// })

readStream.pipe(writeStream)
writeStream.on('finish',()=>{
    console.log("End of stream");
    
})