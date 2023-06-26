import Weather from "./weather.js";

import {jest} from '@jest/globals'

const callback = jest.fn();
let weatherData

describe('Weather data retrieval', function () {
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

    it('should be called with an object that was returned by openWeatherRepository', function () {
        expect(callback).toHaveBeenCalledWith(weatherData);
    });

    it('should be called with an object that has temperature, humidity and pressure properties', function () {
        const argument = callback.mock.calls[0][0];

        expect(argument.temperature).not.toBeUndefined();
        expect(argument.humidity).not.toBeUndefined();
        expect(argument.pressure).not.toBeUndefined();
    });
});
