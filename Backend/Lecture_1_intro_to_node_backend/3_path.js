const path = require("path");
const fs = require("fs");

/***************Global variable****************/ 
// console.log("path of current folder :",__dirname);
// console.log("path of current file :",__filename);
// console.log("process",process);
console.log("global :",global);

console.log("``````````````````````````````")
/****************Finding path of folder and file****************/ 
// const directoryPath = path.dirname(__filename);
// console.log("directoryName :", directoryPath);

/****************To know the extention of a file****************/ 
// const fileExt = path.extname(__filename);
// console.log("fileExt :", fileExt);

/******************TO Build a path***********************/ 
// const pathtoMyFile = path.join(__dirname,"../","../","4_CSS","css-notes.md");
// console.log("pathtoMyFile :",pathtoMyFile);
// fs.writeFileSync(pathtoMyFile, "# CSS Notes");