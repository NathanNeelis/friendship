
const User = require('../user');

const otherprofile = (req, res) => {
    User.findOne({
		username: req.params.username
	}, (err, user) => {
		if (err) {
            console.log('MongoDB Error:' + err);
		} else if (user) {
            res.render('profile-detail.ejs', {
                'data': user,
                'matchData': false,
            });
		} else {
            console.log('DAMN NO USER FOUND');
        }
	});
};


module.exports = otherprofile;