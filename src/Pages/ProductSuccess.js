import React, { useEffect } from "react";
import { Navigate, NavLink, useLocation } from "react-router-dom";
import "../Styles/pages/ProductSuccess.css";
import success from "../Assets/Images/product-success.svg";
function ProductSuccess() {
  const location = useLocation();
  useEffect(() => {
    if (!location.state.id) return <Navigate to={-1} />;
  }, []);
  return (
    <div className="product-success-cont">
      <div className="product-success-first">
        <div>
          <img src={success} />
        </div>
        <div>
          <p>Product Successfully Uploaded For Buyers</p>
        </div>
      </div>
      <div className="product-success-second">
        <div>You Can See your Product in</div>
        <div>
          <NavLink to="/my-products" className="my-products-link">
            My Products
          </NavLink>
        </div>
      </div>
      <div>
        <NavLink to="/" className="my-products-link">
          Back to home
        </NavLink>
      </div>
    </div>
  );
}

export default ProductSuccess;
