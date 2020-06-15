const User = require('../user');

const likepost = (req, res) => {
    // Hier zoek je de ingelogde user, en voer je de userLiked functie uit als de user gevonden is.
    User.findOne({
        _id: req.session.sessionID
    }, (err, user) => {
        if (err) {
            console.log('MongoDB Error:' + err);
        }
        if (user) {
            userLiked();
        } else {
            console.log('Error: client ID could not been found!');
        }
    });
    // Hier zoek je op de user die je hebt geliked (req.body.like), en check je of deze user jou ook heeft geliked. Als dat zo is kan je dat direct renderen op een pagina.
    const checkIfUserLiked = (x) => {
        User.findOne({
            _id: req.body.like
        }, (err, user) => {
            if (err) {
                console.log('MongoDB Error:' + err);
            } else if (user) {
                if (x.likes.includes(user._id) && user.likes.includes(x._id)) {
                    res.render('matchpageeeee');
                } else {
                    res.render('not a match yet pageeeeee');
                }
            }
        });
    };
    // Hier zoek je weer de ingelogde user en voeg je de id toe van de gelikede user in zijn/haar database.
    const userLiked = () => {
        User.updateOne({
                _id: req.session.sessionID
            }, {
                $push: {
                    likes: req.body.like
                }
            },
            (err) => {
                if (err) {
                    console.log(err);
                } else {
                    User.findOne({
                        _id: req.session.sessionID
                    }, (err, user) => {
                        if (err) {
                            console.log('MongoDB Error:' + err);
                        }
                        else {
                            checkIfUserLiked(user);
                        }
                    });
       
                }
            }
        );
    };
};

 module.exports = likepost;
