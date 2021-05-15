const buf = Buffer.from('Hey!');
console.log(buf[0]) //72
console.log(buf[1]) //101
console.log(buf[2]) //121
console.log(buf.toString())

const buf2 = Buffer.alloc(1024);

const car = Buffer.from('Nissan GTR');
console.log(car[0])
console.log(car[1])
console.log(car[2])
console.log(car.toString())

const car2 = Buffer.alloc(1967);