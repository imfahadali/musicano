import React, { Fragment, useState } from "react";
import CheckoutForm from "../components/Checkout/CheckoutForm/CheckoutForm";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
const CheckOutPage = () => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  console.log(cart);

  const postOrdersHandler = async (data) => {
    const postingOrders = async () => {
      try {
        if (cart.length === 0) {
          throw new Error("Something went wrong");
        }
        const res = await fetch(
          "https://formpractice-cd50a-default-rtdb.firebaseio.com/orders.json",
          {
            method: "POST",
            body: JSON.stringify({ order: cart, shippingDetails: data }),
          }
        );
        if (!res.ok) {
          toast.error("Couldn't Place Order Try again", { theme: "dark" });
          throw new Error(`Something went wrong Error code: ${res.status}`);
        }
        dispatch(cartActions.emptyCart());

        toast.success("Order Placed", { theme: "dark" });
        navigate("/");
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    postingOrders();
  };

  return (
    <Fragment>
      {!error ? <p>Cart Items</p> : <p>Couldn't Place order try again</p>}
      <CheckoutForm postOrders={postOrdersHandler} />
    </Fragment>
  );
};

export default CheckOutPage;
