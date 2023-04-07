const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose
  .connect("mongodb://127.0.0.1:27017/BankDB", {
    useNewUrlParser: true,
  })
  .catch((err) => console.log(err));

const transactionSchema = new Schema({
  amount: Number,
  category: String,
  vendor: String,
});

const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;
