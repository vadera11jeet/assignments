const fs = require("fs");

fs.readFile("test.txt", "utf-8", function (err, data) {
  if (err) return;

  const cleanData = data
    .split(" ")
    .reduce(function (currStr, currValue) {
      if (currValue) currStr.push(currValue);
      return currStr;
    }, [])
    .join(" ");

  fs.writeFile("./test.txt", cleanData, function (err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("write in file successfully");
  });
});
