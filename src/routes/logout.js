const sessionID = require('../../index');

const logout = (req, res) => {
    req.session.destroy((err) => {
		if (err) {
			res.redirect('/profile');
		}

		res.clearCookie(sessionID);
		res.redirect('/login');
	});
};

module.exports = logout;