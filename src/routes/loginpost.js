const User = require('../user');

const loginpost = (req, res) => {
    console.log(req.body);
    if (req.body.loginEmail && req.body.loginPassword) {
        User.findOne({
            email: req.body.loginEmail.toLowerCase(),
            password: req.body.loginPassword
        }, (err, user) => {
            if (err) {
                console.log('MongoDB Error:' + err);
            } else if (user && user.activated == 1) {
                req.session.sessionID = user._id;
                res.redirect('profile');
            } else if (user && user.activated == 0) {
                res.render('login.ejs', {
                    data: req.body
                });
            } else {
                res.render('login.ejs', {
                    data: req.body
                });
            }
        });
    } else {
        res.render('login.ejs', {
            data: req.body
        });
    }
};

module.exports = loginpost;