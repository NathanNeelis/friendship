const User = require('../user');

const registerpost = (req, res) => {

    const uploadUser = () => {
        const avatar = 'uploads/' + req.file.path.split('/').pop();
        const newUser = new User();
        newUser.username = req.body.signupUser;
        newUser.password = req.body.signupPassword;
        newUser.email = req.body.signupEmail.toLowerCase();
        newUser.firstname = req.body.signupFirst;
        newUser.dob = req.body.signupAge;
        newUser.location = req.body.signupLocation;
        newUser.interests = req.body.signupInterests.split(', ');
        newUser.description = req.body.signupDescription;
        newUser.avatar = avatar;

        newUser.save((err) => {
            if (err) {
                console.log(err);
            } else {
                res.render('login.ejs');
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