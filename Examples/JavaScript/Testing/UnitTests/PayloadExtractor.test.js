import PayloadExtractor from "./PayloadExtractor.js";

import {it, expect} from "vitest"

it('should extract coordinates', function () {
    // Arrange
    const longitude = 7.309726;
    const latitude = 46.888055;
    const payload = {
        "features": [{
            "geometry": {
                "coordinates": [
                    longitude,
                    latitude
                ]
            }
        }]
    }
    const payloadExtractor = new PayloadExtractor();

    // Act
    const coordinates = payloadExtractor.extractCoordinates(payload);

    // Assert
    expect(coordinates.lon).toBe(longitude);
    expect(coordinates.lat).toBe(latitude);
});