const express = require("express");
const router = express.Router();
const Transaction = require("../model/Transactions");
const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.get("/transactions", async (req, res) => {
  try {
    const transactions = await Transaction.find({});
    res.send(transactions);
  } catch (error) {
    res.send(error);
  }
});
router.post("/transaction", async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.send(transaction);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/transaction/:id", async (req, res) => {
  const transactionID = req.params.id;
  const transaction = await Transaction.findOneAndDelete({
    _id: transactionID,
  });
  res.send(transaction);
});

router.get("/transaction/category", async (req, res) => {
  let sumOfCategory = {};
  try {
    const transactions = await Transaction.find({});
    sumOfCategory = sumOfTransactionsByCategory(transactions);
    res.send(sumOfCategory);
  } catch (error) {
    res.send(error);
  }
});
const sumOfTransactionsByCategory = (transactions) => {
  let sumOfCategory = {};
  let transactionsDataLength = transactions.length;
  let transactionsData = [...transactions];
  for (let i = 0; i < transactionsDataLength; i++) {
    let transaction = transactionsData[i]._doc;
    let category = transaction.category;
    let amount = transaction.amount;

    if (!sumOfCategory[category]) {
      sumOfCategory[category] = amount;
    } else {
      sumOfCategory[category] += amount;
    }
  }
  return sumOfCategory;
};
module.exports = router;
