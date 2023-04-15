'use strict'

const start = "Güterstrasse 8, 3008 Bern";
const destination = "Falkenplatz 11, 3012 Bern";

const geocoder = {
    apiUrl: "https://api.openrouteservice.org/",
    locationEndpoint: "geocode/search",
    routingEndpoint: "/v2/directions/cycling-road",
    apiKey: "5b3ce3597851110001cf62482f1fb69f0597436f8609616be02d4335",
    country: "CH",

    run: function (start, destination) {
        const gisUrl = `${this.apiUrl}/${this.locationEndpoint}?api_key=${this.apiKey}&boundary.country=${this.country}`;

        const gisUrlStart = `${gisUrl}&text=${start}`;
        const gisUrlDestination = `${gisUrl}&text=${destination}`;

        let startPromise = this.getCoordinates(gisUrlStart);
        let destinationPromise = this.getCoordinates(gisUrlDestination);

        Promise.all([startPromise, destinationPromise]).then((values) => {
            let startCoordinates = values[0];
            let destinationCoordinates = values[1];
            const routeUrl = `${this.apiUrl}${this.routingEndpoint}?api_key=${this.apiKey}&start=${startCoordinates}&end=${destinationCoordinates}`;

            this.getRoute(routeUrl).then((steps) => {
                this.logSteps(steps);
            });
        });
    },

    getCoordinates: function (gisUrl) {
        return fetch(gisUrl)
            .then(response => response.json())
            .then((data) => {
                return data.features[0].geometry.coordinates;
            });
    },

    getRoute: function (routeUrl) {
        return fetch(routeUrl)
            .then(response => response.json())
            .then((data) => {
                return data.features[0].properties.segments[0].steps;
            });
    },

    logSteps: function (steps) {
        for (let i = 0; i < steps.length; i++) {
            const instruction = steps[i].instruction;
            console.log(instruction);
        }
    }

};

geocoder.run(start, destination);
