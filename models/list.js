const mongoose = require('mongoose')


const listSchema = new mongoose.Schema({
    user: { type: String, required: true},
    listName: { type: String, required: true },
    item1: { type: String, required: true },
    item2: { type: String, required: true },
    item3: { type: String, required: true },
    item4: { type: String, required: true },
    item5: { type: String, required: true },
})

const List = mongoose.model('List', listSchema)
module.exports = List