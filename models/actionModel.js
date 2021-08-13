const mongoose = require("mongoose");
const actionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  person: { type: String, required: true },
  completionDate: { type: Date, required: true },
});

module.exports = mongoose.model("Action", actionSchema);
