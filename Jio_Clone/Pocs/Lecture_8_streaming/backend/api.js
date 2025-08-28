const express = require('express');
const app = express();
const fs = require('fs'); // without streaming
const cors = require('cors');

app.use(cors());

app.get("/memoryIntensive", function(req, res) {
    console.log("reading the content")
    // am usage -> 50mb
    const fileContent = fs.readFileSync("mysql-connector.zip");
    console.log("content read finished");
    res.send(fileContent);
})


app.get("/streamfile", function(req, res) {
    console.log("File readStream is created");
    // const fileStreamInstance = fs.createReadStream("mysql-connector.zip");

    // for video
    const videoStreamInstance = fs.createReadStream("1.mp4");
    // request, response -> suppoet stream
    // request -> readable stream
    // response -> writable 

    // fileStreamInstance.pipe(res);

    res.writeHead(200, {
        "Content-Type": "video.mp4"
    })
    videoStreamInstance.pipe(res);
})

app.listen(3000, function() {
    console.log("server is running at port 3000");
})