import React, { useContext, useState } from "react";
import "../Styles/pages/MyOrder.css";
import product from "../Assets/Images/tacking/image.png";
import { CircularProgress } from "@mui/material";
import { AuthContext } from "../Context/AuthContext";
import { RETURN_ITEM } from "../Context/Types";
import { useNavigate } from "react-router-dom";

function MyOrderCard({ data }) {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isBuyLoading, setIsBuyLoading] = useState(false);
  const [isReturnLoading, setIsReturnLoading] = useState(false);
  const [isReturn, setIsReturn] = useState(false);

  const buyIt = () => {
    const productDetails = [data.productId];
    navigate("/checkout", {
      state: {
        productDetails,
        quantity: 1,
      },
    });
  };
  const returnhandle = () => {
    const values = {
      orderId: data.orderId,
      reason: "abc",
    };
    dispatch({
      type: RETURN_ITEM,
      payload: values,
      upDateState: setIsReturn,
      setIsLoading: setIsReturnLoading,
    });
  };

  const handleInvoice = () => {
    window.open(data?.invoice);
  };

  return (
    <div className="my-order-card-cont">
      <div className="my-order-card-product-details">
        <div className="my-order-card-image-cont">
          <img
            src={data?.productId?.productImage[0]}
            className="my-order-card-image"
          />
        </div>
        <div className="my-order-card-text">
          <div>{data?.productId?.name}</div>
          <div>Delivered 12-Mar-2022</div>
        </div>
      </div>
      <div className="my-order-card-order-details">
        <div className="my-order-card-heading-col">
          <div>
            <div>Order Date</div>
            <div className="my-order-card-value-col">22-Mar-2022</div>
          </div>
          <div>
            <div>Order ID</div>
            <div className="my-order-card-value-col">1548-5265854-569652</div>
          </div>
          <div>
            <div>Total Pay</div>
            <div className="my-order-card-value-col">RS {data?.totalPrice}</div>
          </div>
          <div>
            <div>Shipping Address</div>
            <div className="my-order-card-value-col">
              {" "}
              {data?.address?.line1 +
                "," +
                " " +
                data?.address?.city +
                "," +
                " " +
                data?.address?.state}
            </div>
          </div>
        </div>
      </div>
      <div className="my-order-card-btn-cont">
        <div>
          <button className="SignUpButton" onClick={buyIt}>
            Buy it again
          </button>
        </div>
        <div>
          <button id="BUYbutton2" className="return-btn" onClick={returnhandle}>
            {isReturnLoading ? (
              <CircularProgress sx={{ color: "black" }} size={25} />
            ) : (
              "Return"
            )}
          </button>
        </div>
      </div>
      <div className="my-order-download-btn-cont">
        <button className="download-btn" onClick={handleInvoice}>
          Download Invoice
        </button>
      </div>
    </div>
  );
}

export default MyOrderCard;
