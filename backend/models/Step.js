const mongoose = require('mongoose');
const stepSchema = mongoose.Schema({
  projectId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: Boolean, required: true, default: 0 },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task',
    },
  ],
});
module.exports = mongoose.model('Step', stepSchema);
