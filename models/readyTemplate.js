const mongoose = require('mongoose')
require('./category')
require('./user')

const readyTemplateSchema = new mongoose.Schema({
    name: {type: String, required: true},
    sortOrder: Number,
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
})

const ReadyTemplate = mongoose.model('ReadyTemplate', readyTemplateSchema)

module.exports = ReadyTemplate