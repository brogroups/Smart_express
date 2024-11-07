const bcrypt = require('bcrypt')
const { checkLoginUser } = require('./user.controller')

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
    } catch (error) {
        return { status: 500, error: 'Server Error' }
    }
}
