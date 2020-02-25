'use strict';

const db = require('../server/db');
const {
  User,
  Transaction,
  OwnedStock,
  CurStockPrice
} = require('../server/db/models');

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  const users = await Promise.all([
    User.create({ email: 'cody@email.com', password: '123' }),
    User.create({ email: 'murphy@email.com', password: '123' })
  ]);

  console.log(`seeded ${users.length} users`);

  const transactions = await Promise.all([
    Transaction.create({
      action: 'BUY',
      curStockPriceId: 1,
      quantity: 38,
      userId: 1,
      paidPerShare: 140000
    }),
    Transaction.create({
      action: 'SELL',
      curStockPriceId: 1,
      quantity: 3,
      userId: 1,
      paidPerShare: 1300000
    }),
    Transaction.create({
      action: 'BUY',
      curStockPriceId: 3,
      quantity: 46,
      userId: 1,
      paidPerShare: 200000
    }),
    Transaction.create({
      action: 'SELL',
      curStockPriceId: 4,
      quantity: 40,
      userId: 2,
      paidPerShare: 36000
    }),
    Transaction.create({
      action: 'SELL',
      curStockPriceId: 2,
      quantity: 3,
      userId: 2,
      paidPerShare: 30000
    }),
    Transaction.create({
      action: 'BUY',
      curStockPriceId: 1,
      quantity: 36,
      userId: 2,
      paidPerShare: 150000
    })
  ]);

  console.log(`seeded ${transactions.length} transactions`);

  const curStockPrices = await Promise.all([
    CurStockPrice.create({
      ticker: 'GOOGL',
      pricePerStock: 150000,
      companyName: 'Alphabet'
    }),
    CurStockPrice.create({
      ticker: 'AAPL',
      pricePerStock: 40000,
      companyName: 'Apple'
    }),
    CurStockPrice.create({
      ticker: 'AMZN',
      pricePerStock: 150000,
      companyName: 'Amazon'
    }),
    CurStockPrice.create({
      ticker: 'NFLX',
      pricePerStock: 36500,
      companyName: 'Netflix'
    })
  ]);

  console.log(`seeded ${curStockPrices.length} curStockPrices`);

  const ownedStocks = await Promise.all([
    OwnedStock.create({ curStockPriceId: 1, quantity: 35, userId: 1 }),
    OwnedStock.create({ curStockPriceId: 1, quantity: 36, userId: 2 }),
    OwnedStock.create({ curStockPriceId: 2, quantity: 70, userId: 1 }),
    OwnedStock.create({ curStockPriceId: 2, quantity: 10, userId: 2 }),
    OwnedStock.create({ curStockPriceId: 3, quantity: 46, userId: 1 }),
    OwnedStock.create({ curStockPriceId: 4, quantity: 40, userId: 2 })
  ]);

  console.log(`seeded ${ownedStocks.length} ownedStocks`);

  console.log('seeded successfully');
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
