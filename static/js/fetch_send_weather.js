export const fetchApiMore = (weather) => {
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
