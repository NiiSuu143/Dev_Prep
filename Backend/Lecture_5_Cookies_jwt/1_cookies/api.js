const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

// -> productPage
// -> first time -> cookie
// second time -> ...
app.use(cookieParser());

app.get("/", function (req, res) {
    console.log("Get request recieved");
    // res -> cookie
    res.cookie("prevpage", "home", {    // key -> prevpage ; value -> home(route)
        maxAge: 1000 * 60 * 60 * 24,
    })
    // res is send
    res.status(200).json({
        message: "recieved request on home page"
    })

}) 

app.get("/product", function(req, res) {
    let messageStr = "";
    if(req.cookies && req.cookies.prevpage) {
        messageStr = `You visited ${req.cookies.prevpage} page before.`
    } else {
        messageStr = "No previous page found";
    }

    // console.log("Get request recieved on product page", req.cookies);

    res.status(200).json({
        message: messageStr
    })
})

app.get("/clearCookies", function(req, res) {
    // clearing the cookie -> name of the cookie. path where it was created
    res.clearCookie("prevpage", {path: "/"});
    res.status(200).json({
        message: "I have cleared your cookie"
    })
})

// server -> run on a port
app.listen(3000, function() {
    console.log(`server is listening to port 3000`);
})