import React from "react";
import styles from "./Button.module.css";
const Button = (props) => {
  return (
    <button className={styles["button-1"]} onClick={props.onClick}>
      {props.purpose}
    </button>
  );
};

export default Button;
