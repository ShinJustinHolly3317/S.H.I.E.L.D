const { header, validationResult } = require('express-validator');

const authSecret = {
  name: process.env.HEADER_AUTH_NAME,
  password: process.env.HEADER_AUTH_PASSWORD,
};

module.exports = {
  routeSkipperByValidation: (req, res, next) => {
    if (validationResult(req).isEmpty()) {
      next();
    } else {
      next('route');
    }
  },
  authHeaderValidations: [
    header('name').notEmpty().equals(authSecret.name),
    header('password').notEmpty().equals(authSecret.password),
  ],
};
