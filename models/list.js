const mongoose = require('mongoose')
require('./item')

export const listSchema = new mongoose.Schema({
    name: {type: String, required: true},
    items: [{type: mongoose.Schema.Types.ObjectId, ref: 'Item'}]
})

const List = mongoose.model('List', listSchema)
module.exports = List