import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import OrderTable from "../../Components/OrderTable";
import { AuthContext } from "../../Context/AuthContext";
import { GET_ALL_CATEGORY, GET_CURRENT_ORDERS } from "../../Context/Types";

const VHome2 = () => {
  const { dispatch } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState("1");
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


  const getCurrentOrders = () => {
    dispatch({ type: GET_CURRENT_ORDERS, upDateState: setData, setIsLoading, limit: '10', page, category: categoryName.id });
  };

  
  const pageChangeHandler = (e, value) => {
    console.log(value, "page");
    setPage(value);
  }

  useEffect(() => {
    getCurrentOrders();
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
            marginLeft: "60px",
            marginTop: "50px",
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <span style={{ borderBottom: "1px solid orange" }}>
            New Orders
          </span>
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
          {/* <BuyersDetailCont /> */}
          <OrderTable data={data} isLoading={isLoading} pageChangeHandler={pageChangeHandler}/>
        </div>
        {/* <AssignedAndStausFormVhome2 /> */}
      </div>
      <Footer />
    </>
  );
};

export default VHome2;
