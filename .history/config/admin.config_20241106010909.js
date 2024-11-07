const UserModel = require('../controllers/user.model')
const bcrypt = require('bcrypt')

module.exports.adminCreateConfig = async (event, args) => {
    try {
        const role = 'admin'
        const password = '1234'
        const admin = await UserModel.create({
            name: 'Admin',
            username: 'admin',
            password: await bcrypt.hash(password, 7),
            role: role,
        })

        admin.save()
        console.log('Admin is created')
    } catch (error) {
        return { status: 500, error: 'Server Error' }
    }
}
