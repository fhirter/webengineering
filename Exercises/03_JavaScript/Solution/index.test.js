import Meteo from "./index";

let meteo;
beforeEach(function () {
    meteo = new Meteo();
});

describe('integration tests', function () {
    let weather;
    beforeEach(function () {
        const address = "Freiburgstrasse 251, 3018 Bern";
        weather = meteo.getWeather(address);
    });

    it('should return an object with a temperature property', function () {
        expect(weather.temperatur).not.toBeUndefined();
    });

    it('should return an object with a pressure property', function () {
        expect(weather.pressure).not.toBeUndefined();
    });

    it('should return an object with a humidity property', function () {
        expect(weather.humidity).not.toBeUndefined();
    });
});

