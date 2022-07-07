const app = require('express')();

app.get('/profiles', (req, res) => res.send('Hello Profiles API'));

app.listen(3002, () => console.log(`Profiles API listening on port 3002!`));