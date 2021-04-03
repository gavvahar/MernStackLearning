const buf = Buffer.from('Hey!');
console.log(buf[0]) //72
console.log(buf[1]) //101
console.log(buf[2]) //121
console.log(buf.toString())

const buf2 = Buffer.alloc(1024);