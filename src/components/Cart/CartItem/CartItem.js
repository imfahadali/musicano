import React, { useContext, Fragment } from "react";
import styles from "./CartItem.module.css";
const CartItem = (props) => {
  return (
    <Fragment>
      <div className={styles["cart-item"]}>
        <div className={styles["cart-item-head"]}>
          <p>
            {props.name} <sub>x{props.quantity}</sub>
          </p>
        </div>

        <div className={styles["cart-item-action"]}>
          <button id="decrease" onClick={props.removeItem}>
            -
          </button>

          <input
            type="number"
            value={props.quantity}
            className={styles["cart-item-quantity"]}
            min="0"
            max="99"
            disabled
          />
          <button id="increase" onClick={props.addItem}>
            +
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default CartItem;
