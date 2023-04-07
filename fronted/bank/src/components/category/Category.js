import React from "react";

function Category(props) {
  return (
    <div className="category">
      <p>{props.transaction.vendor}</p>
    </div>
  );
}

export default Category;
