async function catchWeather() {
    const userLocation = document.querySelector('.userLocation').innerHTML;
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + userLocation + ',nl&units=metric&appid=7cb76bd2c75726e5aa77abb6c6de9b09')
    const weatherData = await response.json();

    fetchApiMore(weatherData);
}

catchWeather();
catchWeather().catch(error => {
    console.log(error);
});


const fetchApiMore = (weather) => {
    const temperature = Math.round(weather.main.temp);
    const description = weather.weather[0].description;

    const data = { temperature, description };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch('/apipage', options);
};

// fetchApiMore();