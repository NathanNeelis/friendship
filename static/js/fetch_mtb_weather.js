export const mtb = (weather) => {
    console.log('its decent weather');
    const api = weather;
    const apiWeatherDescription = api.weather[0].description;
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
        apiWeatherDescription === 'overcast clouds' ||
        apiWeatherDescription === 'broken clouds' ||
        apiWeatherDescription === 'mist'
    ) {
        subHeaderImage.src = 'images/cloud.svg';
        subHeaderImage.alt = 'cloudy';
    } else if (
        apiWeatherDescription === 'shower rain' ||
        apiWeatherDescription === 'light rain' ||
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