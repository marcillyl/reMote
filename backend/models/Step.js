const mongoose = require('mongoose');
const stepSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: Boolean, required: true, default: 0 },
});
module.exports = mongoose.model('Step', stepSchema);
