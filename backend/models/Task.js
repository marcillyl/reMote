const mongoose = require('mongoose');
const stepSchema = mongoose.Schema({
  stepId: { type: String, required: true },
  step: { type: mongoose.Schema.Types.ObjectId, ref: 'Step' },
  title: { type: String, required: true },
  content: { type: String, required: true },
  status: { type: Boolean, required: true, default: 0 },
});
module.exports = mongoose.model('Task', stepSchema);
