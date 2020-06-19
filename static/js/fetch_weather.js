
export async function catchWeather(req, res) {
    const mtbCheck = document.querySelector('.userLocation');
    try {
        if (mtbCheck) {
            const userLocation = document.querySelector('.userLocation').innerHTML;
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + userLocation + ',nl&units=metric&appid=7cb76bd2c75726e5aa77abb6c6de9b09')
            const weatherData = await response.json();
            fetchApiMore(weatherData);
            if (weatherData.main.temp > 19) {
                mtb(weatherData);
            } else {
                games(weatherData);
            }

        }
    }
    catch (err) {
        res.send('something went wrong in the gathering the data');
    }
}