const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
router.delete('/:id', userController.deleteUser);
module.exports = router;
