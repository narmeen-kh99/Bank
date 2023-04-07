import React from "react";
import "./BreakDown.css";
import { useEffect, useState } from "react";

function BreakDown(props) {
  const [sumCategory, setSumCategory] = useState({});
  const sumOfTransactionsByCategory = () => {
    let sumOfCategory = sumCategory;
    let transactionsDataLength = props.transactions.length;
    let transactionsData = [...props.transactions];

    for (let i = 0; i < transactionsDataLength; i++) {
      let transaction = transactionsData[i];
      let category = transaction.category;
      let amount = transaction.amount;

      if (!sumCategory[category]) {
        sumOfCategory[category] = amount;
      } else {
        sumOfCategory[category] += amount;
      }
    }
    setSumCategory(sumOfCategory);
  };
  useEffect(() => {
    sumOfTransactionsByCategory();
  }, []);
  return (
    <div className="breakDown-container">
      <h1>BreakDown</h1>
      <p>
        {Object.keys(sumCategory).map((c, i) => (
          <div>
            <p className="categoryBreakDown">
              {c} : {sumCategory[c]}
            </p>
          </div>
        ))}
      </p>
    </div>
  );
}
export default BreakDown;
