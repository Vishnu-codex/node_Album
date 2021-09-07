const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');

router.get('/add-album', adminController.addAlbumGet);
router.post('/add-album', adminController.addAlbumPost);


module.exports = router;