const mongoose = require('mongoose');
const stepSchema = mongoose.Schema({
  projectId: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  status: { type: Boolean, required: true, default: 0 },
});
module.exports = mongoose.model('Step', stepSchema);
