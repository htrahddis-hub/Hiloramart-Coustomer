import React, { useContext, useEffect } from "react";
import wallet from "../../Assets/Images/wallet.png";
import "../../VendorsStyle/VmyWallet.css";
import Footer from "../../Components/Footer";
import AccordionAffiliate from "../../Components/AccordionAffiliate";
import { AuthContext } from "../../Context/AuthContext";
import {
  AMOUNT_TO_AFFILIATE,
  PAID_TO_AFFILIATE,
  VENDOR_SALE,
} from "../../Context/Types";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
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
  let m;
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  switch (month) {
    case 1:
      m = 'January'      
      break;
    case 2:
      m = 'Febuary'      
      break;
    case 3:
      m = 'March'      
      break;
    case 4:
      m = 'April'      
      break;
    case 5:
      m = 'May'      
      break;
    case 6:
      m = 'June'      
      break;
    case 7:
      m = 'July'      
      break;
    case 8:
      m = 'August'      
      break;
    case 9:
      m = 'September'      
      break;
    case 10:
      m = 'October'      
      break;
    case 11:
      m = 'November'      
      break;
    case 12:
      m = 'December'      
      break;  
    default:
      break;
  }
  

  return `${m}, ${year}`;

  // return `${day < 10 ? `0${day}` : `${day}`}${separator}${
  //   month < 10 ? `0${month}` : `${month}`
  // }${separator}${year}`;
};

const VmyWallet = () => {
  const [sale, setSale] = useState(0);
  const { dispatch } = useContext(AuthContext);
  const [paidToAffiliates, setPaidToAffiliates] = useState();
  const [amountToAffiliates, setAmountToAffiliates] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [dateRange, setDateRange] = useState([
    getFirstDayofMonth(),
    new Date(),
  ]);
  const [dropdown, setDropdown] = useState(false);

  const getPaidAffiliate = () => {
    dispatch({
      type: PAID_TO_AFFILIATE,
      setPaidToAffiliates,
      setIsLoading,
    });
  };

  const getAmountToAffiliate = () => {
    dispatch({
      type: AMOUNT_TO_AFFILIATE,
      setAmountToAffiliates,
      setIsLoading,
    });
  };

  useEffect(() => {
    getPaidAffiliate();
    getAmountToAffiliate();
  }, []);

  const getSales = async () => {
    dispatch({
      type: VENDOR_SALE,
      startDate: getISODate(dateRange[0]).substring(0, 10),
      endDate: getISODate(dateRange[1]).substring(0, 10),
      upDateState: setSale,
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
    <>
      <div>
        <div className="d-flex justify-content-end me-5 mb-3">
          <div>
            <div className="h5 bold" onClick={handleDropdown}>
              {getFormatedDate(dateRange[0], "/")}
              <KeyboardArrowDownOutlinedIcon fontSize="large" />
              {/* {" -- "}
              {getFormatedDate(dateRange[1], "/")} */}
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

        <div id="MWcont1">
          <div className="WalletCont1">
            <div>
              <img
                style={{ width: "72px", height: "70px" }}
                src={wallet}
                alt=""
              />
            </div>
            <div id="walletCont4">
              <div className="wallet-text">Total Profit</div>
              <div className="wallet-text">RS. 10,000</div>
            </div>
          </div>
          <div className="total-sale-cont">
            <div className="total-sale">
              <div>
                <svg
                  className="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="71.193"
                  height="81.207"
                  viewBox="0 0 71.193 81.207"
                >
                  <g id="noun-sale-2997751" transform="translate(-90.385 -35)">
                    <path
                      id="Path_994"
                      data-name="Path 994"
                      d="M273.43,42.251a10.145,10.145,0,0,0-2.181-6.274,7.257,7.257,0,0,1,10.9,6.274v2.9H273.43Z"
                      transform="translate(-138.004 0)"
                      fill="#ff8d22"
                    />
                    <path
                      id="Path_995"
                      data-name="Path 995"
                      d="M341.25,56.876a7.2,7.2,0,0,1,1.453-4.345,7.244,7.244,0,0,1,1.453,4.345v2.9H341.25Z"
                      transform="translate(-211.636 -14.626)"
                      fill="#ff8d22"
                    />
                    <path
                      id="Path_996"
                      data-name="Path 996"
                      d="M371.811,45.151h-8.717v-2.9A7.264,7.264,0,0,1,374,35.976a10.081,10.081,0,0,0-2.185,6.274Z"
                      transform="translate(-245.103 0)"
                      fill="#ff8d22"
                    />
                    <path
                      id="Path_997"
                      data-name="Path 997"
                      d="M446.25,113.75h4.359v45.1a22.368,22.368,0,0,0-4.359.478Z"
                      transform="translate(-335.524 -65.699)"
                      fill="#ff8d22"
                    />
                    <path
                      id="Path_998"
                      data-name="Path 998"
                      d="M242.062,183.75l2.906,2.175V199.7H236.25V185.925l2.906-2.175v2.9h2.906Z"
                      transform="translate(-95.013 -124.098)"
                      fill="#ff8d22"
                    />
                    <path
                      id="Path_999"
                      data-name="Path 999"
                      d="M529.326,420v17.4H516.25V420Zm-5.812,14.5a2.907,2.907,0,1,0-2.054-.851,2.909,2.909,0,0,0,2.054.851Z"
                      transform="translate(-425.865 -321.194)"
                      fill="#ff8d22"
                    />
                    <path
                      id="Path_1000"
                      data-name="Path 1000"
                      d="M225.749,168.928a5.805,5.805,0,0,0-5.609-7.32H209.371l-.046-.025a22.541,22.541,0,0,0-8.073-2.571V113.754h8.717v4.35h2.906v-4.35H227.4v7.976l-5.23,3.915a1.449,1.449,0,0,0-.581,1.16v15.951a1.451,1.451,0,0,0,1.453,1.45h11.623a1.452,1.452,0,0,0,1.453-1.45V126.8a1.449,1.449,0,0,0-.581-1.16l-5.23-3.915v-7.976h8.717v49.106l-.066.028Z"
                      transform="translate(-83.261 -65.702)"
                      fill="#ff8d22"
                    />
                    <path
                      id="Path_1001"
                      data-name="Path 1001"
                      d="M490,113.75h4.359v46.391a22.4,22.4,0,0,0-3.279,1.464H490Z"
                      transform="translate(-386.539 -65.699)"
                      fill="#ff8d22"
                    />
                    <path
                      id="Path_1002"
                      data-name="Path 1002"
                      d="M184.557,405.729l.371.2a1.452,1.452,0,0,0,.7.177h11.139a2.9,2.9,0,1,1,0,5.8H185.14a1.45,1.45,0,1,0,0,2.9h14.529a1.447,1.447,0,0,0,.605-.132l16.521-7.552a3.294,3.294,0,0,1,4.667,2.99v.315a3.273,3.273,0,0,1-1.821,2.942l-16.94,8.454a16.087,16.087,0,0,1-7.148,1.684h-29.3V405.52a19.557,19.557,0,0,1,18.305.208Z"
                      transform="translate(-59.885 -307.303)"
                      fill="#ff8d22"
                    />
                  </g>
                </svg>
              </div>
              <div id="walletCont4">
                <div className="wallet-text">Total Sale</div>
                <div className="wallet-text">
                  RS.{" "}
                  {new Intl.NumberFormat("en-IN", {
                    maximumFractionDigits: 0,
                  }).format(sale)}
                </div>
              </div>
            </div>
            <div className="sale-cont">
              <div>
                <div className="amount-text">Direct sale</div>
                <div className="amount-text">Indirect sale</div>
              </div>
              <div>
                <div className="amount-text">Rs. 10,000</div>
                <div className="amount-text">RS. 10,000</div>
              </div>
            </div>
          </div>
          <div className="WalletCont1">
            <div>
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                width="70.04"
                height="71.983"
                viewBox="0 0 70.04 71.983"
              >
                <g
                  id="noun-affiliate-1071526"
                  transform="translate(-183.808 -109.205)"
                >
                  <path
                    id="Path_1023"
                    data-name="Path 1023"
                    d="M204.078,145.2a14.751,14.751,0,1,0,14.751-14.751A14.75,14.75,0,0,0,204.078,145.2Zm18.291-2.95a3.527,3.527,0,0,1-2.006,3.176,5.917,5.917,0,0,1,3.984,3.614,7.072,7.072,0,0,1-11.037,0,5.918,5.918,0,0,1,3.984-3.614,3.535,3.535,0,1,1,5.075-3.177Zm-33.859-6.853a31.931,31.931,0,0,1,20.514-20.514,1.18,1.18,0,0,1,.726,2.246,29.565,29.565,0,0,0-18.994,19,1.181,1.181,0,0,1-2.246-.727Zm38.636-19.754a1.181,1.181,0,0,1,1.487-.76,31.925,31.925,0,0,1,20.513,20.514,1.18,1.18,0,0,1-2.246.727,29.572,29.572,0,0,0-19-19,1.181,1.181,0,0,1-.757-1.486Zm-16.635,59.116a1.182,1.182,0,0,1-1.487.76A31.931,31.931,0,0,1,188.51,155a1.18,1.18,0,0,1,2.246-.726,29.569,29.569,0,0,0,18.994,19A1.178,1.178,0,0,1,210.511,174.754ZM249.145,155a31.924,31.924,0,0,1-20.515,20.513,1.179,1.179,0,1,1-.723-2.246,29.572,29.572,0,0,0,19-19,1.179,1.179,0,1,1,2.242.729Zm4.7-5.965a7.072,7.072,0,0,1-11.037,0,5.915,5.915,0,0,1,3.984-3.614,3.541,3.541,0,1,1,3.069,0,5.92,5.92,0,0,1,3.984,3.614Zm-64.521,2.65a7.064,7.064,0,0,1-5.518-2.649,5.919,5.919,0,0,1,3.984-3.614,3.541,3.541,0,1,1,3.069,0,5.918,5.918,0,0,1,3.984,3.614,7.062,7.062,0,0,1-5.518,2.65Zm23.982-32.15a5.919,5.919,0,0,1,3.984-3.614,3.54,3.54,0,1,1,3.069,0,5.913,5.913,0,0,1,3.984,3.614,7.071,7.071,0,0,1-11.037,0Zm11.037,59a7.072,7.072,0,0,1-11.037,0,5.919,5.919,0,0,1,3.984-3.614,3.542,3.542,0,1,1,3.069,0,5.923,5.923,0,0,1,3.984,3.615Z"
                    fill="#ff8d22"
                  />
                </g>
              </svg>
            </div>
            <div id="walletCont4">
              <div className="wallet-text">Total Profit</div>
              <div className="wallet-text">RS. 20,000</div>
            </div>
          </div>
        </div>

        <div id="MWcont2">Paid to Affiliates</div>
        <div id="MWcont3">
          <div id="AdmainCont">
            <div id="LastTcont1">
              {isLoading ? (
                <div
                  style={{
                    width: "100%",
                    display: "grid",
                    placeItems: "center",
                    margin: "40px 0",
                  }}
                >
                  <CircularProgress style={{ color: "#FF8D22" }} />
                </div>
              ) : paidToAffiliates?.length === 0 ? (
                <p style={{ textAlign: "center", margin: "40px 0" }}>
                  No Paid To Affiliates Found!
                </p>
              ) : (
                paidToAffiliates?.map((item) => <AccordionAffiliate data={item} />)
              )}
              {/* {[1, 2, 3, 4, 5, 6].map((item, index) => {
                return <AccordionAffiliate />;
              })} */}
            </div>
          </div>
        </div>

        <div id="MWcont2">Amount to Paid</div>
        <div id="MWcont3">
          <div id="AdmainCont">
            <div id="LastTcont1">
              {isLoading ? (
                <div
                  style={{
                    width: "100%",
                    display: "grid",
                    placeItems: "center",
                    margin: "40px 0",
                  }}
                >
                  <CircularProgress style={{ color: "#FF8D22" }} />
                </div>
              ) : amountToAffiliates?.length === 0 ? (
                <p style={{ textAlign: "center", margin: "40px 0" }}>
                  No Amount To Paid Found!
                </p>
              ) : (
                amountToAffiliates?.map((item) => <AccordionAffiliate data={item}/>)
              )}
              {/* {[1, 2, 3, 4, 5, 6].map((item, index) => {
                return <AccordionAffiliate />;
              })} */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VmyWallet;
