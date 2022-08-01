import { CircularProgress } from "@mui/material";
import React, { useContext, useState } from "react";
import Image from "../Assets/Images/MyWishList/Image.svg";
import Delete from "../Assets/Images/remove.svg";
import { AuthContext } from "../Context/AuthContext";
import { DELETE_PRODUCT } from "../Context/Types";
import "../Styles/pages/Cart2.css";

const MyProductCont = (props) => {
  const { dispatch } = useContext(AuthContext);
  const { description, price, productImage, _id, cb, productVideos } = props;
  const [isLoading, setIsLoading] = useState(false);

  const deleteProduct = () => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: _id,
      setIsLoading,
      cb,
      productImage,
      productVideos,
    });
  };
  return (
    <div className="CPCmain" style={{ background: "rgba(112,112,112,0.05)" }}>
      <div className="CPC1">
        <img src={productImage[0]} alt="" />
      </div>
      <div className="product-detail">
        <div className="CPCin1">{description}</div>
        <div className="CPCin2">RS. {price}</div>
      </div>
      <div className="product-options">
        <div className="remove-icon" onClick={deleteProduct}>
          {isLoading ? (
            <CircularProgress sx={{ color: "black" }} size={20} />
          ) : (
            <img src={Delete} alt="" className="CPC2" />
          )}
        </div>
        <div
          style={{ color: "#FF8D22", fontWeight: "bold", marginBottom: "10px" }}
        >
          Edit
        </div>
      </div>
    </div>
  );
};

export default MyProductCont;
