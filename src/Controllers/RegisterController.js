// Package Importing
const RegisterService = require("../Services/RegisterService");


// User Register Creation
const userRegister = async (req, res) => {
    try {
        let data = await RegisterService.userCreateService(req);
        // User Register Checking
        if (!data) {
            res.status(409).send({ message: "User Already Registered" })
        }
        else {
            res.send({ data, success: "User Registered Successfully" })
        }
    }
    catch (e) {
        console.error(e)
    }

}

// View Separate User Details
const singleUser = async (req, res) => {
    try {
        let getUserInfo = await RegisterService.single_user_view(req)
        res.send(getUserInfo)
    }
    catch (e) {
        console.error(e)
    }
}


// File Uploading
const ImageUploading = async(req,res)=>{
    res.json({
        success:1,
        imageUrl:`http://localhost:1000/picture/${req.file.filename}`
    })
}

// Exports Model

module.exports = { userRegister, singleUser , ImageUploading }