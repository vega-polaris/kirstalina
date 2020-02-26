const router = require('express').Router();
const {
  User,
  Transaction,
  CurStockPrice,
  OwnedStock
} = require('../db/models');

module.exports = router;

router.get('/:userId/transactions', async (req, res, next) => {
  try {
    const userId = req.params.userId;
    console.log(`get all user transactions route hit for user ${userId}`);
    // find campus via campus Id, include students
    const userTransactions = await Transaction.findAll({
      where: {
        userId: userId
      },
      include: [
        {
          model: CurStockPrice
        }
      ]
    });
    console.log({ userTransactions });
    res.json(userTransactions);
  } catch (err) {
    next(err);
  }
});

router.get('/:userId/portfolio', async (req, res, next) => {
  try {
    const userId = req.params.userId;
    // find campus via campus Id, include students
    const portfolio = await OwnedStock.findAll({
      where: {
        userId: userId
      },
      include: [
        {
          model: CurStockPrice
        }
      ]
    });
    res.json(portfolio);
  } catch (err) {
    next(err);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});
