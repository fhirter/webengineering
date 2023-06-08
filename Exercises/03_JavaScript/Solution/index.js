export default function Meteo() {
    function getWeather(address) {
        const weather = {
            humidity: 0,
            pressure: 0,
            temperature: 0,
        }

        return Object.freeze(
            weather
        )
    }

    return Object.freeze({
        getWeather
    })
}