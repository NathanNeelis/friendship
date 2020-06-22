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

        if (user) { // checks if there is a user logged in
            let filteredData = (dataToFilter) => {

                dataToFilter.forEach((result) => {
                    if (result.username.includes(user.username)) {
                        let cleantheArray = dataToFilter.indexOf(result);
                        dataToFilter.splice(cleantheArray, 1);
                    }
                });

                return dataToFilter;
            };

            const done = async (allData, user, search, activity) => {
                const equalActivities = await User.find({ // finds other users with the same interests 
                    interests: user.interests[0] // How to create loop here?
                });
                let equalActivitiesFiltered = filteredData(equalActivities);
                let allDataFiltered = filteredData(allData);
                let searchFiltered = filteredData(search);

                req.session.search = search; // makes a session on the filtered activity
                res.render('search', {
                    data: allDataFiltered,
                    user: user,
                    dataFilter: searchFiltered,
                    activity: activity,
                    dataEqual: equalActivitiesFiltered
                });
            };
            done(allData, user, search, activity);
        } else { // if there is no user logged in
            const done = async (allData, search, activity) => {
                req.session.search = search;
                res.render('search', {
                    data: allData,
                    dataFilter: req.session.search,
                    activity: activity
                });
            };
            done(allData, search, activity);
        }
    }
    catch (err) {
        res.send('something went wrong in the gathering the data'); // Error handling
    }
};

module.exports = search;
