const mongoose = require('mongoose');
const projectSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    status: { type: Boolean, required: true, default: 0 },
    users: { type: Array },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('Project', projectSchema);
