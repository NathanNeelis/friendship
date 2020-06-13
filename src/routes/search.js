const User = require('../user');


const search = async (req, res) => {
    try {
        const allData = await User.find();
        const user = await User.findOne({
            _id: req.session.sessionID,
        });
        const search = await User.find({
            interests: req.body.activity
        });
        const activity = req.body.activity;

        const done = (allData, user, search, activity) => {
            req.session.search = search;
            if (user) {
                // console.log(req.session.search);
                req.session.sessionID = user._id;
                res.render('search.ejs', {
                    dataFilter: req.session.search,
                    data: allData,
                    user: user,
                    activity: activity
                });
            } else {

                res.render('search.ejs', {
                    data: allData,
                    dataFilter: req.session.search,
                    activity: activity
                });
                console.log(activity);
            }
        };
        done(allData, user, search, activity);
    }
    catch (err) {
        res.send('something went wrong in the gathering the data');
    }
};

module.exports = search;
