import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ProductItem.module.css";

const ProductItem = (props) => {
  const clickHandler = () => {
    props.addItemToCart();
  };
  return (
    <Fragment>
      <div className={styles["product-item"]}>
        <Link to={props.model} className={styles["product-link"]}>
          <img src={props.src} className={styles["product-image"]} />
          <h5 className={styles["product-model"]}>{props.model}</h5>
          <p className={styles["product-price"]}>${props.price}</p>
        </Link>
        {!!props.quantity && (
          <button
            disabled={!props.quantity}
            onClick={clickHandler}
            className={styles["add-button"]}
          >
            Add To Cart
          </button>
        )}
      </div>

      <Outlet />
    </Fragment>
  );
};
export default ProductItem;
