import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import CartSummaryItem from "../CartSummaryItem/CartSummaryItem";
import styles from "./CartSummary.module.css";
const CartSummary = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  let totalPrice = 0;
  return (
    <Fragment>
      <div className={styles["cart-summary-container"]}>
        {cart.map((item) => {
          totalPrice += item.price * item.quantity;
          return (
            <CartSummaryItem
              src={item.src}
              price={item.price}
              model={item.model}
              quantity={item.quantity}
            />
          );
        })}
        <div className={styles["cart-summary-price"]}>
          <p>Total</p>
          <h4>${totalPrice.toFixed(2)}</h4>
        </div>
      </div>
    </Fragment>
  );
};

export default CartSummary;
