const mongoose = require("mongoose");
require('./category')

const TemplateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  sortOrder: Number,
});

const template = mongoose.model('template', TemplateSchema)
module.exports = template


