const User = require('../user');

const matches = (req, res) => {
    const matches = [];

    User.findOne({
        _id: req.session.sessionID
    }, (err, user) => {
        if (err) {
            console.log('MongoDB Error:' + err);
        } else if (user) {
            User.find({}, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    // does the same thing, for loop vs for each
                    for (let i = 0; i < result.length; i++) {
                        if (result[i].likes.includes(user._id) && user.likes.includes(result[i]._id)) {
                            matches.push(result[i]);
                        }
                    }
                    result.forEach((userItem) => {
                        if (userItem.likes.includes(user._id) && user.likes.includes(userItem._id)) {
                            matches.push(userItem);
                        }
                    });
                    res.render('matches', {
                        data: matches
                    });
                }
            });
        } else {
            console.log('Error: client ID could not been found!');
        }
    });
};

module.exports = matches;