import React, { Fragment } from "react";
import styles from "./CartSummaryItem.module.css";
const CartSummaryItem = (props) => {
  const totalItemPrice = (props.price * props.quantity).toFixed(2);
  return (
    <Fragment>
      <div className={styles["cart-summary-item"]}>
        <span>
          <img src={`${props.src}`} />
          <sup>x{props.quantity}</sup>
        </span>

        <p>{props.model}</p>
        <h6>${totalItemPrice}</h6>
      </div>
    </Fragment>
  );
};

export default CartSummaryItem;
