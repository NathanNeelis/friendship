const User = require('../user');

const mymatches = (req, res) => {
      User.findOne({
            username: req.params.username
      }, (err, user) => {
            if (err) {
                  console.log('MongoDB Error:' + err);
            } else if (user) {
                  res.render('other-profile-match', {
                        data: user,
                  });
            } else {
                  console.log('DAMN NO USER FOUND');
            }
      });
};


module.exports = mymatches;