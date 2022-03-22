import React, { Fragment, useEffect, useState, useContext } from "react";

import { useParams, Route, Routes, Outlet } from "react-router-dom";

import { Bars } from "react-loader-spinner";
import ProductItems from "../components/Products/ProductItems/ProductItems";
import useFetchProducts from "../hooks/useFetchProducts";
import ProductDetail from "../components/Products/ProductDetail/ProductDetail";

const ProductsPage = () => {
  // dummy products to post
  // const DUMMY_PRODUCTS = [
  //     {
  //       model: "F310",
  //       type: "Acoustic Guitar",
  //       description:
  //         "The perfect package for beginers with everything you need to get started",
  //       quantity: 10,
  //       src: "https://m.media-amazon.com/images/I/71lWjvf2CeL._AC_SL1500_.jpg",
  //     },
  //     {
  //       model: "S800",
  //       type: "Electric Guitar",
  //       description:
  //         "The GTRS Standard 800 model features an American basswood body, roasted maple neck, and a rosewood fingerboard that feels great in the hand and provides all of the functionality of a normal guitar.",
  //       quantity: 9,
  //       src: "https://m.media-amazon.com/images/I/61K1gxBNGML._AC_SL1500_.jpg",
  //     },
  //     // {
  //     //   id: "m3",
  //     //   name: "Digital Piano",
  //     //   description:
  //     //     "A digital piano is a type of electronic keyboard instrument designed to serve primarily as an alternative to the traditional acoustic piano, both in the way it feels to play and in the sound produced.",
  //     //   quantity: 8,
  //     //   src: "https://static-01.daraz.pk/p/429907c4eb1d4aa58920f03d445999f7.jpg",
  //     // },
  //     // {
  //     //   id: "m4",
  //     //   name: "Violin",
  //     //   description:
  //     //     "The violin, sometimes known as a fiddle, is a wooden chordophone in the violin family. Most violins have a hollow wooden body. ",

  //     //   quantity: 7,
  //     //   src: "https://img.kytary.com/eshop_ie/velky_v2/na/637402736217130000/7df76773/64796726/gewa-allegro-violin-set-3-4.jpg ",
  //     // },
  //   ];

  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(false);
  // const [products, setProducts] = useState([]);

  const { type, "*": id } = useParams();

  const { isLoading, error, products } = useFetchProducts(type);

  return (
    <Fragment>
      <Routes>
        <Route
          index
          element={
            isLoading ? (
              <Bars color="#000" width={50} height={50} />
            ) : (
              <ProductItems products={products}></ProductItems>
            )
          }
        />

        <Route
          path=":id"
          element={
            products &&
            products.length && <ProductDetail products={products} id={id} />
          }
        />
      </Routes>
    </Fragment>
  );
};

export default ProductsPage;
