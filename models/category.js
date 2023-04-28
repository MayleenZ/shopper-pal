const mongoose = require('mongoose')
require("./topic")
require("./list")
require("./item")

const categorySchema = new mongoose.Schema({
    name: {type: String, required: true},
    topics: [{type: mongoose.Schema.Types.ObjectId, ref: 'Topic'}],
    lists: [{type: mongoose.Schema.Types.ObjectId, ref: 'List'}],
    items: [{type: mongoose.Schema.Types.ObjectId, ref: 'Item'}]
})


const Category = mongoose.model('Category', categorySchema)
module.exports = Category