const bcrypt = require('bcrypt')
const { checkLoginUser } = require('./user.controller')
const { generateToken } = require('../config/jwt.config')

module.exports.loginUser = async (req, res) => {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            return res.status(400).send('Please add all fields')
        }
        const user = await checkLoginUser(username)

        const isValidPassword = await bcrypt.compare(user.password, password)
        if (!isValidPassword) {
            return res.status(400).send('Password is incorrect')
            // return {
            // status: 400,
            // error: 'Password is not correct',
            // }
        }

        const token = generateToken(user.username, user.role)
        // return {
        // status: 200,
        // accessToken: token,
        // }
        return res.status(200).json({ accessToken: token })
    } catch (error) {
        return { status: 500, error: 'Server Error' }
    }
}
//
module.exports.loginUser = async (req, res) => {
    try {
        const { username, password } = req.body

        // Check if both fields are provided
        if (!username || !password) {
            return res.status(400).send('Please add all fields')
        }

        // Check if user exists in the database
        const user = await checkLoginUser(username)
        if (!user) {
            return res.status(400).send('User not found')
        }

        // Compare the provided password with the hashed password in DB
        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) {
            return res.status(400).send('Password is incorrect')
        }

        // Generate a token
        const token = generateToken(user.username, user.role)

        // Send the token back as the response
        return res.status(200).json({ accessToken: token })
    } catch (error) {
        console.error(error)
        return res.status(500).send('Server Error')
    }
}
