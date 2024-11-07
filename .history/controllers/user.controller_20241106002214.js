const UserModel = require('../models/user.model')

module.exports.getUserById = async (id) => {
    try {
        const user = await UserModel.findById(id)
        if (!user) {
            return {
                status: 404,
                error: 'Not Found',
            }
        }

        return user
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
        const users = await getUserById.find().exec()
        return {
            status: 200,
            error: null,
            args: users,
        }
    } catch (error) {
        return { status: 500, error: 'Server Error' }
    }
}

module.exports.updateUser = async (event, args, req) => {
    try {
        const { id, name, username, role } = req.body
        const user = await getUserById(id)

        await UserModel.findByIdAndUpdate(
            id,
            {
                name: name || user.name,
                username: username || user.username,
                role: role || user.role,
            },
            { new: true }
        )

        return {
            status: 200,
            message: 'Updated',
        }
    } catch (error) {
        return { status: 500, error: 'Server Error' }
    }
}

module.exports.deleteUser = async (event, args, req) => {
    try {
        const { id } = req.body
        await getUserById(id)

        await UserModel.findOneAndDelete(id)
        return {
            status: 200,
            message: 'User Deleted',
        }
    } catch (error) {
        return { status: 500, error: 'Server Error' }
    }
}

// Logic For Login
module.exports.checkLoginUser = (username) => {}
