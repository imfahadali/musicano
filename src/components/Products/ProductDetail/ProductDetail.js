import React from "react";
import { useDispatch } from "react-redux";
import ProductItemDetail from "../ProductItemDetail/ProductItemDetail";
import dispatchITemToCart from "../../../utils/dispatchITemToCart";
const ProductDetail = ({ products, id }) => {
  const dispatch = useDispatch();
  const addItemToCartHandler = (item) => {
    dispatchITemToCart(dispatch, item);
  };

  const productItemDetail = products.map((item) => {
    if (item.model === id) {
      return (
        <ProductItemDetail
          src={item.src}
          model={item.model}
          price={item.price}
          description={item.description}
          quantity={item.quantity}
          addItemToCart={addItemToCartHandler.bind(null, item)}
        />
      );
    }
  });

  return productItemDetail;
};

export default ProductDetail;
