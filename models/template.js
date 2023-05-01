const mongoose = require("mongoose");
const {list} = require('./list')

const TemplateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  listArray: [list]
});

const template = mongoose.model('template', TemplateSchema)
module.exports = template


