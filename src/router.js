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
    profilepost = require('./routes/profilepost'),
    login = require('./routes/login'),
    matches = require('./routes/matches'),
    unmatch = require('./routes/unmatch'),
    likepost = require('./routes/likepost');

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
    .get('/matches', matches)
    .get('/activate', activate)
    .get('/search', search)
    .get('/apipage', index)
    .post('/apipage', index)
    .post('/matches', unmatch)
    .post('/likedebug', likepost)
    .post('/login', loginpost)
    .post('/search', search)
    .post('/profile', profilepost)
    .post('/register', upload.single('signupAvatar'), registerpost);

module.exports = router;