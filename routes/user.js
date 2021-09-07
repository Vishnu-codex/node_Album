const express = require('express');
const router = express.Router();

const pageController = require('../controllers/pageController');
const authController = require('../controllers/authController');

router.get('/', pageController.home);

// router.get('/test', pageController.test);

router.get('/about', pageController.about);
router.get('/album-details/:albumId', pageController.getAlbumDetails);
router.get('/login', authController.loginGet);
router.post('/login', authController.loginPost);
router.post('/logout', authController.logoutPost);
router.get('/sign-up', authController.signUpget);
router.post('/sign-up', authController.signUpget);
router.get('/edit-album', pageController.editalbum);
router.post('/delete-album', pageController.deletealbum);

//router.post('/add-to-cart', pageController.addToCart)

module.exports = router;
