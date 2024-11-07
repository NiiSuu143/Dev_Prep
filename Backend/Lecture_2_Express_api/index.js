const express = require("express");
const fs = require("fs");
const app = express();

console.log("Before");
const content = fs.readFileSync("posts.json","utf-8");
const jsonPosts = JSON.parse(content);

function getAllPostHandler(req,res) {
    try {
        console.log("Recieved get Request");
    // const postData = {
    //     "id": 1,
    //     "title": "His mother had always taught him",
    //     "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    //     "tags": [
    //         "history",
    //         "american",
    //         "crime"
    //     ],
    //     "reactions": {
    //         "likes": 192,
    //         "dislikes": 25
    //     },
    //     "views": 305,
    //     "userId": 121
    // }
    res.status(200).json(jsonPosts);
    } catch(err) {
        res.status(500).json({
            response: "Something went wrong our end"
        })
    }
}


function getPostById(req, res) {
        try{
            const postid = req.params.postId;
            console.log("postId", postid);
            const postsArr = jsonPosts.posts;
            for (let i = 0; i < postsArr.length; i++) {
                if (postsArr[i].id == postid) {
                    return res.status(200).json({
                        post: postsArr[i]
                    })
                }
            }
            res.status(404).json({
                post: "post is not found"
            })
        } catch(err) {
            res.status(500).json({
                response: "Something went wrong our end"
            })
        }
}


function createPost(req, res) {
    try {
        console.log("req.body", req.body);
        const postsArr = jsonPosts.posts
        postsArr.push(req.body);
        res.status(201).json({
            message: "post created"
        })
    } catch(err) {
        res.status(500).json({
            response: "Something went wrong our end"
        })
    }
}


function updatePost(req, res) {

}


function deletePost(req, res) {
    
}

app.use(express.json());
app.post("/posts", createPost);
// get request
app.get("/posts", getAllPostHandler);
// get a post
app.get("/posts/:postId", getPostById);
app.get("/posts", updatePost);
app.get("/posts/:postId", deletePost);




// server start
app.listen(3000, function(){
    console.log("server is running at port 3000");
})
console.log("After");