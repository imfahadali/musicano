import React, { useContext, useState, Fragment } from "react";
import Welcome from "../components/Layout/Welcome/Welcome";
import ProductTypes from "../components/Products/ProductTypes/ProductTypes";

import Footer from "../components/Layout/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Welcome />
      <ProductTypes />
      <Footer />
    </Fragment>
  );
};

export default Home;
