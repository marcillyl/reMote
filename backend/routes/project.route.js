const express = require('express');
const router = express.Router();
const projectCtrl = require('../controllers/project.controller');
router.post('/', projectCtrl.createProject);
module.exports = router;
