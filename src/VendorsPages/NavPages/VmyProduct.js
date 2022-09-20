import React, { useContext, useEffect, useState } from "react";
import MyProductCont from "../../VendorsComponents/MyProductCont";
import "../../VendorsStyle/VmyProduct.css";
import VNavBar from "../../VendorsComponents/VNavBar";
import Footer from "../../Components/Footer";
import { AuthContext } from "../../Context/AuthContext";
import { GET_VENDOR_PRODUCTS, GET_ALL_CATEGORY, GET_PRODUCT_BY_CATEGORY, GET_VENDOR_APP_PRODUCT, GET_VENDOR_NONAPP_PRODUCT, GET_PRODUCT_BY_CATEGORY2 } from "../../Context/Types";
import ProductsLoading from "../../Components/Skeleton-loading/Products-loading";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const VmyProduct = () => {
  const { dispatch } = useContext(AuthContext);
  const [allProducts, setAllProducts] = useState([]);
  const [allCategory, setAllCategory] = useState([]);

  const [isDropdown, setIsDropDown] = useState(false);
  const [categoryName, setCategoryName] = useState("All");
  const [isLoading, setIsLoading] = useState(false);

  const [approvalType, setApprovalType] = useState("approval");
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);


  const getApprovalProducts = () => {
    dispatch({
      type: GET_VENDOR_PRODUCTS,
      upDateState: setAllProducts,
      setIsLoading,
      setTotalPage,
      page,
      limit: '10'
    });
    setIsDropDown(false);
  };
  const getNonApprovalProducts = () => {
    setAllProducts([]);
    dispatch({
      type: GET_VENDOR_NONAPP_PRODUCT,
      upDateState: setAllProducts,
      setIsLoading,
      setTotalPage,
      page,
      limit: "10"
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
    setIsDropDown(false);
  };


  const handleDropdown = () => {
    setIsDropDown((old) => !old);
  };

  const getApprovalsProducts = (e) => {
    setApprovalType(e.target.value);
    if(e.target.value === "approval") {
      getApprovalProducts();
    }else {
      getNonApprovalProducts();
    }
  }

  useEffect(() => {
    if(approvalType === "approval") {
      getApprovalProducts();
    }else {
      getNonApprovalProducts();
    }
  }, [page]);

  const pageChangeHandler = (e, value) => {
    setPage(value);
  }
console.log(totalPage, page)
  return (
    <>
      <div style={{ margin: "0 3% 3% 3%" }}>
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '2%'}} className="d-flex justify-content-space-between align-items-center">
          <select onChange={getApprovalsProducts} style={{border: 'none', outline: 'none'}} name="approval" id="approval">
            <option value="approval">Approved Products</option>
            <option value="nonapproval">Non Approved Products</option>
          </select>
          {/* <div style={{width: '33.33%', marginRight: 0, textAlign: 'center'}} className="h1 end">My Product</div> */}
          <div style={{display: 'flex', justifyContent: 'end', position: 'relative', cursor: 'pointer'}} className="cat-div" onClick={handleDropdown}>
            {categoryName}
            <KeyboardArrowDownOutlinedIcon />
          </div>
          {isDropdown && (
            <div style={{position: 'absolute', top: '27%', right: '3%'}} className="category-list">
              <div
                    className="cat-li"
                    onClick={()=>handleCat("", "All")}
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
        <div className="d-flex justify-content-between flex-wrap" style={{minHeight: '80vh'}}>
        {
          isLoading ? (
            <>
              <ProductsLoading />
              <ProductsLoading />
              <ProductsLoading />
              <ProductsLoading />
            </>
          ) : (
            allProducts?.length !== 0 ? (
              categoryName === "All" ? (
                allProducts?.map((item, index) => {
                return (
                  <MyProductCont key={item._id} cb={getApprovalProducts} {...item} />
                );
              })
              ) : (
              allProducts?.filter((prod) => prod?.category?.name === categoryName ).length !==0 ? 
              (
              allProducts?.filter((prod) => prod?.category?.name === categoryName )?.map((item, index) => {
                return (
                  <MyProductCont key={item._id} cb={getApprovalProducts} {...item} />
                );
              })) : (
                <div style={{display: 'grid', placeItems: 'center', width: '100%'}}>
                <h6>No Product Found</h6>
              </div>
              )
              )
            ) : (
              <div style={{display: 'grid', placeItems: 'center', width: '100%'}}>
                <h6>No Product Found</h6>
              </div>
            )

          )
        }
        </div>
          <Stack style={{display: 'grid', placeItems: 'center', margin: '30px 0'}} spacing={2}>
            <Pagination count={totalPage} page={page} onChange={pageChangeHandler}/>
          </Stack>
      </div>
      <Footer />
    </>
  );
};

export default VmyProduct;
