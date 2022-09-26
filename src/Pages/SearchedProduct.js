import React, { useContext, useEffect, useState } from "react";
import SearchProductConst from "../Components/MyWishList/SearchProductCont";
import "../VendorsStyle/VmyProduct.css";
import Footer from "../Components/Footer";
import { AuthContext } from "../Context/AuthContext";
import { SEARCG_PRODUCT, GET_ALL_CATEGORY } from "../Context/Types";
import ProductsLoading from "../Components/Skeleton-loading/Products-loading";
import search_icon from "../Assets/Images/search.svg";
import { useParams, useNavigate } from "react-router-dom";

const VmyProduct = () => {
  const { dispatch } = useContext(AuthContext);
  let { name } = useParams();

  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = () => {};

  useEffect(() => {
    setIsLoading(true);
    dispatch({
      type: SEARCG_PRODUCT,
      name: name,
      catId: "",
      upDateState: setAllProducts,
      setIsLoading,
    });
  }, [name]);

  return (
    <>
      <div style={{ margin: "2% 3%" }}>
        <div className="d-flex justify-content-center align-items-center">
          <div></div>
          <div
            style={{ width: "33.33%", marginRight: 0, textAlign: "center" }}
            className="h1 end"
          >
            Search Results
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3 flex-wrap mx-auto">
          {isLoading ? (
            <>
              <ProductsLoading />
              <ProductsLoading />
              <ProductsLoading />
              <ProductsLoading />
            </>
          ) : allProducts?.length !== 0 ? (
            allProducts?.map((item, index) => {
              return (
                <SearchProductConst
                  key={item._id}
                  data={item}
                  cb={getProducts}
                />
              );
            })
          ) : (
            <div>No Such Product Found</div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VmyProduct;
