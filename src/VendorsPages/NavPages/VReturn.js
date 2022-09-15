import React, { useContext, useEffect, useState } from "react";
import VNavBar from "../../VendorsComponents/VNavBar";
// import BuyersDetailCont from "../../VendorsComponents/BuyersDetailCont";

import Image from "../../Assets/Images/MyWishList/Image.svg";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import OrderTable from "../../Components/OrderTable";
import { GET_ALL_CATEGORY, GET_RETURN_ORDERS } from "../../Context/Types";
import { AuthContext } from "../../Context/AuthContext";
import OrderTable2 from "../../Components/OrderTable2";
const VReturn = () => {
  const { dispatch } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = ("1");
  const [categoryName, setCategoryName] = useState({id: "", name: "All"});
  const [allCategory, setAllCategory] = useState([]);

  const handleCat = (e) => {
    if(e.target.value === "") {
      setCategoryName({id: "", name: ""});      
    }else {      
      const parsedData = JSON.parse(e.target.value);
      setCategoryName({id: parsedData._id, name: parsedData.name});
    }
  };

  const getReturnOrders = () => {
    dispatch({ type: GET_RETURN_ORDERS, upDateState: setData, setIsLoading, limit: '10', page });
  };

  const pageChangeHandler = (e, value) => {
    setPage(value);
  }


  useEffect(() => {
    getReturnOrders();
  }, [categoryName, page]);

  useEffect(() => {
    dispatch({
      type: GET_ALL_CATEGORY,
      upDateState: setAllCategory,
      setIsLoading,
    });
  }, []);
console.log(data);
  return (
    <>
      <div
        style={{
          fontSize: "24px",
          fontWeight: "600",
          marginLeft: "60px",
          marginTop: "50px",
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Link
          to="/orders-new"
          style={{ color: "gray", textDecoration: "none" }}
        >
          New Orders
        </Link>
        <span style={{ marginLeft: "50px", borderBottom: "1px solid orange" }}>
          Return Orders
        </span>
        <Link
          to="/orders-completed"
          style={{ marginLeft: "50px", color: "gray", textDecoration: "none" }}
        >
          Completed Orders
        </Link>
        <Link
            to="/ongoing-order"
            style={{
              marginLeft: "50px",
              color: "gray",
              textDecoration: "none",
            }}
          >
            Ongoing Orders
          </Link>
          <div style={{marginRight: '40px', display: 'inline-block', marginLeft: 'auto'}}>
          <select onChange={handleCat} style={{border:'1px solid', borderRadius: '8px', outline: 'none'}} defaultValue="all" name="cat" id="cat">
            <option value="">All</option>
            {
              allCategory?.map((item) => {
                return <option value={JSON.stringify(item)}>{item?.name}</option>
              })
            }
          </select>
        </div>
      </div>
      <div style={{margin: '10px 10px 100px 10px'}}>
        <OrderTable2 data={data} isLoading={isLoading} pageChangeHandler={pageChangeHandler}/>
      </div>

      <Footer />
    </>
  );
};

export default VReturn;
