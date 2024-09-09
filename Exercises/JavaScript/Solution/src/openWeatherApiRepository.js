export default function OpenWeatherApiRepository(apiKey) {
    function getCurrentWeather(coordinates, callback) {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}`;

        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                const weather = extractWeather(data);
                callback(weather);
            })
    }

    function extractWeather(data) {
        const weather = {
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            temperature: data.main.temp,
        }

        return Object.freeze(
            weather
        )
    }

    return Object.freeze({
        getCurrentWeather: getCurrentWeather
    })
}