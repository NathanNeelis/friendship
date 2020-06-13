const User = require('../user');

const search = async (req, res) => {
    try {
        const allData = await User.find(); // all data in database
        const user = await User.findOne({ // find session user
            _id: req.session.sessionID,
        });
        const search = await User.find({ // find data that equals filtered activity
            interests: req.body.activity
        });
        const activity = req.body.activity; // filtered activity

        const done = (allData, user, search, activity) => {
            req.session.search = search; // makes a session on the filtered activity
            if (user) { // if there is a user logged in render the search page with he following data
                req.session.sessionID = user._id;
                res.render('search.ejs', {
                    data: allData,
                    user: user,
                    dataFilter: req.session.search,
                    activity: activity
                });
            } else { // if there is not a user logged in render the search page with this data
                res.render('search.ejs', {
                    data: allData,
                    dataFilter: req.session.search,
                    activity: activity
                });
            }
        };
        done(allData, user, search, activity);
    }
    catch (err) {
        res.send('something went wrong in the gathering the data'); // Error handling
    }
};

module.exports = search;
