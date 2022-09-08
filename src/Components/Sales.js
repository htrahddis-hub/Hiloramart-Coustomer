import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import "../Styles/Components/Sales.css";
import MySaleProduct from "./MySaleProduct";
import { VENDOR_ALL_SALE } from "../Context/Types";
import Calendar from "react-calendar";
import { useEffect } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const getFirstDayofMonth = () => {
  var dt = new Date();
  var firstDay = new Date(dt.getFullYear(), dt.getMonth(), 1);

  return firstDay;
};

const getISODate = (date) => {
  return date.toISOString();
};

export const getFormatedDate = (date, separator = "") => {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  return `${day < 10 ? `0${day}` : `${day}`}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${year}`;
};

function Sales() {
  const { dispatch } = useContext(AuthContext);
  const [dateRange, setDateRange] = useState([
    getFirstDayofMonth(),
    new Date(),
  ]);
  const [sales, setSales] = useState([]);
  const [dropdown, setDropdown] = useState(false);

  const getSales = async () => {
    dispatch({
      type: VENDOR_ALL_SALE,
      startDate: getISODate(dateRange[0]).substring(0, 10),
      endDate: getISODate(dateRange[1]).substring(0, 10),
      page: 1,
      limit: 8,
      upDateState: setSales,
    });
  };

  useEffect(() => {
    getSales();
  }, [dateRange]);

  const handleDate = (e) => {
    setDateRange(e);
    setDropdown(false);
  };

  const handleDropdown = () => {
    setDropdown((old) => !old);
  };

  return (
    <div className="sales-cont">
      <div className="topbar">
        <div style={{ textAlign: "center" }}>MY SALE</div>
      </div>
      <div className="d-flex justify-content-end me-5 mb-3">
        <div>
          <div className="h5 bold" onClick={handleDropdown}>
            <KeyboardArrowDownOutlinedIcon fontSize="large" />
            {getFormatedDate(dateRange[0], "/")}
            {" -- "}
            {getFormatedDate(dateRange[1], "/")}
          </div>
          {dropdown && (
            <Calendar
              className="calendar"
              selectRange
              showNavigation
              onChange={handleDate}
              value={dateRange}
            />
          )}
        </div>
      </div>
      <div className="sale-product-parent">
        <MySaleProduct data={sales} />
      </div>
    </div>
  );
}

export default Sales;
