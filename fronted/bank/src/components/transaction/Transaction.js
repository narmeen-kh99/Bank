import React from "react";

function Transaction(props) {
  const deleteTransactionn = () => {
    props.deleteTransaction(props.transaction._id);
  };
  const amountStyle = () => {
    if (props.transaction.amount > 0) {
      return "greenAmount";
    } else {
      return "redAmount";
    }
  };
  return (
    <div className="transaction">
      <div className="info">
        <div className="vendor">{props.transaction.vendor}</div>
        <div className="category">{props.transaction.category}</div>
        <div className={amountStyle()}>{props.transaction.amount}</div>
        <button className="Delete" onClick={deleteTransactionn}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Transaction;
