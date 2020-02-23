const Sequelize = require('sequelize');
const db = require('../db');

const Transaction = db.define('transaction', {
  action: {
    type: Sequelize.ENUM('BUY', 'SELL')
  },
  amount: {
    type: Sequelize.NUMBER,
    defaultValue: 1
  },
  paidPerShare: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Transaction;
