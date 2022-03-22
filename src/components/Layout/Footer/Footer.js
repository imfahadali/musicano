import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";

const Footer = () => {
  const clickHandler = () => {
    console.log("Clicked");
  };
  return (
    <div className={styles["footer-container"]}>
      <section className={styles["footer-subscription"]}>
        <h3 className="footer-subscription-heading">
          Join the family to receive the best deals
        </h3>
        <p className="footer-subscription-text">
          You can unsubscribe at any time
        </p>
        <div className={styles["footer-input-areas"]}>
          <form>
            <input
              type="text"
              placeholder="Your Email"
              className={styles["footer-input"]}
            />
            <button onClick={clickHandler}>Subscribe</button>
          </form>
        </div>
      </section>
      <div className={styles["footer-links-area"]}>
        <div className={styles["footer-wrapper"]}>
          <div className={styles["footer-item"]}>
            <h6>Support</h6>
            <Link to="/" className={styles["footer-link"]}>
              Product Support
            </Link>
            <Link to="/" className={styles["footer-link"]}>
              Your Account
            </Link>
            <Link to="/" className={styles["footer-link"]}>
              Musicano Community
            </Link>
          </div>

          <div className={styles["footer-item"]}>
            <h6>About Us</h6>
            <Link to="/" className={styles["footer-link"]}>
              How it works
            </Link>
            <Link to="/" className={styles["footer-link"]}>
              Terms of Services
            </Link>
            <Link to="/" className={styles["footer-link"]}>
              Who are we
            </Link>
          </div>
          <div className={styles["footer-item"]}>
            <h6>Contact Us</h6>
            <Link to="/" className={styles["footer-link"]}>
              Contact
            </Link>
            <Link to="/" className={styles["footer-link"]}>
              Support
            </Link>
            <Link to="/" className={styles["footer-link"]}>
              Purchase
            </Link>
          </div>
        </div>
      </div>
      <section className={styles["footer-social"]}>
        <div className={styles["footer-social-container"]}>
          <div className={styles["footer-links-wrapper"]}>
            <Link to="/" className={styles["footer-social-link"]}>
              <Facebook />
            </Link>
            <Link to="/" className={styles["footer-social-link"]}>
              <Instagram />
            </Link>
            <Link to="/" className={styles["footer-social-link"]}>
              <Twitter />
            </Link>
          </div>
          <small>MUSICANO © 2022</small>
        </div>
      </section>
    </div>
  );
};

export default Footer;
