const User = require('../user');

const allUsers = async (req, res) => {
    try {
        const secureData = await User.find();
        res.json(secureData);
    }
    catch (err) {
        res.send('something went wrong in the gathering the data'); // Error handling
    }
};

module.exports = allUsers;
