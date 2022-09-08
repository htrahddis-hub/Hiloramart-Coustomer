import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import "../Styles/Components/Sales.css";
import MySaleProduct from "./MySaleProduct";
import { VENDOR_ALL_SALE } from "../Context/Types";
import { useEffect } from "react";

const getCurrentDate = (separator = "") => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date < 10 ? `0${date}` : `${date}`}`;
};

const getISODate = (date) => {
  const darr = date.split("-");
  const dobj = new Date(
    parseInt(darr[0]),
    parseInt(darr[1]) - 1,
    parseInt(darr[2]) + 1
  );
  return dobj.toISOString();
};

function Sales() {
  const { dispatch } = useContext(AuthContext);
  const [date, setDate] = useState({
    firstDate: getCurrentDate("-"),
    lastDate: getCurrentDate("-"),
  });
  const [sales, setSales] = useState([]);

  const handleChange = (e) => {
    setDate((old) => {
      return { ...old, [e.target.name]: e.target.value };
    });
  };

  const getSales = async () => {
    dispatch({
      type: VENDOR_ALL_SALE,
      startDate: getISODate(date.firstDate).substring(0, 10),
      endDate: getISODate(date.lastDate).substring(0, 10),
      page: 1,
      limit: 8,
      upDateState: setSales,
    });
  };

  useEffect(() => {
    getSales();
  }, [date]);

  return (
    <div className="sales-cont">
      <div className="topbar">
        <div style={{ textAlign: "center" }}>MY SALE</div>
      </div>
      <div className="d-flex justify-content-end me-5 mb-3">
        <div className="d-flex align-items-center">
          <label className="h5 me-2" htmlFor="start">
            Start Date
          </label>
          <input
            type="date"
            id="start"
            name="firstDate"
            value={date.firstDate}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex align-items-center">
          <label className="ms-3 me-2 h5" htmlFor="end">
            End Date
          </label>
          <input
            type="date"
            id="end"
            name="lastDate"
            value={date.lastDate}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="sale-product-parent">
        <MySaleProduct data={sales} />
      </div>
    </div>
  );
}

export default Sales;
