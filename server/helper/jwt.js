const jwt = require("jsonwebtoken")
const secret = process.env.SECRET_JWT

const signToken = (payload) => {
    return jwt.sign(payload, secret)
}

const verifyToken = (token) => {
    return jwt.verify(token, secret)
}

module.exports = {signToken, verifyToken}