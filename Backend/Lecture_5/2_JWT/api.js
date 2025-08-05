const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const util = require("util");
const promisify = util.promisify;
const promisfiedJWTsign = promisify(jwt.sign);
const promisfiedJWTverify = promisify(jwt.verify);

app.use(cookieParser());

const SECRET_KEY = "king";


// token creation
app.get("/sign", async function(req, res) {

    // token crate
    const authToken = await promisfiedJWTsign({ "payload": "sadfasdf"}, SECRET_KEY);
    // token -> cookies
    res.cookie("jwt", authToken, {    // key -> prevpage ; value -> home(route)
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true, // it can only be accessed by the server

    })
    // res send
    res.status(200).json({
        message: "signed the jwt and sending it in the cookies"
    })

})


// token verificaiton
app.get("/verify", async function (req, res) {
    if (req.cookies && req.cookies.jwt) {
        const authToken = req.cookies.jwt;
        const unlockedToken = await promisfiedJWTverify(authToken, SECRET_KEY);

        res.status(200).json({
            message: "jwt token is verified",
            "unlockedToken": unlockedToken
        })
    } else {
        res.status(400).json({
            message: "no jwt token found"
        })
    }
})

// server -> run on a port
app.listen(3000, function() {
    console.log(`server is listening to port 3000`);
})