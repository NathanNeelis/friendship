const index = (req, res) => {
    // if (!req.session.sessionID) {
	// 	res.redirect('/login');
	// } else {
	// 	res.redirect('/profile');
    // }
    console.log(req.session.id);
    res.render('index');
};

module.exports = index;