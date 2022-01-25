const mongoose = require('mongoose');
const stepSchema = mongoose.Schema({
  projectId: { type: String, required: true },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  title: { type: String, required: true },
  content: { type: String, required: true },
  status: { type: Boolean, required: true, default: 0 },
});
module.exports = mongoose.model('Step', stepSchema);
