export default function Weather(weatherRepository, routeRepository) {
    function getWeather(address, callback) {
        routeRepository.getCoordinates(address, (coordinates) => {
            weatherRepository.getCurrentWeather(coordinates, (weather) => {
                callback(weather);
            })
        });
    }

    return Object.freeze({
        getWeather: getWeather
    })
}