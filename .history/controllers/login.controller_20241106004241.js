const bcrypt = require('bcrypt')
const { checkLoginUser } = require('./user.controller')
const { generateToken } = require('../config/jwt.config')

module.exports.loginUser = async (event, args, req) => {
    try {
        const { username, password } = req.body
        const user = await checkLoginUser(username)

        const isValidPassword = await bcrypt.compare(user.password, password)
        if (!isValidPassword) {
            return {
                status: 400,
                error: 'Password is not correct',
            }
        }

        const token = await generateToken(user.username, user.role)
        return {
            status: 200,
            accessToken: token,
        }
    } catch (error) {
        return { status: 500, error: 'Server Error' }
    }
}
