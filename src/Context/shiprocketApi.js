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