const LeadModel = require('../models/lead.model')

module.exports.getUserById = async (id) => {
    try {
        const user = await LeadModel.findById(id)
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

module.exports.createUser = async (req, res) => {
    try {
        const { name, username, password, role } = req.body
        const hashedPassword = await bcrypt.hash(password, 7)
        if (!name || !username || !role) {
            // return {
            // status: 400,
            // error: 'Some line is missed',
            // }
            res.status(400).send('Please add all fields')
        }

        const user = await LeadModel.create({
            name,
            username,
            password: hashedPassword,
            role,
        })
        await user.save()

        // return {
        // status: 201,
        // error: null,
        // args: user.toObject(),
        // }
        res.status(200).json({ user })
    } catch (error) {
        return { status: 500, error: 'Server Error' }
    }
}

module.exports.listUser = async (req, res) => {
    try {
        const users = await LeadModel.find().lean()
        // return {
        // status: 200,
        // error: null,
        // args: users,
        // }

        res.status(200).json({ users })
    } catch (error) {
        // return { status: 500, error: 'Server Error' }
    }
}

module.exports.updateUser = async (req, res) => {
    try {
        const { id, name, username, role } = req.body
        const user = await getUserById(id)

        await LeadModel.findByIdAndUpdate(
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

        res.status(200).json({ message: 'Success' })
    } catch (error) {
        // return { status: 500, error: 'Server Error' }
    }
}

module.exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.body
        if (!id) {
            req.status(200).json({ message: 'sds' })
        }
        console.log(id)
        // await getUserById(id)

        // await LeadModel.findByIdAndDelete(id)
        // return {
        // status: 200,
        // message: 'User Deleted',
        // }

        res.status(200).json({ message: 'Success' })
    } catch (error) {
        // return { status: 500, error: 'Server Error' }
        res.status(500).json({ message: error })
    }
}

// Logic For Login
module.exports.checkLoginUser = async (username) => {
    try {
        const user = await LeadModel.findOne({ username })
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
