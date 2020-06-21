const User = require('../user');

const index = async (req, res) => {

  try {
    const allData = await User.find({ _id: { $nin: req.session.sessionID } });
    const dataBG = await User.find({
      interests: 'board games' // Looks in all data for people that have Board games in their interests
    });
    const dataComics = await User.find({
      interests: 'comics' // Looks in all data for people that have comics in their interests
    });

    if (req.session.sessionID) {
      // Is there a user logged in? If so then:
      const myData = await User.findOne({
        _id: req.session.sessionID,
      });

      let filteredData = (dataToFilter) => {

        dataToFilter.forEach((result) => {
          if (result.likes.includes(myData._id) && myData.likes.includes(result._id)) {
          let cleantheArray = dataToFilter.indexOf(result);
          dataToFilter.splice(cleantheArray, 1)

          };
        });

      return dataToFilter;
      }

  



      const done = (allData, myData, dataBG, dataComics) => {

       
        let allDataFiltered = filteredData(allData);
        let dataBGFiltered = filteredData(dataBG);
        let dataComicsFiltered = filteredData(dataComics);
        
   

        res.render('index.ejs', {
          user: myData,
          data: allDataFiltered,
          dataBG: dataBGFiltered,
          dataComics: dataComicsFiltered
        });
      };

      done(allData, myData, dataBG, dataComics);


    } else if (!req.session.sessionID) { // If there is no user logged in:
      const done = (allData, dataBG, dataComics) => {
        res.render('index.ejs', {
          user: req.session.user,
          data: allData,
          dataBG: dataBG,
          dataComics: dataComics,
        });
      };
      done(allData, dataBG, dataComics);
    }
  }
  catch (err) {
    res.send('something went wrong in the gathering the data');
  }
};




module.exports = index;
