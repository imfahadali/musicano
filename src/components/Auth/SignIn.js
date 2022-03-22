import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { validateOnSignIn } from "./utils";
import styles from "./Form.module.css";
const SignIn = ({ submitForm }) => {
  const { changeHandler, values, submitHandler, errors } = useForm(
    submitForm,
    validateOnSignIn
  );

  return (
    <div className={styles["signin-container"]}>
      <h1>Sign In</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={changeHandler}
          value={values.email}
        />
        {errors && <p className={styles.error}>{errors.email}</p>}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={changeHandler}
        />
        {errors && <p className={styles.error}>{errors.password}</p>}

        <button>Login</button>
        <div>
          Create an Account <Link to="/signup">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
