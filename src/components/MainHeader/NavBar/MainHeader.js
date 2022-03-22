import React, { useContext, useState } from "react";
import styles from "./MainHeader.module.css";
import { Link } from "react-router-dom";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
import { authContext } from "../../../store/auth-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGuitar, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const MainHeader = (props) => {
  const [clicked, setClicked] = useState(false);
  const authCtxt = useContext(authContext);
  const isLoggedIn = authCtxt.isLoggedIn;

  const showCartHandler = () => {
    props.toggleCart();
  };

  const clickHandler = () => {
    setClicked((prevState) => !clicked);
  };
  const closeMobileMenuHandler = () => {
    setClicked(false);
  };

  return (
    <div className={styles["nav-container"]}>
      <div className={styles["nav-item"]}>
        <Link
          to="/"
          className={styles["nav-icon"]}
          onClick={closeMobileMenuHandler}
        >
          <FontAwesomeIcon icon={faGuitar} />
        </Link>
      </div>

      <div
        className={clicked ? styles["navbar-menu-active"] : styles["nav-item"]}
      >
        <Link
          to="/"
          className={styles["nav-link"]}
          onClick={closeMobileMenuHandler}
        >
          Home
        </Link>

        {!isLoggedIn && (
          <Link
            to="/signin"
            className={styles["nav-link"]}
            onClick={closeMobileMenuHandler}
          >
            SignIn
          </Link>
        )}

        <Link
          to="/signup"
          className={styles["nav-link"]}
          onClick={closeMobileMenuHandler}
        >
          SignUp
        </Link>

        {isLoggedIn && (
          <button onClick={authCtxt.logout} className={styles["nav-button"]}>
            Logout
          </button>
        )}

        <HeaderCartButton
          onShowCart={showCartHandler}
          onClick={closeMobileMenuHandler}
        />
      </div>
      <div className={styles["navbar-toggle-icons"]}>
        <FontAwesomeIcon
          icon={clicked ? faXmark : faBars}
          onClick={clickHandler}
        />
      </div>
    </div>
  );
};

export default MainHeader;
