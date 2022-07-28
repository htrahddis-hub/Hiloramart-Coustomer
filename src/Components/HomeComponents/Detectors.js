import React, { useContext, useEffect, useRef, useState } from "react";
import ProductContainer2 from "./ProductContainer2";
import "../../Styles/Components/MostSellingProductContainer.css";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { AuthContext } from "../../Context/AuthContext";
import { GET_ALL_PRODUCTS } from "../../Context/Types";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ProductContainerSkeleton from "../Skeleton-loading/prductConatiner.skeleton";

const Detectors = () => {
  const { dispatch } = useContext(AuthContext);
  const [allProducts, setAllProducts] = useState();
  const carousalRef = useRef();
  useEffect(() => {
    dispatch({ type: GET_ALL_PRODUCTS, upDateState: setAllProducts });
  }, []);
  const handleBackward = () => {
    console.log(carousalRef);
    carousalRef.current.scrollLeft -= 200;
  };
  const handleForward = () => {
    carousalRef.current.scrollLeft += 200;
  };

  return (
    <>
      <Container className="MSPmainContainer">
        <div className="MSPcontiner1">Most Selling Products</div>
        <div className="MSPCont2">
          <div className="arrow-scroll-cont">
            <div className="scroll-arrow">
              <ArrowBackIosNewIcon onClick={handleBackward} />
            </div>
            <div className="scroll-arrow">
              <ArrowForwardIosIcon onClick={handleForward} />
            </div>
          </div>
          <div
            style={{ width: "100%" }}
            className="row-container"
            ref={carousalRef}
          >
            {allProducts ? (
              allProducts.map((item, index) => {
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
      </Container>
    </>
  );
};

export default Detectors;
