const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const validator = require('validator');
const User = require('../models/User');
exports.signup = async (req, res) => {
  try {
    const emailOk = validator.isEmail(req.body.email);
    const passwordOk = validator.isStrongPassword(req.body.password, {
      minUppercase: 0,
      minSymbols: 0,
      minLength: 7,
    });
    if (!emailOk || !passwordOk) {
      res.status(400).json({ message: 'Bad request!' });
      return;
    }
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
    });
    await user.save();
    res.status(201).json({ message: '' });
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).json({ message: 'Unauthorized!' });
      return;
    }
    const passwordOk = await bcrypt.compare(req.body.password, user.password);
    if (!passwordOk) {
      res.status(401).json({ message: 'Unauthorized!' });
      return;
    }
    const token = jsonwebtoken.sign(
      {
        userId: user._id,
        username: user.username,
      },
      process.env.TOKEN,
      {
        expiresIn: '1h',
      }
    );
    res.status(200).send({ token: token, id: user._id });
  } catch (error) {
    res.status(500).send(error);
  }
};
