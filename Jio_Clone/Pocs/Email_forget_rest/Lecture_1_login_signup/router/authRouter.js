const express = require('express');
const authRouter = express.Router();

const { loginHandler, signupHandler, logoutHandler, protectRouteMiddleware, profilehandler, forgetPasswordHandler, resetPasswordHandler } = require("../controller/authController");

authRouter
    .post("/login", loginHandler)
    .post("/signup", signupHandler)
    .get("/logout", logoutHandler)
    .get("/profile", protectRouteMiddleware, profilehandler)
    .patch("/forgetPassword", forgetPasswordHandler)
    .patch("/resetPassword/:userId", resetPasswordHandler)

module.exports=authRouter;