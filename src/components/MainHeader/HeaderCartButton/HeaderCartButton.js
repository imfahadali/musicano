import React from "react";
import styles from "./HeaderCartButton.module.css";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const HeaderCartButton = (props) => {
  const cart = useSelector((state) => state.cart);
  const clickHandler = () => {
    props.onShowCart();
    props.onClick();
  };
  return (
    <button className={styles.button} onClick={clickHandler}>
      <section>
        <BsFillCartFill />
        <p>Cart</p>
        <sub className={cart.length ? styles["header-cart-badge"] : styles[""]}>
          {cart.length > 0 && cart.length}
        </sub>
      </section>
    </button>
  );
};

export default HeaderCartButton;
