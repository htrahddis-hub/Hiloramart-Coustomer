import React, { useContext, useEffect, useState } from "react";
import MyProductCont from "../../VendorsComponents/MyProductCont";
import "../../VendorsStyle/VmyProduct.css";
import VNavBar from "../../VendorsComponents/VNavBar";
import Footer from "../../Components/Footer";
import { AuthContext } from "../../Context/AuthContext";
import { GET_VENDOR_PRODUCTS } from "../../Context/Types";

const VmyProduct = () => {
  const { dispatch } = useContext(AuthContext);
  const [allProducts, setAllProducts] = useState([]);
  const getProducts = () => {
    dispatch({ type: GET_VENDOR_PRODUCTS, upDateState: setAllProducts });
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div style={{ margin: "3%" }}>
        <div className="RowContainer">
          {allProducts.map((item, index) => {
            return <MyProductCont key={item._id} cb={getProducts} {...item} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VmyProduct;
