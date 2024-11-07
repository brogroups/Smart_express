const jwt = require('jsonwebtoken')

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
