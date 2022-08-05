import React from "react";
import "../Styles/Components/OrderTable.css";
function OrderTable({ data }) {
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
      <table className="columns-cont">
        <thead>
          <tr>
            {columns.map((item, index) => {
              return <th className="column-title">{item.name}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr className="pointer">
                <div className="column-details">{item.orderId}</div>
                <div className="column-details">{item.productId.name}</div>
                <div className="column-details">{item.price}</div>
                <div className="column-details">
                  {item.user.name +
                    " " +
                    item.user.address[0].line1 +
                    ", " +
                    item.user.address[0].city +
                    ", " +
                    item.user.address[0].state}
                </div>
                <div className="column-details">{item.price}</div>
                <div className="column-details">{item.price}</div>
                <div className="column-details">{item.status}</div>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;
