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
  const [searchName, setSearchName] = useState(name);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = () => {
    dispatch({
      type: SEARCG_PRODUCT,
      name: searchName,
      catId: "",
      upDateState: setAllProducts,
      setIsLoading,
    });
  };

  useEffect(() => {
    setIsLoading(true);
    getProducts();
  }, []);

  const handleSubmit = () => {
    setIsLoading(true);
    getProducts();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handelChange = (e) => {
    setSearchName(e.target.value);
  };

  return (
    <>
      <div style={{ margin: "2% 3%" }}>
        <div className="d-flex justify-content-end">
          <div className="search-input-cont">
            <div onClick={handleSubmit}>
              <img src={search_icon} className="search_icon" />
            </div>
            <div>
              <input
                placeholder="Seacrh here"
                className="search-input"
                value={searchName}
                onChange={handelChange}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
        </div>
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
