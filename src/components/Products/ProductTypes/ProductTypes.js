import React, { useEffect, useState, Fragment } from "react";
import styles from "./ProductTypes.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { useNavigate } from "react-router-dom";

// const DUMMY_PRODUCTS = [
//   {
//     model: "P-45",
//     type: "Digital Piano",
//     description:
//       "Includes the P45 Digital Piano, power adapter, sustain pedal, music rest , Juliet Music Piano Cover, Polish Cloth and Key Stickers",
//     quantity: 8,
//     src: "https://m.media-amazon.com/images/I/61CfZbWDbdL._AC_SL1200_.jpg",
//     price: 599.99,
//   },
//   {
//     model: "PX-770",
//     type: "Digital Piano",
//     description:
//       "The AiR engine provides highly-accurate grand piano sounds with seamless dynamics for a remarkably expressive and powerful performance",
//     quantity: 3,
//     src: "https://m.media-amazon.com/images/I/81vEDBL-Y7L._AC_SX679_.jpg",
//     price: 810.99,
//   },
// ];
const DUMMY_TYPE = [
  {
    type: "Guitar",
    src: "https://m.media-amazon.com/images/I/81tQhEEtiEL._AC_SX679_.jpg",
  },
  {
    type: "Piano",
    src: "https://m.media-amazon.com/images/I/617Ipizy-PL._SX425_.jpg",
  },
  {
    type: "Violin",
    src: "https://m.media-amazon.com/images/I/617Ipizy-PL._SX425_.jpg",
  },
  {
    type: "Drums",
    src: "https://m.media-amazon.com/images/I/617Ipizy-PL._SX425_.jpg",
  },
];

const Products = () => {
  const navigate = useNavigate();

  const itemNavigationHandler = (type) => {
    navigate(`/products/${type.toLowerCase()}s`);
  };

  //posting Data With UseEffect

  // useEffect(() => {
  //   const postingData = async () => {
  //     const res = await fetch(
  //       "https://musicano-5a4b7-default-rtdb.firebaseio.com/products/pianos.json",
  //       {
  //         method: "PUT",
  //         body: JSON.stringify(DUMMY_PRODUCTS),
  //       }
  //     );
  //   };
  //   postingData();
  // }, [DUMMY_PRODUCTS]);
  // useEffect(() => {
  //   const fetchingData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const res = await fetch(
  //         "https://formpractice-cd50a-default-rtdb.firebaseio.com/products/guitars.json"
  //       );
  //       console.log(res);
  //       if (!res.ok) {
  //         throw new Error("Something went wrong");
  //       }
  //       const resData = await res.json();
  //       setProducts(resData);
  //     } catch (error) {
  //       setError(true);
  //     }
  //     setIsLoading(false);
  //   };

  //   fetchingData();
  // }, []);

  return (
    <Fragment>
      <h1 className={styles["type-heading"]}>CHECK OUT</h1>
      <div className={styles["type-container"]}>
        {DUMMY_TYPE.map((item) => (
          <div
            className={styles["type-item"]}
            onClick={itemNavigationHandler.bind(null, item.type)}
          >
            <h2>{item.type}</h2>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Products;
