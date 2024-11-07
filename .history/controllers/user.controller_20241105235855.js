const UserModel = require('../models/user.model')

module.exports.getById = async (id) => {
    try {
        const user = await 
    } catch (error) {
        return { status: 500, error: 'Server Error' }
    }
}

module.exports.createUser = async (event, args, req, res) => {
    try {
        const { name, username, role } = req.body
        if (!name || !username || !role) {
            return {
                status: 400,
                error: 'Some line is missed',
            }
        }

        const user = await UserModel.create({ name, username, role })
        await user.save()

        return {
            status: 201,
            error: null,
            args: user.toObject(),
        }
    } catch (error) {
        return { status: 500, error: 'Server Error' }
    }
}

module.exports.listUser = async (event, args) => {
    try {
        const users = await UserModel.find().exec()
        return {
            status: 200,
            error: null,
            args: users,
        }
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
