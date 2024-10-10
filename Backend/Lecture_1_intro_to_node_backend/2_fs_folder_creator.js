const fs = require("fs");
const lectureName = ["intro to backend dev with Node.js", "Intro to Express and postman", 
    "Mongodb and mongoose", "MVC architecture and Rest API", "Data validation and hooks is mongoose"
]

for(let i=0; i<lectureName.length; i++) {
    // folder name
    let currentFolderName = `Lecture-${i + 1}-${lectureName[i]}`;
    // function folder creation
    fs.mkdirSync(currentFolderName);

    // writeFileSync
    let filePath = `${currentFolderName}/readme.md`; 
    fs.writeFileSync(filePath, "#Agenda");
    console.log("created folder: ", currentFolderName);
}