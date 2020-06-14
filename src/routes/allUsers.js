const User = require('../user');

const allUsers = async (req, res) => {
    try {
        const secureData = await User.find();
        console.log(secureData);
        res.json(secureData);
        // const done = async (allData, user, search, activity) => {
        //     const equalActivities = await User.find({ // finds other users with the same interests 
        //         interests: user.interests[0] // How to create loop here?
        //     });
        //     req.session.search = search; // makes a session on the filtered activity
        //     res.render('search.ejs', {
        //         data: allData,
        //     });
        // };
        // done(allData, user, search, activity);
    }
    catch (err) {
        res.send('something went wrong in the gathering the data'); // Error handling
    }
};

module.exports = allUsers;
