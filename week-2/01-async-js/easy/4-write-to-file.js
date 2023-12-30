const fs = require("fs");

fs.writeFile("test.txt", "hello from js", (err) => {
  if (err) console.log(err);
  console.log("write successfully");
});



