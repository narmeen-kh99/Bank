import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./BankNavBar.css";
import Balance from "../balance/Balance";
const BankNavBar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar-link">
        <Link className="navbar-link" to="/">
          Transactions
        </Link>
      </div>
      <div className="navbar-link">
        <Link className="navbar-link" to="/Operations">
          Operations
        </Link>
      </div>
      <div className="navbar-link">
        <Link className="navbar-link" to="/category">
          Breakdown
        </Link>
      </div>
      <div className="navbar-link">
        <Balance balance={props.balance} />
      </div>
    </nav>
  );
};

export default BankNavBar;
