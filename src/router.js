const
    router = require('express').Router(),
    upload = require('./multer'),
    registerpost = require('./routes/registerpost'),
    register = require('./routes/register'),
    index = require('./routes/index'),
    loginpost = require('./routes/loginpost'),
    logout = require('./routes/logout'),
    profile = require('./routes/profile'),
    activate = require('./routes/activate'),
    search = require('./routes/search'),
    login = require('./routes/login');

const userRedirectLogin = (req, res, next) => {
    if (!req.session.sessionID) {
        res.redirect('/login');
    } else {
        next();
    }
};

const userRedirectProfile = (req, res, next) => {
    if (req.session.sessionID) {
        res.redirect('/profile');
    } else {
        next();
    }
};

router
    .get('/', index)
    .get('/login', userRedirectProfile, login)
    .get('/register', userRedirectProfile, register)
    .get('/logout', userRedirectLogin, logout)
    .get('/profile', userRedirectLogin, profile)
    .get('/activate', activate)
    .get('/search', search)
    .post('/login', loginpost)
    .post('/register', upload.single('signupAvatar'), registerpost);

module.exports = router;