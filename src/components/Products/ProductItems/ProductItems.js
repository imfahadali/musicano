import ProductItem from "../ProductItem/ProductItem";
import styles from "./ProductItems.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cartSlice";
import dispatchITemToCart from "../../../utils/dispatchITemToCart";
const ProductItems = (props) => {
  const dispatch = useDispatch();
  const addItemToCartHandler = (item) => {
    dispatchITemToCart(dispatch, item);
  };
  const productItems = (
    <div className={styles["product-container"]}>
      {props.products.map((item) => (
        <ProductItem
          key={item.model}
          src={item.src}
          model={item.model}
          price={item.price}
          quantity={item.quantity}
          addItemToCart={addItemToCartHandler.bind(null, item)}
        />
      ))}
    </div>
  );

  return productItems;
};

export default ProductItems;
