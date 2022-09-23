import React, { useContext, useEffect, useRef, useState } from "react";
import ProductContainer2 from "./ProductContainer2";
import "../../Styles/Components/MostSellingProductContainer.css";
import { AuthContext } from "../../Context/AuthContext";
import {
  GET_TOP_PRODUCTS,
  GET_ALL_CATEGORY,
  GET_ALL_PRODUCTS,
} from "../../Context/Types";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ProductContainerSkeleton from "../Skeleton-loading/prductConatiner.skeleton";

const Detectors = () => {
  const { dispatch } = useContext(AuthContext);
  const [allProducts, setAllProducts] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDropdown, setIsDropDown] = useState(false);
  const [categoryName, setCategoryName] = useState("All");
  const carousalRef = useRef();
  useEffect(() => {
    dispatch({ type: GET_ALL_PRODUCTS, upDateState: setAllProducts });
  }, []);

  const handleBackward = () => {
    carousalRef.current.scrollLeft -= 200;
  };
  const handleForward = () => {
    carousalRef.current.scrollLeft += 200;
  };

  useEffect(() => {
    dispatch({
      type: GET_ALL_CATEGORY,
      upDateState: setAllCategory,
      setIsLoading,
    });
  }, []);

  return (
    <>
      {allCategory?.map((cat) => (
        <div className="MSPmainContainer mx-3">
          <div className="MSPCont2">
            <div className="arrow-scroll-cont d-flex justify-content-between">
              <div className="MSPcontiner1">{cat?.name}</div>
              <div className="d-flex">
                <div className="scroll-arrow me-4">
                  <ArrowBackIosNewIcon onClick={handleBackward} />
                </div>
                <div className="scroll-arrow">
                  <ArrowForwardIosIcon onClick={handleForward} />
                </div>
              </div>
            </div>
            <div
              style={{ width: "100%" }}
              className="row-container"
              ref={carousalRef}
            >
              {allProducts ? (
                allProducts.map((item) => {
                  if (item?.category?._id === cat?._id)
                    return <ProductContainer2 {...item} key={item?._id}/>;
                })
              ) : (
                <div className="d-flex gap-5">
                  <ProductContainerSkeleton />
                  <ProductContainerSkeleton />
                  <ProductContainerSkeleton />
                  <ProductContainerSkeleton />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      {/* <Container className="MSPmainContainer">
        <div className="MSPcontiner1">Most Selling Products</div>
        <div className="MSPCont2">
          <div className="arrow-scroll-cont d-flex justify-content-between">
            <div className="ms-5">
              <div
                style={{
                  width: "33.33%",
                  display: "flex",
                  justifyContent: "end",
                  position: "relative",
                }}
                className="cat-div"
                onClick={handleDropdown}
              >
                {categoryName ? categoryName : "All"}
                <KeyboardArrowDownOutlinedIcon />
              </div>
              {isDropdown ? (
                <div
                  style={{
                    position: "absolute",
                    top: "268%",
                    left: "10%",
                    zIndex: "10",
                  }}
                  className="category-list"
                >
                  <div className="cat-li" onClick={() => handleCat(0, "All")}>
                    All
                  </div>
                  {allCategory?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        data-cat-id={item._id}
                        className="cat-li"
                        onClick={() => handleCat(item._id, item.name)}
                      >
                        {item.name}
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="d-flex ">
              <div className="scroll-arrow me-3">
                <ArrowBackIosNewIcon onClick={handleBackward} />
              </div>
              <div className="scroll-arrow">
                <ArrowForwardIosIcon onClick={handleForward} />
              </div>
            </div>
          </div>
          <div
            style={{ width: "100%" }}
            className="row-container"
            ref={carousalRef}
          >
            {allProducts ? (
              filteredData.map((item, index) => {
                return (
                  <div key={item._id} className="prod-cont">
                    <Link
                      to={`/HomeProductDetail/${item._id}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      <ProductContainer2 {...item} />
                    </Link>
                  </div>
                );
              })
            ) : (
              <div className="d-flex gap-5">
                <ProductContainerSkeleton />
                <ProductContainerSkeleton />
                <ProductContainerSkeleton />
                <ProductContainerSkeleton />
              </div>
            )}
          </div>
        </div>
      </Container> */}
    </>
  );
};

export default Detectors;
