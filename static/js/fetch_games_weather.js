export const games = (weather) => {
    console.log('the weather is shit');
    const api = weather;
    const apiWeatherDescription = api.weather[0].description;
    const temperature = Math.round(api.main.temp);

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
        apiWeatherDescription === 'overcast clouds' ||
        apiWeatherDescription === 'broken clouds' ||
        apiWeatherDescription === 'mist'
    ) {
        subHeaderImage.src = 'images/cloud.svg';
        subHeaderImage.alt = 'cloudy';
    } else if (
        apiWeatherDescription === 'shower rain' ||
        apiWeatherDescription === 'rain' ||
        apiWeatherDescription === 'light rain' ||
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

