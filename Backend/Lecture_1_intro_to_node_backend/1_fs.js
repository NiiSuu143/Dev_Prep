/**
 * koi bhi feature -> module require karna padta hai
fs module used to anything that possible with files and folder
file -> read, write, update, delete
folder -> content check, rename, delete
 * **/ 

const fs = require("fs");

/************file me write************/ 
let fileName = "file.txt";
let content = "Content added through nodejs hello";

/********Synchronous version*******/ 
// console.log("```: adding content to file");
// fs.writeFileSync(fileName, content);
// console.log("```: added content to file");

/***********Asynchronous version**********/ 
// console.log("Before");
// fs.writeFile(fileName, content, function(err, data) {
//     if(err) {
//         console.log("Something gone wrong...");
//     } else {
//         console.log("File is written comfortably");
//     }
// });
// console.log("After");

/*********Read file********/ 
// let contentOfFile = fs.readFileSync(fileName);
// console.log("content :"+ contentOfFile);

/*********Append file********/
// fs.appendFileSync(fileName, "Appending my data");

/*********Folders********/
// console.log("creating a folder");
// fs.mkdirSync("lecture-1");
// console.log("created folder...");

/***********Deletion**********/ 
// console.log("removing lecture-1");
// fs.rmdirSync("lecture-1");
// console.log("removed lecture-1");