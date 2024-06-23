const { header, validationResult } = require('express-validator');

const authSecret = {
  name: process.env.HEADER_AUTH_NAME,
  password: process.env.HEADER_AUTH_PASSWORD,
};

module.exports = {
  /**
   * This is a route protection middleware.
   * Will skip current route if request validation not passed.
   * Need to pass all validations to run current route.
   */
  routeSkipperByValidation: (req, _res, next) => {
    if (validationResult(req).isEmpty()) {
      // jump into current route
      next();
    } else {
      // jump to next route
      next('route');
    }
  },
  authHeaderValidations: [
    header('name').notEmpty().equals(authSecret.name),
    header('password').notEmpty().equals(authSecret.password),
  ],
};
