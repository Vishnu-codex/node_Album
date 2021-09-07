const Album = require('../models/albumModel');

exports.addAlbumGet = (req, res, next) => {
    res.render('add-album', {
        pageTitle: 'Add Album',
        page: '/add-album',
        isAuthenticated: req.session.isLoggedIn
    });
};

exports.addAlbumPost = (req, res, next) => {
    const album = new Album({
        title: req.body.title,
        authorName: req.body.authorName,
        description: req.body.description
    });


    album
        .save()
        .then(result => {
            console.log(result);
            res.redirect('/');
        })
        .catch(error => {
            console.log(error);
        });
};