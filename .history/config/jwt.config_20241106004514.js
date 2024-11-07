const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()

module.exports.generateToken = (userId, role) =>
    jwt.sign(
        {
            userId,
            role,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '48h',
        }
    )
