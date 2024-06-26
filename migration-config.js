module.exports = {
  test: {
    host: process.env.DB_ADDRESS,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: 3306,
    dialect: 'mysql',
    logging: true,
    dialectOptions: {
      multipleStatements: true,
    },
  },
  development: {
    host: process.env.DB_ADDRESS,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: 3306,
    dialect: 'mysql',
    logging: true,
    dialectOptions: {
      multipleStatements: true,
    },
  },
  docker_compose: {
    host: process.env.DB_ADDRESS,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: 3306,
    dialect: 'mysql',
    logging: true,
    dialectOptions: {
      multipleStatements: true,
    },
  },
  production: {
    host: process.env.DB_ADDRESS,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: 3306,
    dialect: 'mysql',
    logging: true,
    dialectOptions: {
      multipleStatements: true,
    },
  },
};
