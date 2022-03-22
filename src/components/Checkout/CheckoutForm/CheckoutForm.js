import React, { Fragment } from "react";
import { validateOnCheckout } from "../utils";
import useForm from "../../../hooks/useForm";
import styles from "./CheckoutForm.module.css";
import { useSelector } from "react-redux";
import CartSummary from "../CartSummary/CartSummary";
const CheckoutForm = ({ postOrders }) => {
  const { changeHandler, submitHandler, values, errors } = useForm(
    postOrders,
    validateOnCheckout
  );
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <Fragment>
      <div className={styles["checkout-form-container"]}>
        <div className={styles["checkout-form-item"]}>
          <h2>Shipping Details</h2>
          <form onSubmit={submitHandler}>
            <div className={styles["inline-wrapper"]}>
              <div className={styles["inline-detail"]}>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="First name"
                  onChange={changeHandler}
                  value={values.firstname}
                />
                {errors && <p className={styles.error}>{errors.firstname}</p>}
              </div>
              <div className={styles["inline-detail"]}>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Last name"
                  onChange={changeHandler}
                  value={values.lastname}
                />
                {errors && <p className={styles.error}>{errors.lastname}</p>}
              </div>
            </div>

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={changeHandler}
              value={values.email}
            />
            {errors && <p className={styles.error}>{errors.email}</p>}

            <input
              type="number"
              name="phonenumber"
              id="phonenumber"
              placeholder="Phone number"
              onChange={changeHandler}
              value={values.phonenumber}
            />
            {errors && <p className={styles.error}>{errors.phonenumber}</p>}

            <textarea
              name="address"
              id="address"
              placeholder="Address"
              onChange={changeHandler}
              value={values.address}
            />
            {errors && <p className={styles.error}>{errors.address}</p>}
            <input
              type="text"
              name="city"
              id="city"
              onChange={changeHandler}
              placeholder="City"
              value={values.city}
            />
            {errors && <p className={styles.error}>{errors.city}</p>}
            <div className={styles["inline-wrapper"]}>
              <div className={styles["inline-detail"]}>
                <input
                  type="text"
                  name="state"
                  id="state"
                  onChange={changeHandler}
                  placeholder="State"
                  value={values.state}
                />

                {errors && <p className={styles.error}>{errors.state}</p>}
              </div>
              <div className={styles["inline-detail"]}>
                <input
                  type="number"
                  name="zipcode"
                  id="zipcode"
                  placeholder="Zip Code"
                  onChange={changeHandler}
                  value={values.zipcode}
                />
                {errors && <p className={styles.error}>{errors.zipcode}</p>}
              </div>
            </div>

            <button>Place Order</button>
          </form>
        </div>
        <div className={styles["checkout-form-item"]}>
          <CartSummary />
        </div>
      </div>
    </Fragment>
  );
};

export default CheckoutForm;
