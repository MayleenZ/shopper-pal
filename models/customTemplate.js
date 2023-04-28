const mongoose = require("mongoose");
require('./category')

const customTemplateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  isCustom: { type: Boolean, default: true }
});

const customTemplate = mongoose.model('customTemplate', customTemplateSchema)
module.exports = customTemplate