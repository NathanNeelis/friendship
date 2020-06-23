const User = require('../models/user');
const executeEmail = require('../utils/executeEmail');

const registerpost = (req, res) => {
    const sendEmail = () => {
        User.findOne({
            username: req.body.signupUser
        }, (err, user) => {
            if (err) {
                console.log('MongoDB Error:' + err);
            } else if (user) {
                let mailOptions = {
                    from: 'Friendship <friendshipwebsitecmd@gmail.com>',
                    to: user.email,
                    subject: 'Welcome to Friendship, ' + user.firstname + '!',
                    text: 'Hi ' + user.firstname + '!,\nPlease activate your account by going to this url: http://' + req.get('host') + '/activate?id=' + user._id
                };
                executeEmail(mailOptions);
            }
        });
    };

    const uploadUser = () => {
        const avatar = 'uploads/' + req.file.path.split('/').pop();
        const newUser = new User();
        newUser.username = req.body.signupUser;
        newUser.password = req.body.signupPassword;
        newUser.email = req.body.signupEmail.toLowerCase();
        newUser.firstname = req.body.signupFirst;
        newUser.dob = req.body.signupAge;
        newUser.location = req.body.signupLocation;
        newUser.interests = req.body.signupInterests.toLowerCase().split(',');
        newUser.description = req.body.signupDescription;
        newUser.avatar = avatar;
        newUser.activated = 0;

        newUser.save((err) => {
            if (err) {
                console.log(err);
            } else {
                res.render('login', {
                    message: 'Please check your email inbox and activate your account by clicking on the link in the email!'
                });
                sendEmail();
            }
        });
    };

    User.findOne({
        username: req.body.signupUser
    }, (err, user) => {
        if (err) {
            console.log('MongoDB Error:' + err);
        } else if (user || !req.file) {
            res.render('register', {
                data: req.body
            });
        } else {
            uploadUser();
        }
    });
};

module.exports = registerpost;