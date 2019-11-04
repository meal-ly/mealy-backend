const express = require('express');
const app = express();

const { config } = require('./config/index');
const recipesApi = require('./routes/recipes');
const usersApi = require('./routes/users');

app.use(express.json());

usersApi(app);
recipesApi(app);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`)
})
