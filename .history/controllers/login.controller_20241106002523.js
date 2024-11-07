const bcrypt = require('bcrypt')
const { checkLoginUser } = require('./user.controller')

module.exports.listUser = async (event, args, req) => {
    try {
        const user = await checkLoginUser()
    } catch (error) {
        return { status: 500, error: 'Server Error' }
    }
}
