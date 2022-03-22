import React, { useState } from "react";
import Modal from "../../UI/Modal/Modal";
import { useNavigate } from "react-router-dom";
import styles from "./Cart.module.css";
import CartItem from "../CartItem/CartItem";
import { cartActions } from "../../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
const Cart = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const addItemHandler = (item) => {
    dispatch(cartActions.addItem(item));
  };
  const removeItemHandler = (id) => {
    dispatch(cartActions.removeItem(id));
  };
  const removeAllHandler = (id) => {
    dispatch(cartActions.removeAll(id));
  };

  const cartItems = cart.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.title}
      quantity={item.quantity}
      addItem={addItemHandler.bind(null, item)}
      removeItem={removeItemHandler.bind(null, item.id)}
      removeAll={removeAllHandler.bind(null, item.id)}
    />
  ));

  return (
    <Modal>
      {cart.length === 0 && <h2>CART IS EMPTY</h2>}

      <div className={styles["order-action"]}>
        <button onClick={props.toggleCart}>Close</button>
        <button
          onClick={() => {
            props.toggleCart();
            navigate("/checkout");
          }}
        >
          Checkout
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
