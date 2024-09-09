export default function OpenRouteRepository(apiKey) {
    function getCoordinates(address, callback) {
        const url = `https://api.openrouteservice.org/geocode/search?api_key=${apiKey}&text=${address}`;

        const fetchPromise = fetch(url);
        const dataPromise = fetchPromise.then((response) => {
            return response.json()
        });
        dataPromise.then((data) => {
            const coordinates = extractCoordinates(data);
            callback(coordinates);
        })
    }
    function extractCoordinates(data) {
        const coordinates = data.features[0].geometry.coordinates;
        return Object.freeze({
            lon: coordinates[0],
            lat: coordinates[1]
        })
    }

    return Object.freeze({
        getCoordinates: getCoordinates
    })
}