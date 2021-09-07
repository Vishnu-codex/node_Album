const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');


router.get('/login', authController.loginGet);
router.post('/login', authController.loginPost);


module.exports = router;