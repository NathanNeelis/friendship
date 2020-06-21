
const User = require('../user');

const otherprofile = (req, res) => {
    User.findOne({
		username: req.params.username
	}, (err, user) => {
		if (err) {
            console.log('MongoDB Error:' + err);
		} else if (user) {
            res.render('profile-detail', {
                data: user,
                matchData: false,
            });
		} else {
        }
	});
};


module.exports = otherprofile;