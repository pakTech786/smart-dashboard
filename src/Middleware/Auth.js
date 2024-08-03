// Package Importing
const jwt = require("jsonwebtoken");
const { userRegister } = require("../Models/Register");

// Token Generate : Any Paramater name given
const login_token = async (data) => {
    // Id Get
    let { _id } = data;
    // Token Creation
    let token_create = jwt.sign({ id: _id }, "secret");
    return token_create
}

// Token Verify
const login_token_verify = async (req, res, next) => {
    try {
        let headers = req.headers;
        // check Headers exist or not 
        if (!headers.authorization) {
            return res.status(401).send({ message: "Missing Authorization Value" })
        }
        let bearer = headers.authorization.split(' ');
        let token = bearer[1];
        // Token exist or not
        if (!token) {
            return res.status(401).send({ message: "Token missing : Invalid Token" })
        }
        let payload = jwt.verify(token, "secret");
        // Id decreypt
        if (!payload.id) {
            return res.status(401).send({ message: "Token missing : Invalid Token" })
        }
        // save payload.id into one var name
        let userId = payload.id;
        let find_Id = await userRegister.findById(userId);
        // check user id exist or not
        if (!find_Id) {
            return res.status(401).send({ message: "User Id not Present" })
        }
        // send user details to frontend
        req.userId = userId;
        next()
    }
    catch (error) {
        next(error)
    }
}

// Module Exports
module.exports = { login_token, login_token_verify }