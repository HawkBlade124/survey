var mongoose = require('mongoose');
const schema = mongoose.Schema({
  name: { type: String, required: true },
  major: { type: String, required: true },
  food: { type: String, required: true }
});

module.exports = mongoose.model('Surveys', schema);
