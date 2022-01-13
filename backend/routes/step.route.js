const express = require('express');
const router = express.Router();
const stepCtrl = require('../controllers/step.controller');
router.post('/:id', stepCtrl.createStep);
module.exports = router;
