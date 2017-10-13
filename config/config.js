var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development',
    dbHost = process.env.DB_HOST || 'localhost',
    dbPort = process.env.DB_PORT || '27018',
    dbName = process.env.DB_NAME,
    dbUser = process.env.DB_USER,
    dbPass = process.env.DB_PASS;

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'techclub'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://' + dbUser + ':' + dbPass + '@' + dbHost + ':' + dbPort + '/' + dbName
  },
  test: {
    root: rootPath,
    app: {
      name: 'techclub'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://' + dbUser + ':' + dbPass + '@' + dbHost + ':' + dbPort + '/' + dbName
  },
  production: {
    root: rootPath,
    app: {
      name: 'techclub'
    },
    port: process.env.PORT || 80,
    db: 'mongodb://' + dbUser + ':' + dbPass + '@' + dbHost + ':' + dbPort + '/' + dbName
  }
};

module.exports = config[env];
