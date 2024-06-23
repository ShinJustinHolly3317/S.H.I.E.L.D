const { json, urlencoded } = require('express');
const express = require('express');
const expressJSDocSwagger = require('express-jsdoc-swagger');
const { router } = require('./routes/index');
const { errorHandler } = require('./middlewares/error-handler');
const { swaggerOptions } = require('./config');

// [routes] start express
const app = express();

// basic settings
app.use(urlencoded({ extended: false }));
app.use(json());
// cors, add this after all features done
// app.use(cors(configs.corsOptions));

// set up api routes
app.use('/', router);

// set up error handler
app.use(errorHandler);

expressJSDocSwagger(app)(swaggerOptions);

// set up 404 route
app.use((req, res, _next) => {
  res.status(404).json({
    message: 'not found',
  });
});

module.exports = app;
