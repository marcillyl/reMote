const User = require('../models/User');
exports.deleteUser = async (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: '' }))
    .catch(() => res.status(500));
};
