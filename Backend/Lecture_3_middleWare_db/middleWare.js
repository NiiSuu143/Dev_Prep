const express = require("express");
const app = express();


//  -> /post , post -> createPost
function beforeFn(req, res, next) {
    console.log("Before fn called");
    // console.log("req.body", req.body);
    const length = Object.keys(req.body).length;
    if(length>0 && req.body.name && req.body.userId) {
        const fullNameArr = req.body.name.split(" ");
        req.body.firstName = fullNameArr[0];
        req.body.lastName = fullNameArr[1];
        next(); 
    } else {
        res.status(400).json({
            message: "bad request"
        })
    }
}

function afterFn(req, res) {
    console.log("After fn called");
    console.log("req.body", req.body);

    res.status(200).json({
        message: "response send from after",
        body: req.body
    })
}

// app.use -> yeh sab mein chalega like get, post, patch etc.
// app.post(express.json()); -> only in post route -> only yaha pe chalega
app.use(express.json());
app.post("/posts", beforeFn);
app.post("/posts", afterFn);


// 404 page route -> ye last main lagega...
app.use(function(req, res){
    res.status(200).json({
        message: "404 page not found"
    })
})

app.listen(3000, function(){
    console.log("Server is running at port 3000");
})

// JhwJOcVcrNsLsDtD
// admin