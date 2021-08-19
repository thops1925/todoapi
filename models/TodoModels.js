const mongoose = require('mongoose')


const Todo = new mongoose.Schema({
    username: { type: 'String', required: true, trim: true },
    email: { type: 'String', required: true, trim: true }
}, { timestamps: true })


module.exports = mongoose.model('Todo', Todo)