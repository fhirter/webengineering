export default function OpenRouteRepository(apiKey) {
    function getCoordinates(address, callback) {
        const url = `https://api.openrouteservice.org/geocode/search?api_key=${apiKey}&text=${address}`;

        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                const coordinates = extractCoordinates(data);
                callback(coordinates);
            })
    }
    function extractCoordinates(data) {
        const coordinates = data.features[0].geometry.coordinates;
        return Object.freeze({
            lon: coordinates[1],
            lat: coordinates[0]
        })
    }

    return Object.freeze({
        getCoordinates: getCoordinates
    })
}