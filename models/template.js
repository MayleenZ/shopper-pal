const mongoose = require('mongoose')
require('./category')
require('./user')

const templateSchema = new mongoose.Schema({
    name: {type: String, required: true},
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
})

const Template = mongoose.model('Template', templateSchema)

module.exports = Template