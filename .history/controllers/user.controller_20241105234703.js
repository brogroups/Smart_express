const UserModel = require('../models/user.model')

module.exports.createUser = async (event, args, req, res) => {
    try {
        const { name, username, role } = req.body
    } catch (error) {
        return { status: 500, error: 'Server Error' }
    }
}

module.exports.listUsers = async () => {
    try {
    } catch (error) {
        return { status: 500, error: 'Server Error' }
    }
}

module.exports.updateUser = async () => {
    try {
    } catch (error) {
        return { status: 500, error: 'Server Error' }
    }
}

module.exports.deleteUser = async () => {
    try {
    } catch (error) {
        return { status: 500, error: 'Server Error' }
    }
}
