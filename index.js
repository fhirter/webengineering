const express = require('express');
const app = express();

const port = 8080;

app.get('/', function(request, response) {
    response.send('hello world');
});

app.listen(port, () => console.log("Example app listening on http://localhost:"+port));