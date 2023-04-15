require('dotenv').config();
const numbers = require('./Testing/generateNumbers');

const express = require('express');
const app = express();

const port = process.env.PORT;
const ip = process.env.PUBLIC_IP;

app.get('/', function(request, response) {
    let number = numbers.randInt();
    console.log("Generate New Number: " + number)
    response.send('Here is your number: ' + number);
});

app.listen(port, () => console.log("Example application listening on: http://"+ip+":"+port));