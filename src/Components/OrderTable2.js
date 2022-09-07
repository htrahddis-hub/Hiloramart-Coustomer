import { CircularProgress } from "@mui/material";
import React, { useContext } from "react";
import "../Styles/Components/OrderTable.css";
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { ADD_SHIPROCKET_PICKUP_LOCATION, ADD_SHIPROCKET_PICKUP_LOCATION2, GENERATE_SHIPROCKET_AWB, GET_SHIPROCKET_ADDRESS, GET_SHIPROCKET_COURIER_SERVICE, GET_VENDOR_ADDRESS, GET_VENDOR_PROFILE, GET_VENDOR_PROFILE2, SHIPROCKET_CREATE_ORDER_VENDOR } from "../Context/Types";
import { AuthContext } from "../Context/AuthContext";
import { useState } from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "90%",
  height: '95%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px',
  border: 'none'
};

function OrderTable2({ data, isLoading }) {
  const { dispatch, AuthRole, currentUser } = useContext(AuthContext);
  const columns = [
    {
      name: "Order ID",
    },
    {
      name: "Product information",
    },
    {
      name: "Qnty",
    },
    {
      name: "Buyer Details",
    },
    {
      name: "Amount",
    },
    {
      name: "Reason",
    },
    {
      name: "Status",
    },
  ];
  return (
      isLoading ? ( <div style={{width: '100%', display: 'grid', placeItems: 'center', margin: '40px 0'}}><CircularProgress style={{color: '#FF8D22'}}/></div> ) :
      data?.length === 0 ? <p style={{textAlign: 'center', margin: '40px 0'}}>No Data Found!</p> : (
        <div className="table-container">
          <table className="columns-cont">
            <thead>
              <tr>
                {columns.map((item, index) => {
                  return <th className="column-title">{item.name}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => {
                return (
                  <>
                  {/* <tr onClick={()=>openModal(item)} className="pointer"> */}
                  <tr className="pointer">
                    <div className="column-details">{item?._id}</div>
                    <div className="column-details">{item?.productId?.name}</div>
                    <div className="column-details">{item?.quantity}</div>
                    <div className="column-details">
                      {item?.user?.name +
                        " " +
                        item?.user?.address[0]?.line1 +
                        ", " +
                        item?.user?.address[0]?.city +
                        ", " +
                        item?.user?.address[0]?.state}
                    </div>
                    <div className="column-details">Rs. {item?.totalPrice}</div>
                    <div className="column-details">{item?.price}</div>
                    <div className="column-details">{item?.status}</div>
                  </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>

      )
  );
}

export default OrderTable2;
