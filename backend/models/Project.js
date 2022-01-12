const mongoose = require('mongoose');
const projectSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: Boolean, required: true, default: 0 },
});
module.exports = mongoose.model('Project', projectSchema);
