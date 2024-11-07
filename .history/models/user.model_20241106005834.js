const mongoose = require('mongoose')

module.exports.role = {
    admin: 'admin',
    manager: 'manager',
    salesman: 'salesman',
}

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: Object.values(Role),
        default: this.role.salesman,
    },
})

const UserModel = mongoose.model('User', User)
module.exports = UserModel
