import PayloadExtractor from "./PayloadExtractor";

import {it, expect} from "@jest/globals"

it('should extract coordinates', function () {
    // Setup
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

    // Exercise
    const coordinates = payloadExtractor.extractCoordinates(payload);

    // Verify
    expect(coordinates.lon).toBe(longitude);
    expect(coordinates.lat).toBe(latitude);
});