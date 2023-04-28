const mongoose = require("mongoose");
const listSchema = require('./list')

const topicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  emoji: { type: String },
  lists: [listSchema]
});

const Topic = mongoose.model("Topic", topicSchema);
module.exports = Topic
