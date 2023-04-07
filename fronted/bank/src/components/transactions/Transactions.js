import React from "react";
import Transaction from "../transaction/Transaction";
import "./Transactions.css";
import { useState } from "react";

function Transactions(props) {
  return (
    <div className="transaction-container">
      <div className="Transactions-list">
        {props.transactions.length > 0
          ? props.transactions.map((transaction) => (
              <Transaction
                key={transaction._id}
                transaction={transaction}
                deleteTransaction={props.deleteTransaction}
              />
            ))
          : ""}
      </div>
    </div>
  );
}

export default Transactions;
