import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductItemDetail.module.css";

const ProductItemDetail = (props) => {
  const param = useParams();
  const clickHandler = () => {
    props.addItemToCart();
  };
  return (
    <div className={styles["product-detail-container"]}>
      <div className={styles["product-detail-item"]}>
        <img src={props.src} className={styles["product-detail-image"]} />
      </div>
      <div className={styles["product-detail-item"]}>
        <div className={styles["product-heading-wrapper"]}>
          <h4 className={styles["product-detail-heading"]}>{props.model}</h4>
          <h5 className={styles["product-detail-heading"]}>${props.price}</h5>
        </div>
        <h6>{props.quantity !== 0 ? "IN-STOCK" : "OUT OF STOCK"}</h6>
        <h6>About this item</h6>
        <ul>
          <li>{props.description}</li>
        </ul>
        <button disabled={!props.quantity} onClick={clickHandler}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItemDetail;
