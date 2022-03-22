import React, { Fragment } from "react";
import styles from "./Welcome.module.css";
const Welcome = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>M U S I C A N O</h1>
          <p>Adds the Melody in your noisy life</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Welcome;
