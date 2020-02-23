const User = require('./user');
const OwnedStock = require('./ownedStock');
const Ticker = require('./ticker');
const Transaction = require('./transaction');

/*
 Associations
 */

Transaction.belongsTo(User);
User.hasMany(Transaction);

OwnedStock.belongsTo(User);
User.hasMany(OwnedStock);

OwnedStock.belongsTo(User);
User.hasMany(OwnedStock);

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  OwnedStock,
  Ticker,
  Transaction
};
