const fs = require("fs")
const FilePath = "./text.txt"
const content = "Thanke"

fs.writeFileSync(FilePath,content) // it will create file if it does not exist at given path
console.log("Bye");

fs.writeFile("./text2.txt","demo of sync write of file ", (err)=>{
    if(err) throw err
    console.log("I am in file");
    
})

console.log("I am out of file");
