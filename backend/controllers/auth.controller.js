const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')
const validator = require('validator')
const User = require('../models/User')

exports.signup = async (req, res) => {
  try {
    const checkUser = await user.findOne({email: req.body.email})
    const checkEmail = validator.isEmail(req.body.email)
    const checkPassword = validator.isStrongPassword(req.body.password, {
      minUppercase: 0,
      minSymbols: 0,
      minLength: 7
    })
    if (!checkEmail || !checkPassword) {
      res.status(400).json({message: 'Bad request!'})
      return
    }
    if (checkUser) {
      res.status(400).json({message: 'Bad request!'})
      return
    }
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10)
    })
    await user.save()
    res.status(201).json({message: 'User created!'})
  } catch (error) {
    res.status(500).send(error)
  }
}

exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email})
    if (!user) {
      res.status(401).json({message: 'Unauthorized!'})
      return
    }
    const checkPassword = await bcrypt.compare(
      req.body.password,
      user.password
    )
    if (!checkPassword) {
      res.status(401).json({message: 'Unauthorized!'})
      return
    }
    const token = jsonwebtoken.sign({
      userId: user._id,
      username: user.username
    }, process.env.TOKEN, {
      expiresIn: '1h'
    })
    res.status(200).send({token: token})
  } catch (error) {
    res.status(500).send(error)
  }
}