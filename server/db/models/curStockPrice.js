const Sequelize = require('sequelize');
const db = require('../db');

const CurStocks = db.define('curStockPrice', {
  ticker: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pricePerStock: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  numAvail: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
});
