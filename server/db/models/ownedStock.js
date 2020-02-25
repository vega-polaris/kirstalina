const Sequelize = require('sequelize');
const db = require('../db');

const OwnedStock = db.define('ownedStock', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
});

module.exports = OwnedStock;
