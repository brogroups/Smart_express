const mongoose = require("mongoose");

const Role = {
    admin: 'admin', 
    manager: 'manager',
    salesman: 'salesman'
};

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true  // Add any validation if necessary
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: Object.values(Role),  // Ensure the role is one of the defined values
        default: Role.manager        // Set the default value to 'manager'
    }
});

const UserModel = mongoose.model('User', User);

module.exports = UserModel;
