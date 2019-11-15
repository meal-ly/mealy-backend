const express = require('express');
const cors = require("cors");
const app = express();

const { config } = require('./config/index');
const recipesApi = require('./routes/recipes');
const usersApi = require('./routes/users');

const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandlers')

const notFoundhandler = require("./utils/middleware/notFoundHandler");

app.use(cors());

// Body parser
app.use(express.json());

// Routes
usersApi(app);
recipesApi(app);

// Catch 404
app.use(notFoundhandler);

// Error middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);


app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`)
})
