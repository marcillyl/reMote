const mongoose = require('mongoose');
const projectSchema = mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  status: { type: Boolean, required: true, default: 0 },
  steps: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Step',
    },
  ],
});
module.exports = mongoose.model('Project', projectSchema);
