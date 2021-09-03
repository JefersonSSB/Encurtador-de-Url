const Sequelize = require('sequelize');
const urlConfig = require('../../config/url');

class Url extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        urlFull: Sequelize.STRING,
        urlCode: Sequelize.STRING,
        urlShort: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${urlConfig}/${this.urlCode}`;
          },
        },
      },
      {
        sequelize,
        tableName: 'url'
      }
    );

    return this;
  }
}

module.exports = Url;