// Package Importing
const mongoose = require("mongoose");
const { v4 } = require("uuid");

// User Schema Creation
const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: v4
    },
    name: {
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
    number: {
        type: Number,
        trim: true,
        required: true,
    },
    bio: {
        type: String,
        trim: true
    },
    role: {
        type: String,
        trim: true,
        default : "User"
    },
    profile: {
        type: String,
        trim: true,
        default : "Private"
    },
    imageupload : {
        type: String,
    }
},{timestamps : true});

// Schema Exports

const userRegister = mongoose.model("aunthenticationregister",userSchema);

module.exports = {userRegister};