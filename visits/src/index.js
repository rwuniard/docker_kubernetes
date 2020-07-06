const express = require('express');
const redis = require('redis');

// This is going to be used to simulate crashing.
const process = require('process');

const app = express();

const client = redis.createClient({
    host: 'redis-server',
    port: 6379,
});
client.set('visits', 0);

app.get('/', (req, resp) => {
    // This is to exit and simulate crashing
    process.exit(0);

    client.get('visits', (error, visits) => {
        resp.send('Hello there, this site has been visited: ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});
