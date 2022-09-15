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
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

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

function OrderTable4({ data, isLoading, pageChangeHandler }) {
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
      name: 'Date'
    },
    {
      name: "Status",
    },
  ];

  console.log(data);
  return (
      isLoading ? ( <div style={{width: '100%', display: 'grid', placeItems: 'center', margin: '40px 0'}}><CircularProgress style={{color: '#FF8D22'}}/></div> ) :
      data?.data?.length === 0 ? <p style={{textAlign: 'center', margin: '40px 0', height: '300px'}}>No Data Found!</p> : (
        <>
        <div style={{height: '100vh', overflow: 'auto', padding: '10px'}} className="table-container">
          <table className="columns-cont">
            <thead>
              <tr style={{borderLeft: '1px solid lightgray', borderTop: '1px solid lightgray'}}>
                {columns.map((item, index) => {
                  return <th className="column-title">{item.name}</th>;
                })}
              </tr>
            </thead>
            <tbody style={{borderLeft: '1px solid lightgray', borderRight: '1px solid lightgray', borderBottom: '1px solid lightgray'}}>
              {data?.data?.map((item) => {
                return (
                  <>
                  {/* <tr onClick={()=>openModal(item)} className="pointer"> */}
                  <tr style={{height: '70px', overflow: 'auto'}} className="pointer">
                    <div style={{width: '15%'}} className="column-details">{item?._id}</div>
                    <div style={{width: '20%', padding: '10px 5px'}} className="column-details">
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'start'}}>
                        <div style={{width: '40px', height: '40px', marginRight: '5px'}}>
                          <img style={{width: '100%', height: '100%'}} src={item?.productId?.productImage[0]} alt="" />
                        </div>
                        <h6 style={{textAlign: 'left'}}>{item?.productId?.name}</h6>
                      </div>
                      <p style={{textAlign: 'left'}}>#{item?.productId?._id}</p>
                    </div>
                    <div style={{width: '5%'}} className="column-details">{item?.quantity}</div>
                    <div style={{width: '25%'}} className="column-details">
                      {item?.user?.name +
                        " " +
                        item?.address?.line1 +
                        ", " +
                        item?.address?.city +
                        ", " +
                        item?.address?.state}
                    </div>
                    <div style={{width: '5%'}} className="column-details">Rs. {item?.totalPrice}</div>
                    <div style={{width: '15%'}}  className="column-details">{item?.updatedAt.slice(0,10)}</div>
                    <div style={{width: '10%'}} className="column-details">{item?.status}</div>
                  </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
          <div style={{display: 'grid', placeItems: 'center'}}>
            <Stack spacing={2}>
              <Pagination count={data?.totalPages} onChange={pageChangeHandler} />
            </Stack>
          </div>
      </>
      )
  );
}

export default OrderTable4;
