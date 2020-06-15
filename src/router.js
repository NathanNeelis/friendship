const 
    router = require('express').Router(),
    registerpost = require('./routes/registerpost'),
    register = require('./routes/register'),
    index = require('./routes/index'),
    loginpost = require('./routes/loginpost'),
    logout = require('./routes/logout'),
    profile = require('./routes/profile'),
    login = require('./routes/login');
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
    .post('/profile', likepost)
    .post('/login', loginpost)
    .post('/register', registerpost);

module.exports = router;