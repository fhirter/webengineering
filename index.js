require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT;
const ip = process.env.PUBLIC_IP;

app.get('/', function(request, response) {
    console.log("New Request")
    response.send('hello world');
});

app.listen(port, () => console.log("Example application listening on: http://"+ip+":"+port));