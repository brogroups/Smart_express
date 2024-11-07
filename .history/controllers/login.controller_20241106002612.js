const bcrypt = require('bcrypt')
const { checkLoginUser } = require('./user.controller')

module.exports.loginUser = async (event, args, req) => {
    try {
        const { username } = req.body
        const user = await checkLoginUser()
    } catch (error) {
        return { status: 500, error: 'Server Error' }
    }
}
