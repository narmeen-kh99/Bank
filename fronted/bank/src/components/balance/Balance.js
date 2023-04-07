import React from "react";
import "../balance/Balance.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
const Balance = (props) => {
  const balanceStyle = () => {
    let nameOfClass;
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
