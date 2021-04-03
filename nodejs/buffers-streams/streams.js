// Without streams
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer(function (req, res) {
//   fs.readFile(__dirname + "/test.txt", (err, data) => {
//     res.end(data);
//   });
// });
// server.listen(3000);


//With streams
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream(__dirname + '/test.txt')
  stream.pipe(res)
})
server.listen(3000) 