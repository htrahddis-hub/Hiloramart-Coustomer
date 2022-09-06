import axios from "axios";

const API = axios.create({
    baseURL: 'https://apiv2.shiprocket.in/v1'
});


API.interceptors.request.use((req) => {
    if(localStorage.getItem('shiprocketToken')) {
        req.headers.Authorization = `Bearer ${localStorage.getItem('shiprocketToken')}`;
    }
    return req;
});


export const createAddress = (data) => API.post('/external/settings/company/addpickup', data);


export const getAllAddress = () => API.get("/external/settings/company/pickup");
export const createOrder = (data) => API.post("/external/orders/create/adhoc",data);

export const getCountry = () => API.get("/external/countries");

export const getLocalities = (id) => API.get(`/external/countries/show/${id}`);

export const getCourierService = (pickupCode, deliveryCode, orderId) => API.get(`/external/courier/serviceability?pickup_postcode=${pickupCode}&delivery_postcode=${deliveryCode}&order_id=${orderId}`);

export const generateAWB = (shipmentId, courierId) => API.post("/external/courier/assign/awb", {shipment_id: shipmentId, courier_id: courierId});

export const pickupRequest = (shipmentId) => API.post("/external/courier/generate/pickup", {
    shipment_id: [shipmentId]
})

export const getDetailsOfSpecificShipment = (shipmentId) => API.get(`/external/shipments/${shipmentId}`);