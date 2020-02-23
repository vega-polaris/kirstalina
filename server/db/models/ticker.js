const Sequelize = require('sequelize');
const db = require('../db');

const Ticker = db.define('ticker', {
  ticker: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Ticker;
