const express = require('express');
const app = express();

app.get('/', (req, resp) => {
    resp.send('Hello There');
});

app.listen(8080, () => {
    console.log('Listeing on port 8080');
});
