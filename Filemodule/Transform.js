const fs = require('fs')
const zlib = require('zlib')

const readStream = fs.createReadStream('./text.txt', 'utf-8');

const gzip = zlib.createGzip()

const writeStream = fs.createWriteStream("./content.txt")

readStream.pipe(gzip).pipe(writeStream)