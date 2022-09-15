import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import OrderTable from "../../Components/OrderTable";
import OrderTable4 from "../../Components/OrderTable4";
import { AuthContext } from "../../Context/AuthContext";
import { GET_ALL_CATEGORY, GET_CURRENT_ORDERS, ONGOING_ORDER } from "../../Context/Types";

const VHome2 = () => {
  const { dispatch } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categoryName, setCategoryName] = useState({id: "", name: "All"});
  const [allCategory, setAllCategory] = useState([]);
  const [page, setPage] = ("1");


  const handleCat = (e) => {
    if(e.target.value === "") {
      setCategoryName({id: "", name: ""});      
    }else {      
      const parsedData = JSON.parse(e.target.value);
      setCategoryName({id: parsedData._id, name: parsedData.name});
    }
  };

  const getOngoingOrders = () => {
    dispatch({ type: ONGOING_ORDER, upDateState: setData, setIsLoading, limit: '10', page, category: categoryName.id });
  };
  const pageChangeHandler = (e, value) => {
    setPage(value);
  }
  useEffect(() => {
    getOngoingOrders();
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
      <div>
        <div
          style={{
            fontSize: "24px",
            fontWeight: "600",
            marginLeft: "10px",
            marginTop: "50px",
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Link
            to="/orders-new"
            style={{
              marginLeft: "50px",
              color: "gray",
              textDecoration: "none",
            }}
          >
            New Orders
          </Link>
          <Link
            to="/orders-return"
            style={{
              marginLeft: "50px",
              color: "gray",
              textDecoration: "none",
            }}
          >
            Return Orders
          </Link>
          <Link
            to="/orders-completed"
            style={{
              marginLeft: "50px",
              color: "gray",
              textDecoration: "none",
            }}
          >
            Completed Orders
          </Link>
          <span style={{ marginLeft: "50px", borderBottom: "1px solid orange" }}>
                Ongoing Orders
            </span>
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
          {/* <BuyersDetailCont /> */}
          <OrderTable4 data={data} isLoading={isLoading} pageChangeHandler={pageChangeHandler}/>
        </div>
        {/* <AssignedAndStausFormVhome2 /> */}
      </div>
      <Footer />
    </>
  );
};

export default VHome2;
