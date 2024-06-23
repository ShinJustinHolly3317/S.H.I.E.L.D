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

// set up api routes
app.use('/', router);

// set up error handler
app.use(errorHandler);

// set up api doc
expressJSDocSwagger(app)(swaggerOptions);

// set up 404
app.use((req, res, _next) => {
  res.status(404).json({
    message: 'not found',
  });
});

module.exports = app;
