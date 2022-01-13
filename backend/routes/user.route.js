const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller');
router.delete('/:id', userCtrl.deleteUser);
module.exports = router;
