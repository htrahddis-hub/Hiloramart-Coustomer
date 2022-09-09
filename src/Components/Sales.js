import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import "../Styles/Components/Sales.css";
import MySaleProduct from "./MySaleProduct";
import { VENDOR_ALL_SALE } from "../Context/Types";
import Calendar from "react-calendar";
import { useEffect } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SaleLoading from "./Skeleton-loading/SaleLoading";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const getFirstDayofMonth = () => {
  var dt = new Date();
  var firstDay = new Date(dt.getFullYear(), dt.getMonth(), 1);

  return firstDay;
};

const getISODate = (date) => {
  return date.toISOString();
};

export const getFormatedDate = (date, separator = "") => {
  let m;
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  switch (month) {
    case 1:
      m = "January";
      break;
    case 2:
      m = "Febuary";
      break;
    case 3:
      m = "March";
      break;
    case 4:
      m = "April";
      break;
    case 5:
      m = "May";
      break;
    case 6:
      m = "June";
      break;
    case 7:
      m = "July";
      break;
    case 8:
      m = "August";
      break;
    case 9:
      m = "September";
      break;
    case 10:
      m = "October";
      break;
    case 11:
      m = "November";
      break;
    case 12:
      m = "December";
      break;
    default:
      break;
  }

  return `${m}, ${year}`;
  // return `${day < 10 ? `0${day}` : `${day}`}${separator}${
  //   month < 10 ? `0${month}` : `${month}`
  // }${separator}${year}`;
};

function Sales() {
  const { dispatch } = useContext(AuthContext);
  const [dateRange, setDateRange] = useState([
    getFirstDayofMonth(),
    new Date(),
  ]);
  const [sales, setSales] = useState({ totalPages: 0, detail: [] });
  const [dropdown, setDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [page, setPage] = useState(1);

  const getSales = async () => {
    dispatch({
      type: VENDOR_ALL_SALE,
      startDate: getISODate(dateRange[0]).substring(0, 10),
      endDate: getISODate(dateRange[1]).substring(0, 10),
      page: page,
      limit: 8,
      upDateState: setSales,
      setIsLoading,
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

  const pageChangeHandler = (pageNo) => {
    setPage(pageNo);
    console.log(pageNo);
  };

  useEffect(() => {
    getSales();
  }, [page]);

  return (
    <div className="sales-cont">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
          alignItems: "center",
        }}
        className="topbar"
      >
        <div style={{ width: "33.33%" }}></div>
        <div style={{ textAlign: "center", width: "33.33%" }}>MY SALE</div>
        <div
          style={{ width: "33.33%", display: "flex", justifyContent: "end" }}
          className="h5 bold"
          onClick={handleDropdown}
        >
          {getFormatedDate(dateRange[0], "/")}
          {/* {" -- "}
            {getFormatedDate(dateRange[1], "/")} */}
          <KeyboardArrowDownOutlinedIcon fontSize="large" />
        </div>
      </div>
      <div className="d-flex justify-content-end me-5 mb-3">
        <div>
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
        {isLoading ? (
          <>
            <SaleLoading />
            <SaleLoading />
            <SaleLoading />
          </>
        ) : (
          sales?.detail?.length === 0 ? (
            <div style={{minHeight: '400px'}}>
              <h5>No Sales found!</h5>
            </div>
          ) : (
          <MySaleProduct data={sales.detail} />
          )
        )}
      </div>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          margin: "20px 0 50px 0",
        }}
      >
        <Stack spacing={2}>
          <Pagination
            onChange={(event, val) => pageChangeHandler(val)}
            page={page}
            count={sales.totalPages}
            size="large"
          />
        </Stack>
        {console.log(sales)}
      </div>
    </div>
  );
}

export default Sales;
