import OpenWeatherApiRepository from "./openWeatherApiRepository.js";
import OpenRouteRepository from "./openRouteRepository.js";
import {config} from "./config.js";
import Weather from "./weather.js";

const openWeatherRepository = new OpenWeatherApiRepository(config.openWeatherApiKey);
const openRouteRepository = new OpenRouteRepository(config.openRouteApiKey);

const weather = new Weather(openWeatherRepository, openRouteRepository);

weather.getWeather("foo", (weather) => {
    console.log(weather);
});