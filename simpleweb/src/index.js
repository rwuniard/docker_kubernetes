const express = require('express');
const app = express();

app.get('/', (req, resp) => {
    resp.send('<h1>Hello There</h1>');
});

app.listen(8080, () => {
    console.log('Listeing on port 8080');
});
