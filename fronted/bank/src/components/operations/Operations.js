import React from "react";
import { useState } from "react";
import "./Operations.css";

function Operations(props) {
  const [state, setState] = useState({
    amount: "",
    vendor: "",
    category: "",
    isRedirect: false,
  });
  const updateInput = (event) => {
    let currentState = state;
    currentState[event.target.name] = event.target.value;
    setState(currentState);
  };
  const updateDeposit = () => {
    props.createTransaction(
      parseInt(state.amount),
      state.vendor,
      state.category
    );
    setState({ isRedirect: true });
  };
  const updateWithdraw = () => {
    props.createTransaction(
      parseInt(state.amount) * -1,
      state.vendor,
      state.category
    );
    setState({ isRedirect: true });
  };
  return (
    <div className="Operations-container">
      <h1>Insert Transactions</h1>
      <p>
        <input
          className="amount-Input"
          type="text"
          name="amount"
          onChange={updateInput}
          value={state.amount}
          placeholder="Transaction amount"
        />
      </p>
      <p>
        <input
          className="vendor-Input"
          type="text"
          onChange={updateInput}
          name="vendor"
          value={state.vendor}
          placeholder="Transaction vendor"
        />
      </p>
      <p>
        <input
          className="category-Input"
          type="text"
          onChange={updateInput}
          name="category"
          value={state.category}
          placeholder="Transaction category"
        />
      </p>

      <div>
        <button
          className="Deposit"
          onClick={() => {
            updateDeposit();
          }}
        >
          Deposit
        </button>
        <button
          className="Withdraw"
          onClick={() => {
            updateWithdraw();
          }}
        >
          Withdraw
        </button>
      </div>
    </div>
  );
}

export default Operations;
