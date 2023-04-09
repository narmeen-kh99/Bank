import React from "react";
import "../balance/Balance.css";
const Balance = (props) => {
  const balanceStyle = () => {
    if (props.balance > 500) {
      return "green";
    } else {
      return "red";
    }
  };
  return (
    <div>
      <p className={balanceStyle()}> Balance : {props.balance}</p>
    </div>
  );
};
export default Balance;
