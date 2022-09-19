import React, { useContext, useEffect, useState } from "react";
import MyProductCont from "../../VendorsComponents/MyProductCont";
import "../../VendorsStyle/VmyProduct.css";
import VNavBar from "../../VendorsComponents/VNavBar";
import Footer from "../../Components/Footer";
import { AuthContext } from "../../Context/AuthContext";
import { GET_VENDOR_PRODUCTS, GET_ALL_CATEGORY, GET_PRODUCT_BY_CATEGORY, GET_VENDOR_APP_PRODUCT, GET_VENDOR_NONAPP_PRODUCT } from "../../Context/Types";
import ProductsLoading from "../../Components/Skeleton-loading/Products-loading";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const VmyProduct = () => {
  const { dispatch } = useContext(AuthContext);
  const [allProducts, setAllProducts] = useState([]);
  const [allCategory, setAllCategory] = useState([]);

  const [isDropdown, setIsDropDown] = useState(false);
  const [categoryName, setCategoryName] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const getApprovalProducts = () => {
    dispatch({
      type: GET_VENDOR_PRODUCTS,
      upDateState: setAllProducts,
      setIsLoading,
    });
    setIsDropDown(false);
  };
  const getNonApprovalProducts = () => {
    setAllProducts([]);
    dispatch({
      type: GET_VENDOR_NONAPP_PRODUCT,
      upDateState: setAllProducts,
      setIsLoading,
    });
    setIsDropDown(false);
  };

  useEffect(() => {
    getApprovalProducts();
  }, []);

  //to get all  category
  useEffect(() => {
    dispatch({
      type: GET_ALL_CATEGORY,
      upDateState: setAllCategory,
      setIsLoading,
    });
  }, []);

  const handleCat = (id, name) => {
    setCategoryName(name);
    dispatch({
      type: GET_PRODUCT_BY_CATEGORY,
      catId: id,
      setAllProducts, 
      setIsLoading
    })
    setIsDropDown(false);
  };


  const handleDropdown = () => {
    setIsDropDown((old) => !old);
  };

  const getApprovalsProducts = (e) => {
    if(e.target.value === "approval") {
      getApprovalProducts();
    }else {
      getNonApprovalProducts();
    }
  }

  return (
    <>
      <div style={{ margin: "3%" }}>
        <div style={{display: 'flex', justifyContent: 'space-between'}} className="d-flex justify-content-space-between align-items-center">
          <select onChange={getApprovalsProducts} style={{border: 'none', outline: 'none'}} name="approval" id="approval">
            <option value="approval">Approved Products</option>
            <option value="nonapproval">Non Approved Products</option>
          </select>
          {/* <div style={{width: '33.33%', marginRight: 0, textAlign: 'center'}} className="h1 end">My Product</div> */}
          <div style={{display: 'flex', justifyContent: 'end', position: 'relative'}} className="cat-div" onClick={handleDropdown}>
            {categoryName ? categoryName : "All"}
            <KeyboardArrowDownOutlinedIcon />
          </div>
          {isDropdown && (
            <div style={{position: 'absolute', top: '27%', right: '3%'}} className="category-list">
              <div
                    className="cat-li"
                    onClick={getNonApprovalProducts}
                  >
                    All
              </div>
              {allCategory?.map((item, index) => {
                return (
                  <div
                    data-cat-id={item._id}
                    className="cat-li"
                    onClick={() => handleCat(item._id, item.name)}
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="d-flex justify-content-between flex-wrap">
        {
          isLoading ? (
            <>
              <ProductsLoading />
              <ProductsLoading />
              <ProductsLoading />
              <ProductsLoading />
            </>
          ) : (
            allProducts?.data?.length !== 0 ? (
              allProducts?.data?.map((item, index) => {
                return (
                  <MyProductCont key={item._id} cb={getApprovalProducts} {...item} />
                );
              })
            ) : (
              <div >No Product Found</div>
            )

          )
        }
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VmyProduct;
