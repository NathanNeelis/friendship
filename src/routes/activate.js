const User = require('../user');

const activate = (req, res) => {
    User.findOne({
		_id: req.query.id
	}, (err, user) => {
		if (err) {
            console.log('MongoDB Error:' + err);
            res.render('activate-failed');
		}
		if (user) {
            User.update({ _id: user._id }, { activated: 1 }, {upsert: true}, (err) => {
                if (err) {
                    console.log(err);
                    res.render('activate-failed');
                } else {
                    res.render('activate-succes');
                }
            });
		} else {
            console.log('Error: client ID could not been found!');
            res.render('activate-failed');
		}
	});
};

module.exports = activate;