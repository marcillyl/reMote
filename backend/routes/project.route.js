const express = require('express');
const router = express.Router();
const projectCtrl = require('../controllers/project.controller');
router.post('/:id', projectCtrl.createProject);
module.exports = router;
