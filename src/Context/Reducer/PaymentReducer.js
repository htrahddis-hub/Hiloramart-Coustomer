import { Store } from "react-notifications-component";
import { getOrderID, placeOrder } from "../API";
import { notification } from "../AuthContext";

export const onlinePayment = async (
  product,
  cost,
  quantity,
  setIsLoading,
  navigate
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

      const options = {
        key: process.env.REACT_APP_RAZIRPAY_KEY,
        amount: amount.toString(),
        currency: currency,
        name: "example name",
        description: "example transaction",
        order_id: order_id,
        handler: async function (response) {
          const result = await placeOrder(response, product, amount);
          Store.addNotification({
            ...notification,
            type: "success",
            message: result.data.message,
          });
          setTimeout(() => {
            navigate("/checkout-successfull", {
              replace: true,
              state: { isSuccess: true },
            });
          }, 2000);
          // console.log(result);
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
