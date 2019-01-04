'use strict';

const express = require('express');
const cors = require('cors');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.get('/location', (request, response) => {
    const locationData = searchToLatLong(request.query.data);
    response.send(locationData);
})

function searchToLatLong(query){
    const geoData = require('./data/geo.json');
    const location = new Location(geoData.reults[0]);
    return location;
}

function Location(location){
    this.formatted_query = location.formatted_address;
    this.latitude = location.geometry.location.lat;
    this.longitude = location.geometry.location.lng;
}

app.listen(PORT, () => {
    console.log(`app is up on port : ${PORT}`)
})