import React from "react";
import "../Styles/Components/OrderTable.css";
function OrderTable() {
  const columns = [
    {
      name: "Order ID",
    },
    {
      name: "Product information",
    },
    {
      name: "Qnty",
    },
    {
      name: "Buyer Details",
    },
    {
      name: "Amount",
    },
    {
      name: "Reason",
    },
    {
      name: "Status",
    },
  ];
  return (
    <div className="table-container">
      <div className="columns-cont">
        {columns.map((item, index) => {
          return (
            <div className="column-parent">
              <div className="column-title">{item.name}</div>
              <div className="column-details">asdsad</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OrderTable;
