import { CircularProgress } from "@mui/material";
import React, { useContext } from "react";
import "../Styles/Components/OrderTable.css";
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { ADD_SHIPROCKET_PICKUP_LOCATION, GET_SHIPROCKET_ADDRESS, GET_VENDOR_ADDRESS, SHIPROCKET_CREATE_ORDER_VENDOR } from "../Context/Types";
import { AuthContext } from "../Context/AuthContext";
import { useState } from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "90%",
  // height: '70%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px',
  border: 'none'
};

function OrderTable({ data, isLoading }) {
  const { dispatch } = useContext(AuthContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [item, setItem] = useState();

  const [isAddAddress, setIsAddAddress] = useState(false);



  const [orderData, setOrderData] = useState({
    length: 0,
    breadth: 0,
    height: 0,
    weight: 0,
    // address: "",
  })

  const [pickupAddress, setPickupAddress] = useState({
    address: "",
    address_2: "",
    city: "",
    state: "",
    country: "",
    pin_code: 0
  });

  const [pickupAddressToCreateOrder, setPickupAddressToCreateOrder] = useState("");

  const [shiprocketAddress, setShiprocketAddress] = useState();

  const [shiprocketCreatedOrder, setShiprocketCreatedOrder] = useState({});

  const [allShiprocketAddress, setAllShiprocketAddress] = useState();


const orderInputHandler = (e) => {
  setOrderData((prev) => {
    return {...prev, [e.target.name]: e.target.value}
  })
}

const getAddress = () => {
  dispatch({
    type: GET_VENDOR_ADDRESS
  })
}

const createOrder = (item) => {
  dispatch({
    type: SHIPROCKET_CREATE_ORDER_VENDOR,
    orderData,
    item,
    pickupAddressToCreateOrder,
    setShiprocketCreatedOrder
  })
}

const addAddressShiprocket = (item) => {
  setIsAddAddress(true)
  dispatch({
    type: ADD_SHIPROCKET_PICKUP_LOCATION,
    data: pickupAddress,
    item,
    setShiprocketAddress
  })
}

const openModal = (itemData) => {
  setItem({...itemData});
  handleOpen();
}


const orderAddressHandler = (e) => {
  setPickupAddress((prev) => {
    return {...prev, [e.target.name]: e.target.value};
  })
}

const getShipRocketAddress = () => {
  dispatch({
    type: GET_SHIPROCKET_ADDRESS,
    setAllShiprocketAddress
  })
}

const shiprocketHandler = (e) => {
  setPickupAddressToCreateOrder(e.target.value)
}

  useEffect(() => {
    getAddress();
    getShipRocketAddress();
  }, [])

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
  console.log(data, "my data");
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
              {data.map((item) => {
                return (
                  <>
                  <tr onClick={()=>openModal(item)} className="pointer">
                    <div className="column-details">{item._id}</div>
                    <div className="column-details">{item.productId.name}</div>
                    <div className="column-details">{item.quantity}</div>
                    <div className="column-details">
                      {item.user.name +
                        " " +
                        item.user.address[0].line1 +
                        ", " +
                        item.user.address[0].city +
                        ", " +
                        item.user.address[0].state}
                    </div>
                    <div className="column-details">Rs. {item.totalPrice}</div>
                    <div className="column-details">{item.price}</div>
                    <div className="column-details">{item.status}</div>
                  </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <div style={{display: 'flex'}}>
                          <div style={{width: '40%'}}>
                            <div className="product-info-container">
                              <span className="heading">Order Id</span>
                              <span className="heading-data">{item?._id}</span>
                            </div>
                            <div className="product-info-container">
                              <span className="heading">Buyer Name</span>
                              <span className="heading-data">{item?.user?.name}</span>
                            </div>
                            <div className="product-info-container">
                              <span className="heading">Buyer Phone</span>
                              <span className="heading-data">{item?.user?.mobile}</span>
                            </div>
                            <div className="product-info-container">
                              <span className="heading">Buyer Email</span>
                              <span className="heading-data">{item?.user?.email}</span>
                            </div>
                            <div className="product-info-container">
                              <span className="heading">Delivery Address</span>
                              <span className="heading-data">{`${item?.address?.line1}, ${item?.address?.line2}, ${item?.address?.city}-${item?.address?.pincode}, ${item?.address?.state}, ${item?.address?.country}`}</span>
                            </div>
                            <div className="product-info-container">
                              <span className="heading">Product Name</span>
                              <span className="heading-data">{item?.productId?.name}</span>
                            </div>
                            <div className="product-info-container">
                              <span className="heading">Quantity</span>
                              <span className="heading-data">{item?.quantity}</span>
                            </div>
                            <div className="product-info-container">
                              <span className="heading">Product Price</span>
                              <span className="heading-data">Rs. {item?.productId?.price}</span>
                            </div>
                            <div className="product-info-container">
                              <span className="heading">Total Price</span>
                              <span className="heading-data">Rs. {item?.totalPrice}</span>
                            </div>
                            <div className="product-info-container">
                              <span className="heading">Payment Method</span>
                              <span className="heading-data">{item?.isCOD ? "COD" : "UPI"}</span>
                            </div>
                            <div className="product-info-container">
                              <span className="heading">Date</span>
                              <span className="heading-data">{item?.productId?.createdAt.slice(0, 10)}</span>
                            </div>
                            <div className="product-info-container">
                              <span className="heading">Status</span>
                              <span className="heading-data" style={{fontWeight: 'bold'}}>{item?.status}</span>
                            </div>
                          </div>
                          <div style={{width: '60%', padding: '0 30px'}}>
                              <h1 style={{fontSize: '30px'}}>Order Details :</h1>
                              <div style={{display: 'flex'}} className="items">
                                <div style={{display: 'flex', flexDirection: 'column', marginRight: '5px'}}>
                                  <label style={{color: 'gray'}} htmlFor="length">Length (cm)</label>
                                  <input onChange={orderInputHandler} style={{border: '1px solid #FF8D22', height: '40px', borderRadius: '8px', marginBottom: '10px', outline: 'none', paddingLeft: '10px'}} type="number" name="length" id="length" />
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column', marginRight: '5px'}}>
                                  <label style={{color: 'gray'}} htmlFor="breadth">Breadth (cm)</label>
                                  <input onChange={orderInputHandler} style={{border: '1px solid #FF8D22', height: '40px', borderRadius: '8px', marginBottom: '10px', outline: 'none', paddingLeft: '10px'}} type="number" name="breadth" id="breadth" />
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                  <label style={{color: 'gray'}} htmlFor="height">Heigth (cm)</label>
                                  <input onChange={orderInputHandler} style={{border: '1px solid #FF8D22', height: '40px', borderRadius: '8px', marginBottom: '10px', outline: 'none', paddingLeft: '10px'}} type="number" name="height" id="height" />
                                </div>
                              </div>

                              <div style={{display: 'flex', flexDirection: 'column'}}>
                                <label style={{color: 'gray'}} htmlFor="weight">Weight (kg)</label>
                                <input onChange={orderInputHandler} style={{border: '1px solid #FF8D22', height: '40px', borderRadius: '8px', marginBottom: '10px', outline: 'none', paddingLeft: '10px'}} type="number" name="weight" id="weight" />
                              </div>

                              {
                                allShiprocketAddress?.shipping_address.length === 0 ? (
                                  <>
                                  <div style={{display: 'flex', flexDirection: 'column', marginTop: '20px'}}>
                                <label htmlFor="address" style={{marginBottom: '10px'}}>Pickup Address:</label>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                  <div style={{display: 'flex', flexDirection: 'column'}}>                                    
                                    <label style={{color: 'gray'}} htmlFor="address">Address Line 1</label>
                                    <input onChange={orderAddressHandler} style={{border: '1px solid #FF8D22', height: '40px', borderRadius: '8px', marginBottom: '10px', outline: 'none', paddingLeft: '10px'}} type="text" name="address" id="address" />
                                  </div>
                                  <div style={{display: 'flex', flexDirection: 'column'}}>                                    
                                    <label style={{color: 'gray'}} htmlFor="address_2">Address Line 2</label>
                                    <input onChange={orderAddressHandler} style={{border: '1px solid #FF8D22', height: '40px', borderRadius: '8px', marginBottom: '10px', outline: 'none', paddingLeft: '10px'}} type="text" name="address_2" id="address_2" />
                                  </div>
                                  <div style={{display: 'flex', flexDirection: 'column'}}>                                    
                                    <label style={{color: 'gray'}} htmlFor="city">City</label>
                                    <input onChange={orderAddressHandler} style={{border: '1px solid #FF8D22', height: '40px', borderRadius: '8px', marginBottom: '10px', outline: 'none', paddingLeft: '10px'}} type="text" name="city" id="city" />
                                  </div>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                  <div style={{display: 'flex', flexDirection: 'column'}}>                                    
                                    <label style={{color: 'gray'}} htmlFor="state">State</label>
                                    <input onChange={orderAddressHandler} style={{border: '1px solid #FF8D22', height: '40px', borderRadius: '8px', marginBottom: '10px', outline: 'none', paddingLeft: '10px'}} type="text" name="state" id="state" />
                                  </div>
                                  <div style={{display: 'flex', flexDirection: 'column'}}>                                    
                                    <label style={{color: 'gray'}} htmlFor="country">Country</label>
                                    <input onChange={orderAddressHandler} style={{border: '1px solid #FF8D22', height: '40px', borderRadius: '8px', marginBottom: '10px', outline: 'none', paddingLeft: '10px'}} type="text" name="country" id="country" />
                                  </div>
                                  <div style={{display: 'flex', flexDirection: 'column'}}>                                    
                                    <label style={{color: 'gray'}} htmlFor="pin_code">Zipcode</label>
                                    <input onChange={orderAddressHandler} style={{border: '1px solid #FF8D22', height: '40px', borderRadius: '8px', marginBottom: '10px', outline: 'none', paddingLeft: '10px'}} type="text" name="pin_code" id="pin_code" />
                                  </div>
                                </div>
                                  </div>
                                  <div>
                                    <Button onClick={()=>addAddressShiprocket(item)} style={{backgroundColor: '#FF8D22', marginRight: '8px'}} variant="contained">Add Address</Button>
                                  </div>
                                  </>
                                ) : (
                                  <>
                                  <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <label htmlFor="address" style={{marginBottom: '10px'}}>Pickup Address:</label>
                                    <select onChange={shiprocketHandler} name="add" id="add" style={{border: '1px solid #FF8D22', height: '40px',width: '100%', borderRadius: '8px', marginBottom: '10px', outline: 'none', paddingLeft: '10px'}} >
                                      <option value="">None</option>
                                      {allShiprocketAddress?.shipping_address.map((item) => (
                                        <option value={item?.address}>{`${item?.address}, ${item?.address_2}, ${item?.city}-${item?.pin_code}, ${item?.state}, ${item?.country}`}</option>
                                      ))}
                                    </select>
                                  </div>
                                  <div style={{display: 'flex', flexDirection: 'column', marginTop: '20px'}}>
                                
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                  <div style={{display: 'flex', flexDirection: 'column'}}>                                    
                                    <label style={{color: 'gray'}} htmlFor="address">Address Line 1</label>
                                    <input onChange={orderAddressHandler} style={{border: '1px solid #FF8D22', height: '40px', borderRadius: '8px', marginBottom: '10px', outline: 'none', paddingLeft: '10px'}} type="text" name="address" id="address" />
                                  </div>
                                  <div style={{display: 'flex', flexDirection: 'column'}}>                                    
                                    <label style={{color: 'gray'}} htmlFor="address_2">Address Line 2</label>
                                    <input onChange={orderAddressHandler} style={{border: '1px solid #FF8D22', height: '40px', borderRadius: '8px', marginBottom: '10px', outline: 'none', paddingLeft: '10px'}} type="text" name="address_2" id="address_2" />
                                  </div>
                                  <div style={{display: 'flex', flexDirection: 'column'}}>                                    
                                    <label style={{color: 'gray'}} htmlFor="city">City</label>
                                    <input onChange={orderAddressHandler} style={{border: '1px solid #FF8D22', height: '40px', borderRadius: '8px', marginBottom: '10px', outline: 'none', paddingLeft: '10px'}} type="text" name="city" id="city" />
                                  </div>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                  <div style={{display: 'flex', flexDirection: 'column'}}>                                    
                                    <label style={{color: 'gray'}} htmlFor="state">State</label>
                                    <input onChange={orderAddressHandler} style={{border: '1px solid #FF8D22', height: '40px', borderRadius: '8px', marginBottom: '10px', outline: 'none', paddingLeft: '10px'}} type="text" name="state" id="state" />
                                  </div>
                                  <div style={{display: 'flex', flexDirection: 'column'}}>                                    
                                    <label style={{color: 'gray'}} htmlFor="country">Country</label>
                                    <input onChange={orderAddressHandler} style={{border: '1px solid #FF8D22', height: '40px', borderRadius: '8px', marginBottom: '10px', outline: 'none', paddingLeft: '10px'}} type="text" name="country" id="country" />
                                  </div>
                                  <div style={{display: 'flex', flexDirection: 'column'}}>                                    
                                    <label style={{color: 'gray'}} htmlFor="pin_code">Zipcode</label>
                                    <input onChange={orderAddressHandler} style={{border: '1px solid #FF8D22', height: '40px', borderRadius: '8px', marginBottom: '10px', outline: 'none', paddingLeft: '10px'}} type="text" name="pin_code" id="pin_code" />
                                  </div>
                                </div>
                                  </div>
                                  <div>
                                    <Button onClick={()=>addAddressShiprocket(item)} style={{backgroundColor: '#FF8D22', marginRight: '8px'}} variant="contained">Add Address</Button>
                                  </div>
                                  </>
                                )
                              }
                            </div>
                          </div>
                        <div className="button-container">
                            <Button onClick={()=>createOrder(item)} style={{backgroundColor: '#FF8D22', marginRight: '8px'}} variant="contained">Submit</Button>
                            <Button onClick={handleClose} style={{color: '#FF8D22', borderColor: '#FF8D22'}} variant="outlined">Cancel</Button>
                        </div>
                      </Box>
          </Modal>
        </div>

      )
  );
}

export default OrderTable;
