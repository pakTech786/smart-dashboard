// Package Importing
const { userRegister } = require("../Models/User");
const Bcryptjs = require("bcryptjs")

// Login Check
const userLogin = async (req) => {
    try {
        // Get Email and Password
        const { email, password } = req.body;
        // Check Email correct or not
        const findData = await userRegister.findOne({ email: email });
        // Compre Password
        const findPassword = await Bcryptjs.compare(password, findData.password);
        if (findData && findPassword != null) {
            return findData
        }
        else {
            return error("Incorrect Credentials")
        }
    }
    catch (e) {
        return console.error(e)
    }

}

// Get User Details : Auth Verfy Fnction (Through Auth function)

const get_user_details = async (req) => {
    // From auth to get userid in req col
    const { userId } = req;
    let find_id = await userRegister.findById(userId);
    if (!find_id) {
        return null
    }
    else {
        // send specify data in frontend to view in this obj variable
        
        return find_id;
    }
}


// Exports

module.exports = { userLogin, get_user_details}