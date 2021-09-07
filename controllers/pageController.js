const Album = require('../models/albumModel');

exports.about = (req, res, next) => {
    res.render('about', {
        pageTitle: 'About page',
        page: '/about',
        isAuthenticated: req.session.isLoggedIn
    });
};

exports.home = (req, res, next) => {
    const albums = Album.find()
        .then(albums => {
            res.render('home', {
                pageTitle: 'Home page',
                albums: albums,
                page: '/',
                isAuthenticated: req.session.isLoggedIn
            });
        })
        .catch((error) => {
            console.log(error);
        });
};


exports.getAlbumDetails = (req, res, next) => {
    const album = Album.findById(req.params.albumId)
        .then(album => {
            res.render('album-details', {
                pageTitle: 'Album details',
                albums: album,
                page: '',
                isAuthenticated: req.session.isLoggedIn
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

exports.deletealbum = (req, res, next) => {
    Album.findOneAndDelete(req.body.id)
        .then(result => {
            res.redirect('/');
        })
        .catch(error => {
            console.log(error);
        });

};

exports.editalbum = (req, res, next) => {
    const albums = Album.findById(req.body.id)
        .then(albums => {
            console.log(albums);
            res.render('edit-album', {
                pageTitle: 'Edit album',
                albums: albums,
                page: '',
                isAuthenticated: req.session.isLoggedIn
            });
        })
        .catch(error => {
            console.log(error);
        });

};

exports.addToCart = (req, res, next) => {
    console.log(req.body);
};

exports.test = (req, res, next) => {
    console.log('test');
};