const express = require('express');
const app = express();

const { config } = require('./config/index');
const mealyApi = require('./routes/recipes');

mealyApi(app);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`)
})
