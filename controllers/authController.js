const User = require('../models/userModel');


exports.loginGet = (req, res, next) => {
    res.render('login', {
        pageTitle: 'Login',
        page: '',
        isAuthendicated: req.session.isLoggedIn
    });
};


exports.loginPost = (req, res, next) => {
    req.session.isLoggedIn = true;
    res.redirect('/');
};

exports.logoutPost = (req, res, next) => {
    req.session.destroy(error => {
        console.log(error);
        res.redirect('/');
    });
};


exports.signUpget = (req, res, next) => {
    res.render('sign-up', {
        pageTitle: 'Sign up',
        page: 'sign-up',
        isAuthendicated: req.session.isLoggedIn
    })
};

exports.signUpPost = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({ username: username })
        .then(userDoc => {
            if (userDoc) {
                return res.redirect('/sign-up');
            }
            const user = new User({
                username: username,
                password: password
            });
            return user.save();
        })
        .then(result => {
            console.log(result);
            res.redirect('/login')
        })
        .catch(error => {
            console.log(error);
        })
};