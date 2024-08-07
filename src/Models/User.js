// Package Importing
const mongoose = require("mongoose");
const { v4 } = require("uuid");

// User Schema Creation
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: true,

    },
    role: {
        type: String,
        trim: true,
        default : "User"
    },
    purpose:{
        type:String,
        trim:true,
        default:["Personal"],
        enum:['Personal',"Education","Business"]
    }
},{timestamps : true});

// Schema Exports

const userRegister = mongoose.model("Users",userSchema);

module.exports = {userRegister};