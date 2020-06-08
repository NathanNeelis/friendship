const User = require('../user');

const registerpost = (req, res) => {
    User.findOne({
        username: req.body.signupUser
    }, (err, user) => {
        if (err) {
            console.log('MongoDB Error:' + err);
        } else if (user) {
            res.render('register.ejs', {
                data: req.body
            });
        } else {
            const newUser = new User();
            newUser.email = req.body.signupEmail.toLowerCase();
            newUser.username = req.body.signupUser;
            newUser.dob = req.body.signupAge;
            newUser.password = req.body.signupPassword;

            newUser.save((err, user) => {
                if (err) {
                    console.log(err);
                } else {
                    res.render('login.ejs');
                }
            });

        }
    });
};

module.exports = registerpost;