const fs = require("fs");

// initially content is send as binary code or number 
// so we need to convert it into string to make it readable by users
const content = fs.readFileSync("posts.json", "utf-8");
console.log("content", content);

// const jsonPosts = JSON.parse(content);