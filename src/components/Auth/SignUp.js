import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import styles from "./Form.module.css";
import { validateOnSignUp } from "./utils";

const SignUp = ({ submitForm }) => {
  const { changeHandler, values, submitHandler, errors } = useForm(
    submitForm,
    validateOnSignUp
  );

  return (
    <Fragment>
      <div className={styles["signin-container"]}>
        <h1>Sign Up</h1>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="usernmae"
            name="username"
            value={values.username}
            onChange={changeHandler}
          />
          {errors.username && <p className={styles.error}>{errors.username}</p>}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            values={values.email}
            onChange={changeHandler}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            values={values.password}
            onChange={changeHandler}
          />
          {errors.password && <p className={styles.error}>{errors.password}</p>}

          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            id="password2"
            name="password2"
            values={values.password2}
            onChange={changeHandler}
          />
          {errors.password2 && (
            <p className={styles.error}>{errors.password2}</p>
          )}

          <button>Signup</button>
          <span>
            Already Have an account <Link to="/signin">Sign In</Link>
          </span>
        </form>
      </div>
    </Fragment>
  );
};

export default SignUp;
