const mongoose = require('mongoose');
const taskSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: Boolean, required: true, default: 0 },
});
module.exports = mongoose.model('Task', taskSchema);
