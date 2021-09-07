const express = require('express');
const path = require('path');
const app = express();
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth')
//const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoDBsessionStore = require('connect-mongodb-session')(session);

const store = mongoDBsessionStore({
    uri: 'mongodb+srv://mydatabase:12345@cluster0.7zy8b.mongodb.net/myFirstDatabase',
    collection: 'sessions'
});

//app.use(cookieParser());


const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')))

app.use(session({
    secret: 'qwerty123uiop567',
    resave: false,
    saveUninitialized: false,
    store: store
}));

app.use((req, res, next) => {
    req.session.isLoggedIn = true;
    next();
});

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(userRoutes);
app.use(adminRoutes);
app.use(authRoutes);

const port = process.env.PORT || 8000;

// app.use((req, res, next) => {
//     res.cookie('First', 'valueIsThis', {
//         maxAge: 1000000,
//         httpOnly: true,
//         secure: true
//     });
//     res.cookie('Second', 'Another', {
//         maxAge: 1000000,
//         httpOnly: true,
//         secure: true
//     });
//     next();
// });

// app.use((req, res, next) => {
//     res.clearCookie('First')
//     console.log(req.cookies);
//     next();
// });

mongoose.connect('mongodb+srv://mydatabase:12345@cluster0.7zy8b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(result => {
        app.listen(port);
    })
    .catch(error => {
        console.log(error);
    })