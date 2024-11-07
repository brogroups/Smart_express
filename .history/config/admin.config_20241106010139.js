const UserModel = require('../models/user.model')

module.exports.adminCreateConfig = async (event, args) => {
    try {
        const role = 'admin'
        const admin = await UserModel.create({
            name: 'Admin',
            username: 'admin',
            password
            role: role,
        })

        admin.save()
        console.log('Admin is created')
    } catch (error) {
        return { status: 500, error: 'Server Error' }
    }
}
