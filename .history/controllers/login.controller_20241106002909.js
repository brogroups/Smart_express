const bcrypt = require('bcrypt')
const { checkLoginUser } = require('./user.controller')

module.exports.loginUser = async (event, args, req) => {
    try {
        const { username, password } = req.body
        const user = await checkLoginUser(username)

        const isValidPassword = await bcrypt.compareSync(
            user.password,
            password
        )
    } catch (error) {
        return { status: 500, error: 'Server Error' }
    }
}
