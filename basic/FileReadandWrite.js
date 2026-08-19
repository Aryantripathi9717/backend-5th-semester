const fs = require("fs")

FilePath = "./text.txt"
const result = fs.readFileSync(FilePath,'utf-8')
console.log(result);

fs.writeFileSync("./text3.txt",result)