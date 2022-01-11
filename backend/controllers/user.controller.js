const User = require('../models/User');
exports.deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: '' });
  } catch (error) {
    res.status(500).send(error);
  }
};
