import React from "react";
import ProductContainer2 from "./ProductContainer2";
import "../../Styles/Components/MostSellingProductContainer.css";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
const MostSellingProductContainer = () => {
  return (
    <>
      <Container className="MSPmainContainer">
        <div className="MSPcontiner1">Most Selling Products</div>
        <div className="MSPCont2">
          <Row style={{ width: "100%" }}>
            <Col>
              <Link
                to="/HomeProductDetail"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <ProductContainer2 />
              </Link>
            </Col>
            <Col>
              <Link
                to="/HomeProductDetail"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <ProductContainer2 />
              </Link>
            </Col>
            <Col>
              <Link
                to="/HomeProductDetail"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <ProductContainer2 />
              </Link>
            </Col>
            <Col>
              <Link
                to="/HomeProductDetail"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <ProductContainer2 />
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default MostSellingProductContainer;
