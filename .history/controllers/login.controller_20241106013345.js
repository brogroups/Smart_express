const bcrypt = require('bcrypt')
const { checkLoginUser } = require('./user.controller')
const { generateToken } = require('../config/jwt.config')

module.exports.loginUser = async (event, args, req, res) => {
    try {
        const { username, password } = req.body
        if (!username && !password) {
            res.send('Please add all lines')
        }
        const user = await checkLoginUser(username)

        const isValidPassword = await bcrypt.compare(user.password, password)
        if (!isValidPassword) {
            // return {
            // status: 400,
            // error: 'Password is not correct',
            // }
            res.send('Password not correct')
        }

        const token = generateToken(user.username, user.role)
        // return {
        // status: 200,
        // accessToken: token,
        // }
        res.send(token)
    } catch (error) {
        return { status: 500, error: 'Server Error' }
    }
}
