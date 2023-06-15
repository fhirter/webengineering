import Weather from "./weather";

const callback = jest.fn();
let weatherData

beforeEach(function () {
    const address = "Freiburgstrasse 251, 3018 Bern";

    weatherData = {
        "temperature": 298.48,
        "pressure": 1015,
        "humidity": 64,
    }

    const coordinates = {
        lon: 46.94643551832302,
        lat: 7.410541652279687
    }

    const openWeatherRepositoryMock = {
        getCurrentWeather: jest.fn((coordinates, callback) => {
            callback(weatherData);
        })
    }

    const openRouteRepositoryMock = {
        getCoordinates: jest.fn((address, callback) => {
            callback(coordinates);
        })
    }

    const weather = new Weather(openWeatherRepositoryMock, openRouteRepositoryMock);
    weather.getWeather(address, callback);
});

it('should call callback', function () {
    expect(callback).toHaveBeenCalledTimes(1);
});

it('should be called with an object that has temperature, pressure and humidity properties', function () {
    expect(callback).toHaveBeenCalledWith(weatherData);
});