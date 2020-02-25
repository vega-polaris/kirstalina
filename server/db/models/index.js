const User = require('./user');
const OwnedStock = require('./ownedStock');
const Transaction = require('./transaction');
const CurStockPrice = require('./curStockPrice');

/*
 Associations
 */

Transaction.belongsTo(User);
User.hasMany(Transaction);

OwnedStock.belongsTo(User);
User.hasMany(OwnedStock);

OwnedStock.belongsTo(User);
User.hasMany(OwnedStock);

OwnedStock.belongsTo(CurStockPrice);
CurStockPrice.hasMany(OwnedStock);

Transaction.belongsTo(CurStockPrice);
CurStockPrice.hasMany(Transaction);

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  OwnedStock,
  Transaction,
  CurStockPrice
};
