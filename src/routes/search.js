const User = require('../user');

const search = async (req, res) => {
    try {
        const allData = await User.find();
        const user = await User.findOne({
            _id: req.session.sessionID,
        });

        const done = (allData, user) => {
            if (user) {
                req.session.sessionID = user._id;
                res.render('search.ejs', {
                    data: allData,
                    user: user
                });
            } else {
                res.render('search.ejs', {
                    data: allData
                });
            }
        };
        done(allData, user);
    }
    catch (err) {
        res.send('something went wrong in the gathering the data');
    }
};

module.exports = search;