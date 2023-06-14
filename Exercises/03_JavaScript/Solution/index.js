import OpenWeatherApiRepository from "./openWeatherApiRepository.js";
import OpenRouteRepository from "./openRouteRepository.js";
import {config} from "./config.js";
import Weather from "./weather.js";

const openWeatherRepository = new OpenWeatherApiRepository(config.openWeatherApiKey);
const openRouteRepository = new OpenRouteRepository(config.openRouteApiKey);

const weather = new Weather(openWeatherRepository, openRouteRepository);

const addressInputButton = document.getElementById('addressForm');
addressInputButton.addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    let address = document.getElementById('addressInput').value;

    weather.getWeather(address, (weather) => {
        const list = `
            <ul>
                <li>${Math.round(weather.temperature - 273)}°C</li>
                <li>${weather.humidity}%</li>
                <li>${weather.pressure}hPa</li>
            </ul>
        `
        document.getElementById('weather').innerHTML = list;
        document.getElementById('address').innerHTML = address;
    });
});