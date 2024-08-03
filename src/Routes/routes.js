// Package Importing
const express = require("express");
const router = express.Router();

// User 
const Controller = require("../Controllers/RegisterController")
const ControllerLogin = require("../Controllers/LoginController")
const Auth = require ("../Middleware/Auth")

// Admin
const AdminController = require("../Admin/AdminController")
const AdminLoginController = require ("../Admin/AdminLoginController")
const AdminAuth = require ("../Middleware/AdminAuth")

// View all Profile
const ViewAllProfile = require ("../Admin/ViewAllUserProfile")

// View only Public Profile
const PublicProfile = require ("../Controllers/ProfileController")

// Image Uploading 
const FileUpload = require ("../Middleware/FileUploading");

// Edit Profile
const UserEditProfile = require("../Controllers/EditProfileController")

// Logout
const Logout = require ("../Services/Logout")


// API
// User Register
router.route("/register").post(Controller.userRegister)

// User Login 
router.route("/logincreate").post(ControllerLogin.userLoginCheck)

// Verify Auth Token : User
router.route("/loginverify").post(Auth.login_token_verify,ControllerLogin.login_verify_token)

// User View all the Details
router.route("/getprofile").get(Auth.login_token_verify,Controller.singleUser)

// Admin Register
router.route("/adminregister").post(AdminController.adminRegister)

// Admin Login 
router.route("/adminlogincreate").post(AdminLoginController.adminLoginCheck)

// Verify Auth Token : Admin
// router.route("/adminloginverify").post(AdminAuth.login_token_verify,AdminLoginController.login_verify_token)

// View all the User Profile for Admin
router.route("/viewallprofile").get(AdminAuth.login_token_verify,AdminAuth.isAdmin,ViewAllProfile.get_all_user_profile)

// User : To view only Public User
router.route("/viewpublicprofile").get(PublicProfile.view_public_user)

// Image Uploading
router.route("/imageupload").post(FileUpload.upload.single("images"),Controller.ImageUploading)

// Edit Profile Data
router.route("/editprofile").put(Auth.login_token_verify,UserEditProfile.editUserData)

// Logout
router.route("/logout").post(Logout.logout)

// Router Exports
module.exports = { router }