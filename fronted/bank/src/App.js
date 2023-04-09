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
  const [sumOfCategory, setSumOfCategory] = useState({});

  const getDataFromDB = async () => {
    let currentTransactions = [];
    await axios.get("http://localhost:4300/transactions").then((response) => {
      currentTransactions = [...response.data];
      setBankData(currentTransactions);
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
  const getSumOfCategory = async () => {
    let sumCategory = {};
    await axios
      .get("http://localhost:4300/transaction/category")
      .then((response) => {
        sumCategory = response.data;
        setSumOfCategory(sumCategory);
      });
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
    getSumOfCategory();
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
              deleteTransaction={deleteTransaction}
              transactions={bankData}
            />
          }
        ></Route>
        <Route
          path="/Operations"
          element={<Operations createTransaction={createTransaction} />}
        ></Route>
        <Route
          path="/Category"
          element={
            <BreakDown
              sumOfCategory={sumOfCategory}
              setSumOfCategory={setSumOfCategory}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
