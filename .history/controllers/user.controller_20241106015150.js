const UserModel = require('../models/user.model')
const bcrypt = require('bcrypt')

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
        const { name, username, password, role } = req.body
        const hashedPassword = await bcrypt.hash(password, 7)
        if (!name || !username || !role) {
            // return {
            // status: 400,
            // error: 'Some line is missed',
            // }
            return res.status(400).send('Please add all fields')
        }

        const user = await UserModel.create({
            name,
            username,
            password: hashedPassword,
            role,
        })
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

module.exports.listUser = async (event, args, req, res) => {
    try {
        const users = await getUserById.find()
        // return {
        // status: 200,
        // error: null,
        // args: users,
        // }

        return res.status(400).json({ users })
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

        // return {
        // status: 200,
        // message: 'Updated',
        // }

        res.status(200)
    } catch (error) {
        return { status: 500, error: 'Server Error' }
    }
}

module.exports.deleteUser = async (event, args, req, res) => {
    try {
        const { id } = req.body
        await getUserById(id)

        await UserModel.findOneAndDelete(id)
        // return {
        // status: 200,
        // message: 'User Deleted',
        // }

        res.status(200)
    } catch (error) {
        return { status: 500, error: 'Server Error' }
    }
}

// Logic For Login
module.exports.checkLoginUser = async (username) => {
    try {
        const user = await UserModel.findOne({ username })
        if (!user) {
            return {
                status: 404,
                error: 'User not found',
            }
        }

        return user
    } catch (error) {
        return { status: 500, error: 'Server Error' }
    }
}
