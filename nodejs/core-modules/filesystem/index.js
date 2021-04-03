const fs = require("fs");

// fs.readFile("testFile.txt", function (err, data) {
//   if (err) throw err;

//   console.log(data);
// });

// fs.writeFile("test.txt", "Hello World!", function (err) {
//   if (err) console.log(err);
//   else console.log("Write operation complete.");
// });

fs.appendFile("test.txt", "welcome...", function (err) {
  if (err) console.log(err);
  else console.log("Append operation complete.");
});

fs.appendFile("test.txt", "Lexus IS350 F-Sport", function (err) {
  if (err) console.log(err);
  else console.log("Append operation complete.");
});

fs.appendFile("test.txt", "Lexus", function (err) {
  if (err) console.log(err);
  else console.log("Append operation complete.");
});