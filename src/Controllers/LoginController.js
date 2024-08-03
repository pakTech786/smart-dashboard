// Package Importing
const LoginService = require("../Services/LoginService");
const Auth = require("../Middleware/Auth")

// Login Check
const userLoginCheck = async (req, res) => {
    // login data
    let login = await LoginService.userLogin(req);
    // Token Generate
    let token = await Auth.login_token(login)
    // if login true
    if (login) {
        res.send({ tokenname: token, Name: login.name, success: "Login Successfully" })
    }
    else {
        res.status(400).send({ failed: "Invalid Credentials" })
    }

}

// Login Verify after token genearate through (get_user_details service)

const login_verify_token = async (req, res) => {
    let data = await LoginService.get_user_details(req);
    res.send(data)
}

// Module Exports
module.exports = { userLoginCheck, login_verify_token };

