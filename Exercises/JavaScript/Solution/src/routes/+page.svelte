<script>
    import OpenWeatherApiRepository from "../openWeatherApiRepository.js";
    import OpenRouteRepository from "../openRouteRepository.js";
    import {config} from "./config.js";
    import Weather from "../weather.js";

    const openWeatherRepository = new OpenWeatherApiRepository(config.openWeatherApiKey);
    const openRouteRepository = new OpenRouteRepository(config.openRouteApiKey);

    const weather = new Weather(openWeatherRepository, openRouteRepository);

    let address;
    let weatherList;

    function getWeather() {
        weather.getWeather(address, (weather) => {
            weatherList = weather;
        });
    }
</script>

<form id="addressForm">
    <label for="address">Address:</label><br>
    <input type="text" bind:value={address} id="address" name="address"><br>
    <input type="submit" value="Submit" on:click={getWeather}>
</form>
{#if typeof address !== "undefined"}
    <h2>Das Wetter in {address} ist</h2>
    {#if typeof weatherList !== "undefined"}
        <div>
            <ul>
                <li>{Math.round(weatherList?.temperature - 273)}°C</li>
                <li>{weatherList?.humidity}%</li>
                <li>{weatherList?.pressure}hPa</li>
            </ul>
        </div>
    {/if}

    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200">
        <g id="sun">
            <circle cx="50" cy="50" r="40" fill="yellow" />
        </g>
        <g id="clouds">
            <path d="M60 90c-20 0-20-30 0-30h80c20 0 20 30 0 30h-80z" fill="white" />
            <path d="M150 80c-20 0-20-35 0-35h100c20 0 20 35 0 35h-100z" fill="white" />
            <path d="M100 70c-25 0-25-40 0-40h120c25 0 25 40 0 40H100z" fill="white" />
        </g>
        <g id="rain">
            <line x1="80" y1="100" x2="70" y2="150" stroke="blue" stroke-width="2" />
            <line x1="90" y1="100" x2="80" y2="150" stroke="blue" stroke-width="2" />
            <line x1="100" y1="100" x2="90" y2="150" stroke="blue" stroke-width="2" />
            <line x1="110" y1="100" x2="100" y2="150" stroke="blue" stroke-width="2" />
        </g>
    </svg>
{/if}