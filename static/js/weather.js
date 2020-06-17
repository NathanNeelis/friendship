const mtbCheck = document.querySelector('.userLocation');

if (mtbCheck) {

    const userLocation = document.querySelector('.userLocation').innerHTML;

    let requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + userLocation + ',nl&units=metric&appid=7cb76bd2c75726e5aa77abb6c6de9b09';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
        const currentWeather = request.response;
        console.log(currentWeather);
        console.log(currentWeather.main.temp);
        console.log(currentWeather.weather[0].description);
        if (currentWeather.main.temp > 19) {
            mtb(currentWeather);
        } else {
            games(currentWeather);
        }
    };

}

const mtb = (weather) => {
    console.log('its decent weather');
    const api = weather;
    const apiWeatherDescription = weather.weather[0].description;
    const temperature = Math.round(api.main.temp);

    // Section image
    const imageSection = document.getElementById('sectionImage');
    imageSection.src = 'images/mtb.jpg';
    imageSection.alt = 'Mountainbiker';

    // Header section H2
    const headerSection = document.querySelector('#weatherHeaderSection');
    headerSection.textContent = 'Sports';

    // Sub header section H4
    const subHeaderImage = document.getElementById('weatherStatusImage');
    if (apiWeatherDescription === 'few clouds') {
        subHeaderImage.src = 'images/cloud-sun.svg';
        subHeaderImage.alt = 'cloudy with some sun';
    } else if (
        apiWeatherDescription === 'scattered clouds' ||
        apiWeatherDescription === 'broken clouds' ||
        apiWeatherDescription === 'mist'
    ) {
        subHeaderImage.src = 'images/cloud.svg';
        subHeaderImage.alt = 'cloudy';
    } else if (
        apiWeatherDescription === 'shower rain' ||
        apiWeatherDescription === 'rain' ||
        apiWeatherDescription === 'thunderstorm'
    ) {
        subHeaderImage.src = 'images/rain.svg';
        subHeaderImage.alt = 'rainy';
    } else if (apiWeatherDescription === 'snow') {
        subHeaderImage.src = 'images/snow.svg';
        subHeaderImage.alt = 'snow';
    } else {
        subHeaderImage.src = 'images/sunny.svg';
        subHeaderImage.alt = 'sunny';
    }

    console.log(subHeaderImage);
    console.log(weather.weather[0].description);


    const subHeaderSection = document.querySelector('#weatherStatus');
    subHeaderSection.textContent =
        'The weather is great! Currently, the temperature is '
        + temperature
        + ' degrees.';

    const sectionIntroduction = document.querySelector('#sectionIntroduction');
    sectionIntroduction.textContent =
        'With this weather, lots of people go outside to do all kinds of sports. Maybe you are looking for someone else to Hike or Bike with or perhaps you are looking to be challenged in a new sport. Check out other people and join them in this great weather!';

    // Section filtered profiles
    const header = document.querySelector('#weatherHeader');
    header.textContent = 'Find some people to Mountainbike with:';
};

const games = (weather) => {
    console.log('the weather is shit');
    const api = weather;
    const apiWeatherDescription = weather.weather[0].description;
    const temperature = Math.round(weather.main.temp);

    // Section image
    const imageSection = document.getElementById('sectionImage');
    imageSection.src = 'images/games.jpg';
    imageSection.alt = 'Two people gaming on playstation';

    // Header section H2
    const headerSection = document.querySelector('#weatherHeaderSection');
    headerSection.textContent = 'Games';

    // Sub header section H4
    const subHeaderImage = document.getElementById('weatherStatusImage');
    if (apiWeatherDescription === 'few clouds') {
        subHeaderImage.src = 'images/cloud-sun.svg';
        subHeaderImage.alt = 'cloudy with some sun';
    } else if (
        apiWeatherDescription === 'scattered clouds' ||
        apiWeatherDescription === 'broken clouds' ||
        apiWeatherDescription === 'mist'
    ) {
        subHeaderImage.src = 'images/cloud.svg';
        subHeaderImage.alt = 'cloudy';
    } else if (
        apiWeatherDescription === 'shower rain' ||
        apiWeatherDescription === 'rain' ||
        apiWeatherDescription === 'thunderstorm'
    ) {
        subHeaderImage.src = 'images/rain.svg';
        subHeaderImage.alt = 'rainy';
    } else if (apiWeatherDescription === 'snow') {
        subHeaderImage.src = 'images/snow.svg';
        subHeaderImage.alt = 'snow';
    } else {
        subHeaderImage.src = 'images/sunny.svg';
        subHeaderImage.alt = 'sunny';
    }

    const subHeaderSection = document.querySelector('#weatherStatus');
    subHeaderSection.textContent =
        'The weather is not so great! Currently, the temperature is '
        + temperature
        + ' degrees.';

    const sectionIntroduction = document.querySelector('#sectionIntroduction');
    sectionIntroduction.textContent =
        'With this weather most people prefer to stay indoors and fire up their pc or Playstation to play games. Start looking for other people that play your prefered game and challange them in a match of for example Call of Duty.';

    // Section filtered profiles
    const header = document.querySelector('#weatherHeader');
    header.textContent = 'Find some people to play some games with:';
};