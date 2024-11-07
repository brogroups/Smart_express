const mongoose = require("mongoose")


const Role = {
    admin: 'admin', 
    manager: 'salesman',
}

const User = new mongoose.Schema({
    name: {},
    username: {},

})