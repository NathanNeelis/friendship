const User = require('../user');

const loginpost = (req, res) => {
    if (req.body.loginEmail && req.body.loginPassword) {
        User.findOne({
            email: req.body.loginEmail.toLowerCase()
        }, (err, user) => {
            if (err) {
                console.log('MongoDB Error:' + err);
            }
            if (user && user.password === req.body.loginPassword) {
                
                req.session.sessionID = user._id;
                res.redirect('profile');
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