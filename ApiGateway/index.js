
const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();
const port = 3000;
const {
  USERS_API_URL,
  PROFILES_API_URL,
} = require('./URLs');

const userServiceProxy = httpProxy(USERS_API_URL);
const profilesServiceProxy = httpProxy(PROFILES_API_URL);

app.get('/', (req, res) => res.send('Hello Gateway API'));

app.get('/users', (req, res, next) => userServiceProxy(req, res, next));
app.get('/profiles', (req, res, next) => profilesServiceProxy(req, res, next));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));