const Sequelize = require('sequelize');
const db = require('../db');

const OwnedStock = db.define('transaction', {
  amount: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  curPrice: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = OwnedStock;
