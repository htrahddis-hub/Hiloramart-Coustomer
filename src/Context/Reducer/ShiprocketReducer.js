import { createAddress, createOrder, getAllAddress } from "../shiprocketApi";
import axios from "axios";


export const createShiprocketLocation = async(data, setShiprocketAddress, item) => {

    console.log(data, item, "dta is tatsklnskd");

    const myData = {
        pickup_location: data?.city +  "," + data?.state + "," + data?.country,
        name: item?.user?.name,
        email: item?.user?.email,
        phone: Number(item?.user?.mobile),
        address: data?.address,
        address_2: data?.address_2,
        city: data?.city,
        state: data?.state,
        country: data?.country,
        pin_code: Number(data?.pin_code)
    }

    try {
        const res = await createAddress(myData);
        console.log(res, "address crated");
        setShiprocketAddress(res.data);
    } catch (error) {
        console.log(error);
    }
}

export const getAllShiprocketAddress = async(setAllShiprocketAddress) => {
    try {
        const res = await getAllAddress();
        // console.log(res);
        setAllShiprocketAddress(res?.data?.data);
    } catch (error) {
        console.log(error);
    }
}


export const createShiprocketVendorOrder = async(orderData, item) => {
    const myData = {
        order_id: item?._id,
        order_date: item?.createdAt.slice(0,10),
        pickup_location: item?.address?.line1 + item?.address?.line2,
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

    // console.log(myData);
    try {
        const res = await createOrder(myData);
        console.log(res, "shiprocket create order");
    } catch (error) {
        console.log(error);
    }
}
