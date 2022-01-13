const express = require('express');
const router = express.Router();
const taskCtrl = require('../controllers/task.controller');
router.post('/:id', taskCtrl.createTask);
module.exports = router;
