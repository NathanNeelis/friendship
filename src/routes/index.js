const User = require('../models/user');
const fetch = require('node-fetch');

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

      // load API to check the temperature of the user location
      const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + myData.location + ',nl&units=metric&appid=7cb76bd2c75726e5aa77abb6c6de9b09';
      const fetchResponse = await fetch(apiUrl);
      const json = await fetchResponse.json();
      const temperature = json.main.temp;

      // If the weather is good show sports. In this case Mountainbike

      let filteredData = (dataToFilter) => {

        dataToFilter.forEach((result) => {
          if (result.likes.includes(myData._id) && myData.likes.includes(result._id)) {
            let cleantheArray = dataToFilter.indexOf(result);
            dataToFilter.splice(cleantheArray, 1);
          }
        });

        return dataToFilter;
      };

      if (temperature > 19) {
        const dataWeather = await User.find({
          interests: 'mountainbike' // Looks in all data for people that have mountainbike in their interests
        });
        const done = (allData, myData, dataBG, dataComics, dataWeather) => {

          let allDataFiltered = filteredData(allData);
          let dataBGFiltered = filteredData(dataBG);
          let dataComicsFiltered = filteredData(dataComics);
          let dataWeatherFiltered = filteredData(dataWeather);

          res.render('index', {
            user: myData,
            data: allDataFiltered,
            dataBG: dataBGFiltered,
            dataComics: dataComicsFiltered,
            dataWeather: dataWeatherFiltered

          });
        };

        done(allData, myData, dataBG, dataComics, dataWeather);

        // If the weather is not so good: show games.
      } else {
        const dataWeather = await User.find({
          interests: 'games' // Looks in all data for people that have games in their interests
        });
        let filteredData = (dataToFilter) => {

          dataToFilter.forEach((result) => {
            if (result.likes.includes(myData._id) && myData.likes.includes(result._id)) {
              let cleantheArray = dataToFilter.indexOf(result);
              dataToFilter.splice(cleantheArray, 1);
            }
          });

          return dataToFilter;
        };


        const done = (allData, myData, dataBG, dataComics, dataWeather) => {

          let allDataFiltered = filteredData(allData);
          let dataBGFiltered = filteredData(dataBG);
          let dataComicsFiltered = filteredData(dataComics);
          let dataWeatherFiltered = filteredData(dataWeather);

          res.render('index', {
            user: myData,
            data: allDataFiltered,
            dataBG: dataBGFiltered,
            dataComics: dataComicsFiltered,
            dataWeather: dataWeatherFiltered

          });
        };

        done(allData, myData, dataBG, dataComics, dataWeather);
      }

    } else if (!req.session.sessionID) { // If there is no user logged in:
      const done = (allData, dataBG, dataComics) => {
        res.render('index', {
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
