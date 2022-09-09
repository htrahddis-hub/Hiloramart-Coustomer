import { Store } from "react-notifications-component";
import { getOrderID, placeOrder } from "../API";
import { notification } from "../AuthContext";

export const onlinePayment = async (
  productIds,
  cost,
  setIsLoading,
  navigate,
  handleClose
) => {
  setIsLoading(true);
  const script = document.createElement("script");
  script.src = "https://checkout.razorpay.com/v1/checkout.js";
  script.onerror = () => {
    alert("Razorpay SDK failed to load. Are you online?");
  };
  script.onload = async () => {
    try {
      const result = await getOrderID(cost);
      const { amount, id: order_id, currency } = result.data.response;

      console.log(result);

      const options = {
        key: process.env.REACT_APP_RAZIRPAY_KEY,
        amount: amount.toString(),
        currency: currency,
        name: "Hiloramart",
        description: "Hiloramart is e-commerce Platform",
        order_id: order_id,
        handler: async function (response) {
          const result = await placeOrder(response, productIds, amount);
          Store.addNotification({
            ...notification,
            type: "success",
            message: result.data.message,
          });
          console.log(result);
          handleClose();
          // setTimeout(() => {
          //   navigate("/checkout-successfull", {
          //     replace: true,
          //     state: { isSuccess: true },
          //   });
          // }, 2000);
        },
        // prefill: {
        //   name: "example name",
        //   email: "email@example.com",
        //   contact: "111111",
        // },
        // notes: {
        //   address: "example address",
        // },
        theme: {
          color: "#80c0f0",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  };
  document.body.appendChild(script);
};
