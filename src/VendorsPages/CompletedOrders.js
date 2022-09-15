import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import OrderTable from "../Components/OrderTable";
import OrderTable3 from "../Components/OrderTable3";
import { AuthContext } from "../Context/AuthContext";
import { GET_ALL_CATEGORY, GET_COMPLETED_ORDERS, GET_CURRENT_ORDERS, GET_RETURN_ORDERS } from "../Context/Types";

function CompletedOrders() {
  const { dispatch } = useContext(AuthContext);
  const [data, setData] = useState([]);

  const [currentOrdersData, setCurrentOrdersData] = useState([]);
  const [returnOrdersData, setReturnOrdersData] = useState([]);

  const [page, setPage] = ("1");
  const [isLoading, setIsLoading] = useState(false);

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


  const getCompletedOrders = () => {
    dispatch({
      type: GET_COMPLETED_ORDERS,
      upDateState: setData,
      setIsLoading,
      limit: '10',
      page
    });
  };

  const pageChangeHandler = (e, value) => {
    setPage(value);
  }
  useEffect(() => {
    getCompletedOrders();
  }, [categoryName, page]);

  useEffect(() => {
    dispatch({
      type: GET_ALL_CATEGORY,
      upDateState: setAllCategory,
      setIsLoading,
    });
  }, []);


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
        <Link
          to="/orders-return"
          style={{ marginLeft: "50px", color: "gray", textDecoration: "none" }}
        >
          Return Orders
        </Link>
        <span style={{ marginLeft: "50px", borderBottom: "1px solid orange" }}>
          Completed Orders
        </span>
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
      <div  style={{margin: '10px 10px 100px 10px'}}>
        <OrderTable3 data={data} isLoading={isLoading} pageChangeHandler={pageChangeHandler}/>
      </div>

      <Footer />
    </>
  );
}

export default CompletedOrders;
