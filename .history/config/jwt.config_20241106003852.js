const jwt = require('jsonwebtoken')

module.exports.generateToken = (userId) =>
    jwt.sign(
        {
            userId,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '48h',
        }
    )
