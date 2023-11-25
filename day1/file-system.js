const fs = require("fs"); // importing fs package

// fs.readFile("myfiles/file1.txt", (error, data) => {
//   if (error) {
//     return console.log("ERROR while reading file", error);
//   }

//   console.log("DATA:", data.toString());
// });

fs.writeFile("myfiles/file1.txt", "Updated Content 123!", (error, data) => {
  if (error) {
    return console.log("ERROR WHILE WRITING THE FILE: ", error);
  }

  console.log("File has been updated successfully");
});

// fs.writeFile("myfiles/file1.txt", "Updated Content 123!", (error, data) => {
//   if (data) {
//     console.log("File has been updated successfully");
//   } else {
//     return console.log("ERROR WHILE WRITING THE FILE: ", error);
//   }
// });
