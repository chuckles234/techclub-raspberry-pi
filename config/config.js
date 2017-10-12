var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'expressyo'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/expressyo-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'expressyo'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/expressyo-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'expressyo'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/expressyo-production'
  }
};

module.exports = config[env];
