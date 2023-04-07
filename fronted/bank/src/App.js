import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BankNavBar from "./components/bankNavBar/BankNavBar";
import Transactions from "./components/transactions/Transactions";
import Operations from "./components/operations/Operations";
import BreakDown from "./components/breakDown/BreakDown";
function App() {
  const [bankData, setBankData] = useState([]);
  const [balance, setBalance] = useState(0);

  const getDataFromDB = async () => {
    let arrDataDB = [];
    await axios.get("http://localhost:4300/transactions").then((response) => {
      arrDataDB = [...response.data];
      setBankData(arrDataDB);
      getBalance();
    });
  };
  const getBalance = () => {
    let totalAmount = 0;
    for (let i = 0; i < bankData.length; i++) {
      totalAmount += bankData[i].amount;
    }
    setBalance(totalAmount);
  };

  const deleteTransaction = (id) => {
    let response = axios.delete(`http://localhost:4300/transaction/${id}`);
    let filteredData = bankData.filter((d) => d._id != id);
    setBankData(filteredData);
    getBalance();
  };

  const createTransaction = async (amount, vendor, category) => {
    const newTransaction = { amount, vendor, category };
    const response = await axios.post(
      "http://localhost:4300/transaction",
      newTransaction
    );
    let TransactionsData = [...bankData];
    TransactionsData.push(response.data);
    setBankData(TransactionsData);
    getBalance();
  };

  useEffect(() => {
    getDataFromDB();
  });
  return (
    <Router>
      <div>
        <BankNavBar balance={balance} />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Transactions
              key={"Transactions"}
              deleteTransaction={deleteTransaction}
              transactions={bankData}
            />
          }
        ></Route>
        <Route
          path="/Operations"
          element={
            <Operations
              key={"Operations"}
              createTransaction={createTransaction}
            />
          }
        ></Route>
        <Route
          path="/Category"
          element={<BreakDown key={"Category"} transactions={bankData} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
