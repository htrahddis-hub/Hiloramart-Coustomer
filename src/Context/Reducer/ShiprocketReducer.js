import { createAddress, createAddress2, createOrder, generateAWB, getAllAddress, getCountry, getCourierService, getLocalities, pickupRequest } from "../shiprocketApi";
import axios from "axios";
import { addVendorAddress, getCurrentOrdersRequest, getVendorAddresss, updateOrderRequest } from "../API";
import { Store } from "react-notifications-component";
import { notification } from "../AuthContext";

export const createShiprocketLocation2 = async(pickupAddress, profileData) => {
    const data = {
        line1: pickupAddress?.address,
        line2: pickupAddress?.address_2,
        city: pickupAddress?.city,
        state: pickupAddress?.state,
        pincode: pickupAddress?.pin_code,
        country: pickupAddress?.country,
        isCurrent: false
    }

    try {
        const res = await addVendorAddress(data);
        if(res.data.success) {
            const revData = res.data.data.address.reverse();
            const myData2 = {
                pickup_location: revData[0]._id,
                name: profileData?.name,
                email: profileData?.email,
                phone: Number(profileData?.number),
                address: revData[0]?.line1,
                address_2: revData[0]?.line2,
                city: revData[0]?.city,
                state: revData[0]?.state,
                country: revData[0]?.country,
                pin_code: Number(revData[0]?.pincode)
            }
            try {
                const res = await createAddress(myData2);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }
        console.log(res.data.data.address);
    } catch (error) {
        console.log(error);
    }
}

export const createShiprocketLocation = async(data, profileData) => {

    let reverseData = data.reverse()

    console.log(data, profileData, "location created in shiprocket");

    const myData = {
        pickup_location: reverseData[0]._id,
        name: profileData?.name,
        email: profileData?.email,
        phone: Number(profileData?.number),
        address: reverseData[0]?.line1,
        address_2: reverseData[0]?.line2,
        city: reverseData[0]?.city,
        state: reverseData[0]?.state,
        country: reverseData[0]?.country,
        pin_code: Number(reverseData[0]?.pincode)
    }
    try {
        const res = await createAddress(myData);
        console.log(res, "address crated");
    } catch (error) {
        console.log(error);
    }
}

export const getAllShiprocketAddress = async(setAllShiprocketAddress) => {
    try {
        const res = await getAllAddress();
        console.log(res);
        const getAdd = await getVendorAddresss();

        let dataPass = [];
        res.data.data.shipping_address.forEach((item) => (
            getAdd.data.data.address.forEach((item2) => (
                (item2._id === item.pickup_location) ? dataPass.push(item) : dataPass
            ))
        ))
        setAllShiprocketAddress(dataPass);
    } catch (error) {
        console.log(error);
    }
}


export const createShiprocketVendorOrder = async(orderData, item, pickupAddressToCreateOrder, setShiprocketCreatedOrder, setCourierServiceAvail, pickupCode, setIsLoading2, setIsOrderCreated) => {
    console.log(item);
    console.log(orderData);
    const myData = {
        order_id: item?._id,
        order_date: item?.createdAt.slice(0,10),
        pickup_location: pickupAddressToCreateOrder,
        comment: "Thank You",
        company_name: "Hiloramart",
        billing_customer_name: item?.user?.name,
        billing_last_name: "",
        billing_address: "primary",
        billing_city: item?.address?.city,
        billing_pincode: Number(item?.address?.pincode),
        billing_state: item?.address?.state,
        billing_country: item?.address?.country,
        billing_email: item?.user?.email,
        billing_phone: item?.user?.mobile,
        shipping_is_billing: true,
        shipping_charges: 0,
        total_discount: 0,
        order_items: [
            {
                name: item?.productId?.name,
                sku: item?._id,
                units: Number(item?.quantity),
                selling_price: Number(item?.productId?.price),
            }
        ],
        payment_method: item?.isCOD ? "COD":"Prepaid",
        sub_total: item?.totalPrice,
        length: Number(orderData?.length),
        breadth: Number(orderData?.breadth),
        height: Number(orderData?.height),
        weight: Number(orderData?.weight)
    }

    console.log(myData);
    try {
        setIsLoading2(true);
        const res = await createOrder(myData);
        setShiprocketCreatedOrder(res.data)
        console.log(res); //res.data.order_id
        
        if(res?.status === 200) {
            Store.addNotification({
                ...notification,
                type: "success",
                message: "Order Created! Please Assign Courier",
              });
            setIsOrderCreated(true);
            try {
                const res2 = await getCourierService(pickupCode, item?.address?.pincode, res?.data?.order_id)
                console.log(res2);
                setCourierServiceAvail(res2?.data);
            } catch (error) {
                console.log(error);
                Store.addNotification({
                    ...notification,
                    type: "warning",
                    message: "No courier service found!",
                  });
            }
        }
        console.log(res, "shiprocket create order");
    } catch (error) {
        console.log(error);
        Store.addNotification({
            ...notification,
            type: "danger",
            message: "Order is not created!",
          });
        setIsOrderCreated(false);
    }finally {
        setIsLoading2(false);
    }
}


export const getShipRocketCountry = async(setAllCountries) => {
    try {
        const {data} = await getCountry();
        setAllCountries(data?.data)
    } catch (error) {
        console.log(error);
    }
}
export const getShipRocketLocality = async(setAllLocalities, id) => {
    try {
        const {data} = await getLocalities(id);
        setAllLocalities(data?.data)
    } catch (error) {
        console.log(error);
    }
}

export const generateAWBNow = async(shipmentId, setIsLoading3, courierId, handleClose, orderId, orderId2, setAllOrders) => {
    setIsLoading3(true);
    try {
        console.log(orderId, "data");
        const res = await generateAWB(shipmentId, courierId, orderId2);
        console.log(res, "res1");
        if(res.data) {
            try {
                const res2 = await pickupRequest(String(shipmentId));
                console.log(res2, "res2");
                if(res2.status === 200) {
                    try {
                        const res3 = await updateOrderRequest({order_id: orderId, SKUorderId: orderId2, SKUshipmentId: shipmentId, status: "Pickup Scheduled"});
                        console.log(res3);
                        Store.addNotification({
                            ...notification,
                            type: "success",
                            message: "Courier Assigned",
                          });
                        handleClose();
                        try {
                            const res4 = await getCurrentOrdersRequest();
                            setAllOrders(res4?.data?.data);
                        } catch (error) {
                            console.log(error);
                        }

                    } catch (error) {
                        console.log(error);
                    }
                }
            } catch (error) {
                console.log(error);
                Store.addNotification({
                    ...notification,
                    type: "danger",
                    message: "Courier Assign Failed",
                });
            }
        }
    } catch (error) {
        console.log(error);
        Store.addNotification({
            ...notification,
            type: "danger",
            message: "Courier Assign Failed",
          });
    } finally {
        setIsLoading3(false);
    }
}
