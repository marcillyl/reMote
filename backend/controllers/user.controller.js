const User = require('../models/User');
exports.deleteUser = async (req, res) => {
  try {
    User.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: 'User deleted!' });
  } catch (error) {
    res.status(500).send(error);
  }
};
