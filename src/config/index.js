const defaultPort = 3000;
const swaggerOptions = {
  info: {
    version: '1.0.0',
    title: 'S.H.I.E.L.D',
    license: {
      name: 'MIT',
    },
  },
  // Base directory which we use to locate your JSDOC files
  baseDir: __dirname,
  // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
  filesPattern: '../**/*.js',
  // URL where SwaggerUI will be rendered
  swaggerUIPath: '/api-docs',
  // Expose OpenAPI UI
  exposeSwaggerUI: true,
};
module.exports = {
  defaultPort,
  swaggerOptions,
};
