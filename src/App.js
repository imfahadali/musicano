import React, { useState } from "react";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./store/AuthProvider";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./components/Cart/Cart/Cart";

import MainHeader from "./components/MainHeader/NavBar/MainHeader";
import ProductsPage from "./pages/ProductsPage";
import CheckOutPage from "./pages/CheckOutPage";
import { Provider } from "react-redux";
import store from "./store/reduxStore";

const App = () => {
  const [cartIsShowing, setCartIsShowing] = useState(false);
  const toggleCartHandler = () => {
    setCartIsShowing((prevState) => !prevState);
  };
  return (
    <AuthProvider>
      <Provider store={store}>
        <ToastContainer />

        {cartIsShowing && <Cart toggleCart={toggleCartHandler} />}
        <MainHeader toggleCart={toggleCartHandler} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:type/*" element={<ProductsPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />

          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Provider>
    </AuthProvider>
  );
};

export default App;
