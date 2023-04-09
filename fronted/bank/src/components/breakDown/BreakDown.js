import React from "react";
import "./BreakDown.css";
import { useEffect, useState } from "react";

function BreakDown(props) {
  return (
    <div className="breakDown-container">
      <h1>BreakDown</h1>
      <p>
        {Object.keys(props.sumOfCategory).map((c, i) => (
          <div>
            <p className="categoryBreakDown">
              {c} : {props.sumOfCategory[c]}
            </p>
          </div>
        ))}
      </p>
    </div>
  );
}
export default BreakDown;
