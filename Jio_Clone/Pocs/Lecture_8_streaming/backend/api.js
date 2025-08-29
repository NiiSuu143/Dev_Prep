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


app.get("/rangeStreaming", function(req, res) {
    // Get the range from the request header -> video player
    const range = req.headers.range;

    if(range) {
        const stat = fs.statSync("1.mp4");
        const fileSize = stat.size;

        // starting and ending point
        // `bytes=0-`
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

        // initialize the size of chunk
        const chunkSize = (end - start) + 1;    // actual size
        // const chunkSize = 10**6;

        const header = {
            "Content-Type": "video/mp4",
            "Content-Length": chunkSize,
            "Accept-Ranges": "bytes",
            "Content-Range": `bytes ${start}-${end}/${fileSize}`
        }

        // Send a 206 Partial Content Status
        res.writeHead(206, header);

        // Create a read stream for the video file
        const file = fs.createReadStream("1.mp4", {start, end});

        // Pipe the file stream to the response
        file.pipe(res);

    } else {
        res.status(400).json({
            message: "Invalid request"
        })
    }
})


app.listen(3000, function() {
    console.log("server is running at port 3000");
})