const mongoose = require("mongoose");
// const {list} = require('./list')

const TemplateSchema = new mongoose.Schema({
  templateName: { type: String, required: true },
  name1: { type: String, required: true },
  name2: { type: String, required: true },
  name3: { type: String, required: true },
  name4: { type: String, required: true }
  // owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  // listArray: [list]
});

const template = mongoose.model('template', TemplateSchema)
module.exports = template


