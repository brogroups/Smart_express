const mongoose = require("mongoose")


const Role = {
    admin: 'admin', 
    manager: 'manager',
    salesman: 'salesman'
}

const User = new mongoose.Schema({
    name: {},
    username: {},

})