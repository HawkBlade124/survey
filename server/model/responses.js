const mongoose = require('mongoose');

const responseSchema = mongoose.Schema({
  name: { type: String, required: true },
  major: { type: String, required: true },
  food: { type: String, required: true }
});

module.exports = mongoose.model('Response', responseSchema);
