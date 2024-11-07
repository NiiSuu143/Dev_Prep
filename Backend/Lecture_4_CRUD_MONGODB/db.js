const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
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

/*****************************************************************************************************/ 

/****************************************************************************/
// {
//     "name": "Sunanda",
//         "email": "abcd@gmail.com",
//             "password": "abc@h12345",
//    

    // user create -> Jio cinema
    const schemaRules = {
        name: {
            type: String,
            required: [true, "name is required"],
        },
        email: {
            type: String,
            required: [true, "email is required"],
            unique: [true, "email should be uniqued"],
        },
        password: {
            type: String,
            required: [true, "password is required"],
            minLength: [10, "password should be atleast of 6 length"],
        },
        confirmPassword: {
            type: String,
            required: true,
            // custom validation
            validate: [function() {
                return this.password == this.confirmPassword;
            }, "password should be equal to confirm password"]
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        isPremium: {
            type: Boolean,
            default: false,
        },
        roll: {
            type: String,
            // these are the only possible value for the role
            enum: ["user", "admin", "feed curator", "moderate"],
            default: "user"
        }
    }

    const userSchema = new mongoose.Schema(schemaRules);

    /***************hooks in mongodb********************/ 
    userSchema.pre("save", function(next) {
        console.log("Pre save was called");
        this.confirmPassword = undefined;
        next();
    })
    userSchema.post("save", function () {
        console.log("post save was called");
        this.__v = undefined;
        this.password = undefined;
    })
    

    // final touch point
    const UserModel = mongoose.model("User", schemaRules);


    /**
 * create -> UseModel.create(object);
 * getAll -> Usermodel.find();
 * getById -> userModel.finById
 * deleteById -> userMOdel.deleteById
 * 
 * **/


const createUser = async function (req, res) {
    try {
        const userObject = req.body;

        const user = await UserModel.create(userObject);
        // send back the created user with status 201 (created)
        res.status(201).json(user);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "internal server error",
            error: err,
        })
    }
}

const getAllUser = async (req, res) => {
    try {

        const user = await UserModel.find();
        // if user is present -> send the resp
        if (user.length != 0) {
            res.status(200).json({
                message: user
            })
            // if it's not there then send user not found 
        } else {
            res.status(404).json({
                message: "did not get any user"
            })
        }
    } catch (err) {
        res.status(500).json({
            status: "Internal server error",
            message: err.message
        })
    }

}
const getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findById(id);
        // if user is present -> send the resp
        if (user) {
            res.status(200).json({
                message: user
            })
            // if it's not there then send user not found 
        } else {
            res.status(404).json({
                message: "did not get the user"
            })
        }
    } catch (err) {
        res.status(500).json({
            status: "Internal server error",
            message: err.message
        })
    }

}
const deleteUser = async (req, res) => {
    try {
        let { id } = req.params;
        const user = await UserModel.findByIdAndDelete(id);
        if (user === null) {
            res.status(404).json({
                status: "sucess",
                message: "user does not exist",

            })
        } else {
            res.status(200).json({
                status: "sucess",
                message: "user is deleted",
                user: user
            })
        }


    } catch (err) {
        res.status(500).json({
            status: "Internal server error",
            message: err.message
        })
    }
}



    /***********
     * create -> UserModel.create(object);
     * ***************/ 
    app.use(express.json());
    // add middleware -> user -> object is not empty
    app.post("/user", createUser)

    app.get("/user", getAllUser);
    app.get("/user/:id", getUser);
    app.delete("/user/:id", deleteUser);

    app.listen(3000, function () {
        console.log("Server started on port 3000");
    })




    // model -> entity

    // collection
        // -> no guards

    // model are special collection where every document should follow a schema

     // fool proof -> 