export default function PayloadExtractor() {
    function extractCoordinates(payload) {
        const coordinates = payload.features[0].geometry.coordinates;
        return Object.freeze({
          lon: coordinates[0],
          lat: coordinates[1]
        });
    }

    return Object.freeze({
        extractCoordinates,
    })
}
