const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
router.post('/:id', userController.deleteUser);
module.exports = router;
