const Sequelize = require('sequelize');
const Url = require('../app/models/url-model');
const dbConfig = require('../config/database');


const models = [Url];

class Database {
  constructor() {
    this.init();
  }

  init() {

    this.connection = new Sequelize(dbConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));

    this.connection.sync()

  }
}

module.exports = new Database();