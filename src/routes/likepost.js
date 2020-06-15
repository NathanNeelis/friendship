const User = require('../user');
const sessionID = require('../../index');

const likepost = (req, res) => {

    User.find({}, (err, result) => {
        if (err) {
            console.log('Error:' + err);
        } else {

            let profile_db = result
            // console.log(profile_db)
            let empty = req.body.like


            let splittedContent = empty.split("|");

            let convertNumber = splittedContent[1];

            for (let i = 0; i < profile_db.length; i++) {

                if (String(req.session.sessionID) == String(profile_db[i]._id)) {

                    let myProfile = profile_db[i];
                    let myId = profile_db[i]._id;
                    let myCurrentlikes = profile_db[i].Likes;



                    for (let i = 0; i < profile_db.length; i++) {

                        if (String(convertNumber) == String(profile_db[i]._id)) {

                            let userProfile = profile_db[i];
                            let userId = profile_db[i]._id;
                            let userCurrentlikes = profile_db[i].Likes;


for (let i = 0; i < userCurrentlikes.length; i++) {


// match
    if (String(myId) == String(userCurrentlikes[i][0]) && userCurrentlikes[i][1] == false) {

        User.updateOne(
            { _id: userId }, 

            { $set: {Likes: true}},
            { arrayFilters: [ { [1]: true } ] },
            (err) => {
                if (err) { 
                    console.log(err);
                }

                else { 

                    console.log("Het is een match");

                 }

            }
 
        );
    }


// unmatch
    if (myProfile == userCurrentlikes[i][0] && userCurrentlikes[i][1] == "true") {






    }



// no match
    if (i == userCurrentlikes.length-1) { 


        User.updateOne(
            { _id: userId }, 

            { $push: {Likes: {$each: [[myId,false]]}}},
            (err) => {
                if (err) { 
                    console.log(err);
                }

                else { 

                    console.log("hij doet het");

                 }

            }
 
        );
        console.log("check");

       }



}
                        }





                    }



                }
            }




        }


    });
}






module.exports = likepost;
