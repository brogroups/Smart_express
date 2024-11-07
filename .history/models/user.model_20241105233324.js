const mongoose = require("mongoose")


const Role = {
    admin: 'admin', 
    manager: 'manager',
}

const User = new mongoose.Schema({
    name: {},
    username: {},

})