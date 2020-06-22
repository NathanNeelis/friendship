const User = require('../user');
//I will move this to a different file at some point
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    //temp login information for debugging
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'antonio.hansen91@ethereal.email',
        pass: '2RWRbxkysG3Jv9WEMY'
    }
});

const registerpost = (req, res) => {
    const sendEmail = () => {
        User.findOne({
            username: req.body.signupUser
        }, (err, user) => {
            if (err) {
                console.log('MongoDB Error:' + err);
            } else if (user) {
                transporter.sendMail({
                    from: 'Friendship <info@friendship.com>',
                      to: user.email,
                      subject: 'Welcome to Friendship, ' + user.firstname + '!',
                      text: 'Activate your Friendship account: http://localhost:1900/activate?id=' + user._id
                });
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