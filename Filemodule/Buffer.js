const buffer = Buffer.from("Hello Students")
console.log(buffer);
console.log(buffer.toString());
console.log(buffer.length);

const buffer2 = Buffer.alloc(20)
console.log(buffer2);
console.log(buffer2.length);
console.log(buffer2.toString()[0]);
