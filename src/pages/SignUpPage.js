import React, { Fragment, useContext, useState } from "react";
import SignUp from "../components/Auth/SignUp";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authContext } from "../store/auth-context";
const SignUpPage = () => {
  const navigate = useNavigate();
  const authCtxt = useContext(authContext);

  const signUp = (data) => {
    console.log("Signing Up on firebase");
    console.log(data);
    const signingup = async () => {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB9CHkQH96DYTtsH8hjoaC0k0XlOimEOzM",
        {
          method: "POST",
          body: JSON.stringify({
            email: data.email,
            password: data.password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        toast.error("Could't sign up");
        throw new Error(`An error has occured: ${res.status}`);
      }
      toast.success("Account Made Successfully");
      return await res.json();
    };
    signingup().then((r) => {
      authCtxt.login(r.idToken);
      navigate("/");
    });
  };
  return (
    <Fragment>
      <ToastContainer />
      <SignUp submitForm={signUp}></SignUp>
    </Fragment>
  );
};

export default SignUpPage;
