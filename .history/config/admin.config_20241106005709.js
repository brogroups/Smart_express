const UserModel = require('../models/user.model')

module.exports.adminCreateConfig = async (event, args) => {
    try {
        const admin = await UserModel.create({
            name: 'Admin',
            username: 'admin',
        })
    } catch (error) {
        return { status: 500, error: 'Server Error' }
    }
}
