import React, { useContext, useEffect, useState } from "react";
import MyProductCont from "../../VendorsComponents/MyProductCont";
import "../../VendorsStyle/VmyProduct.css";
import VNavBar from "../../VendorsComponents/VNavBar";
import Footer from "../../Components/Footer";
import { AuthContext } from "../../Context/AuthContext";
import { GET_VENDOR_PRODUCTS, GET_ALL_CATEGORY } from "../../Context/Types";
import ProductsLoading from "../../Components/Skeleton-loading/Products-loading";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const VmyProduct = () => {
  const { dispatch } = useContext(AuthContext);
  const [allProducts, setAllProducts] = useState([]);
  const [allCategory, setAllCategory] = useState([]);

  const [isDropdown, setIsDropDown] = useState(false);
  const [category, setCategory] = useState({
    name: "",
    id: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const getProducts = () => {
    dispatch({
      type: GET_VENDOR_PRODUCTS,
      upDateState: setAllProducts,
      setIsLoading,
    });
  };

  useEffect(() => {
    getProducts();
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
    setCategory({
      name: name,
      id: id,
    });
    setIsDropDown(false);
    console.log(filter);
  };

  const filter = allProducts.filter((item) => {
    console.log(item);
    console.log(category.id);
    if (category.id === 0) return true;
    if (!category.id) return true;
    else {
      if (item?.category?._id === category.id) return true;
    }
    return false;
  });

  const handleDropdown = () => {
    setIsDropDown((old) => !old);
    if (!category.name) {
      setAllCategory((old) => {
        old.unshift({ name: "All", _id: 0 });
        return [...old];
      });
    }
  };

  return (
    <>
      <div style={{ margin: "3%" }}>
        <div className="d-flex justify-content-end align-items-center">
          <div className="h1 end">My Product</div>
          <div className="VinputBox cat-div" onClick={handleDropdown}>
            {category.name ? category.name : "All"}
            <KeyboardArrowDownOutlinedIcon />
          </div>
          {isDropdown && (
            <div className="category-list">
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
          {filter?.length !== 0 ? (
            filter?.map((item, index) => {
              return (
                <MyProductCont key={item._id} cb={getProducts} {...item} />
              );
            })
          ) : (
            <>
              <ProductsLoading />
              <ProductsLoading />
              <ProductsLoading />
              <ProductsLoading />
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VmyProduct;
