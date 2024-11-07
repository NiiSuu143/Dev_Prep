const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({path: "./Lecture_3_middleWare_db/.env"})
/***
 * sensitive info
 -> username
 -> password
 -> you should be able to use it
 * ****/ 
const dbLink = `mongodb+srv://${process.env.DB_USERNAME}
:${process.env.DB_PASSWORD}@cluster0.m8fg9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(dbLink)
    .then(function (connection) {
        console.log("connected to db")
    }).catch(err => console.log(err))