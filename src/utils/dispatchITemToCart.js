import { cartActions } from "../store/cartSlice";
import { toast } from "react-toastify";
const dispatchITemToCart = (dispatch, item) => {
  dispatch(
    cartActions.addItem({
      id: item.model,
      title: item.model,
      description: item.description,
      quantity: 1,
      price: item.price,
      src: item.src,
    })
  );
  toast.success("Item Added");
};

export default dispatchITemToCart;
