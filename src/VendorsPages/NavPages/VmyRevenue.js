import React, { useContext, useEffect } from "react";
import AccountDetail from "../../VendorsComponents/AccountDetail";
import LastTransections from "../../VendorsComponents/LastTransections";
import VNavBar from "../../VendorsComponents/VNavBar";
import Footer from "../../Components/Footer";
import { useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { GET_ADS, GET_ALL_CATEGORY, GET_PRODUCT_BY_CATEGORY, GET_REVENUE_GRAPH_DATA, GET_VENDOR_PROFILE2, VENDOR_SALE } from "../../Context/Types";
import revenue1 from '../../Assets/revenue1.svg';
import wallet from "../../Assets/Images/wallet.png";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Calendar } from "react-calendar";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      // text: 'Chart.js Line Chart',
    },
    labels: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false
      }
    }
  },
  circular: true
};

const labels = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

export const data = {
  labels,
  datasets: [
    {
      label: "Revenue",
      data: ["20", "40", "3", "4", "60", "44", "30"],
      borderColor: "#FF8D22",
      fill: true,
      backgroundColor: '#FF8D22',
      tension: 0.5,
      pointHoverBackgroundColor: "#FF8D22"
    },
  ],
};


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

const VmyRevenue = () => {
  const { dispatch, currentUser } = useContext(AuthContext);

  const [ads, setAds] = useState();
  const [profileData, setProfileData] = useState();

  const userId = localStorage.getItem("vendorUserId");
  const [categoryName, setCategoryName] = useState({id: "", name: "All"});
  const [allCategory, setAllCategory] = useState([]);
  const [dateRange, setDateRange] = useState([
    getFirstDayofMonth(),
    new Date(),
  ]);
  const [dropdown, setDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [countdata, setCountData] = useState({});
  const [typeOfDate, setTypeOfDate] = useState("Week");
  const [graphData, setGraphData] = useState([]);
  const data = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: graphData,
        borderColor: "#FF8D22",
        fill: true,
        backgroundColor: '#FF8D22',
        tension: 0.5,
        pointHoverBackgroundColor: "#FF8D22"
      },
    ],
  };
 

  const handleDate = (e) => {
    setDateRange(e);
    // setDropdown(false);
  };

  const handleCat = (e) => {
    if(e.target.value === "") {
      setCategoryName({id: "", name: ""});      
    }else {      
      const parsedData = JSON.parse(e.target.value);
      setCategoryName({id: parsedData._id, name: parsedData.name});
    }
  };

  const getCountData = () => {
    dispatch({
      type: VENDOR_SALE,
      upDateState: setCountData,
      category: categoryName.id
    })
  }

  const changeGraphDate = (e) => {
    setTypeOfDate(e.target.value);
  }

  useEffect(() => {
    getCountData();
  }, [categoryName])



  useEffect(() => {
    dispatch({
      type: GET_ALL_CATEGORY,
      upDateState: setAllCategory,
      setIsLoading,
    });
  }, []);

  const getRevenueGraphData = () => {
    dispatch({
      type: GET_REVENUE_GRAPH_DATA,
      typeOfDate,
      setGraphData,
      category: categoryName.id
    })
  }


  useEffect(() => {
    getRevenueGraphData();
  }, [typeOfDate, categoryName])



 console.log("profiledata:",graphData)
  return (
    <>
        {/* <div
          style={{display: "flex", justifyContent: "end", marginRight: '30px' }}
          className="h5 bold"
          onClick={handleDropdown}
        >
          {getFormatedDate(dateRange[0], "/")}
          <KeyboardArrowDownOutlinedIcon fontSize="large" />
        </div> */}
        <div style={{display: 'flex', justifyContent: 'end', marginRight: '40px'}} className="d-flex justify-content-space-between align-items-center">
        <select onChange={handleCat} style={{border:'1px solid', borderRadius: '8px', outline: 'none'}} defaultValue="all" name="cat" id="cat">
            <option value="">All</option>
            {
              allCategory?.map((item) => {
                return <option value={JSON.stringify(item)}>{item?.name}</option>
              })
            }
          </select>
        </div>
        {/* <div className="d-flex justify-content-end me-5 mb-3">
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
      </div> */}
      <div style={{display: 'flex', minHeight: '800px'}}>
        {/* <div
          style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center", margin: '55px 0' }}
        >
          MY REVENUE
        </div> */}

        <div style={{flexDirection: 'column', padding: '30px 30px', justifyContent: 'flex-start'}} id="MWcont1">
          <div style={{height: '200px'}} className="WalletCont1">
            <div>
              <img
                style={{ width: "72px", height: "70px" }}
                src={wallet}
                alt=""
              />
            </div>
            <div id="walletCont4">
              <div className="wallet-text">Total Product Sold</div>
              <div className="wallet-text">{countdata?.sold}</div>
            </div>
          </div>
          <div style={{height: '200px'}} className="WalletCont1">
            <div className="total-sale">
              <div>
                <img src={revenue1} alt="" />
              </div>
              <div id="walletCont4">
                <div className="wallet-text">Total Sale</div>
                <div className="wallet-text">
                  RS.{" "}
                  {new Intl.NumberFormat("en-IN", {
                    maximumFractionDigits: 0,
                  }).format(countdata?.sale)}
                </div>
              </div>
            </div>
            {/* <div className="sale-cont">
              <div>
                <div className="amount-text">Direct sale</div>
                <div className="amount-text">Indirect sale</div>
              </div>
              <div>
                <div className="amount-text">Rs. 10,000</div>
                <div className="amount-text">RS. 10,000</div>
              </div>
            </div> */}
          </div>
        </div>

        <div style={{width: '70%', padding: '30px 80px', height: '100px'}}>

        <select defaultValue={typeOfDate} onChange={changeGraphDate} style={{width: '150px', border: 'none', outline:'none', marginBottom: '-12px'}} name="graph" id="graph">
          <option value="Week">Last Week</option>
          <option value="Month">Last Month</option>
          <option value="Year">Last Year</option>
        </select>
        <Line options={options} data={data} />
          <div style={{display: 'flex', justifyContent: 'space-between'}}> 
            <div style={{display: 'flex', flexDirection: 'column', width: '30%'}} className="WalletCont1">
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
                <div className="wallet-text" style={{fontSize: '1rem'}}>Hiloramart Charges</div>
                <div className="wallet-text">RS. {countdata?.adminfee}</div>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '30%'}} className="WalletCont1">
              <div>
                <img
                  style={{ width: "72px", height: "70px" }}
                  src={wallet}
                  alt=""
                />
              </div>
              <div id="walletCont4">
                <div className="wallet-text" style={{fontSize: '1rem'}}>Affilitate Earning</div>
                <div className="wallet-text">RS. {countdata?.affiliatefee}</div>
              </div>
            </div>

            <div style={{width: '30%'}} className="total-sale-cont">
              <div style={{display: 'flex', flexDirection: 'column'}} className="total-sale">
                <div>
                  <img src={revenue1} alt="" />
                </div>
                <div id="walletCont4">
                  <div className="wallet-text" style={{fontSize: '1rem'}}>Total Profit</div>
                  <div className="wallet-text">
                    RS.{" "}
                    {new Intl.NumberFormat("en-IN", {
                      maximumFractionDigits: 0,
                    }).format(countdata?.sale - (countdata?.adminfee - countdata?.affiliatefee))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
{/* 
        <div>
          <AccountDetail profileData={profileData}
           />
          <LastTransections ads={ads}/>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default VmyRevenue;
