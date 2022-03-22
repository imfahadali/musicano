import React, { Fragment, useContext } from "react";
import SignIn from "../components/Auth/SignIn";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { authContext } from "../store/auth-context";

const SignInPage = () => {
  const navigate = useNavigate();
  const authCtxt = useContext(authContext);
  const signIn = (data) => {
    console.log(data);
    const signingin = async () => {
      try {
        const res = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB9CHkQH96DYTtsH8hjoaC0k0XlOimEOzM",
          {
            method: "POST",
            body: JSON.stringify({
              email: data.email,
              password: data.password,
              returnSecureToken: true,
            }),
          }
        );
        if (!res.ok) {
          toast.error("Couldn't Sign in");
          throw new Error(`An error has occured: ${res.status}`);
        }

        toast.success("Signed In");
        return await res.json();
      } catch (err) {
        console.log(err);
      }
    };

    signingin().then((r) => {
      console.log(r);
      authCtxt.login(r.idToken);
      navigate("/");
    });
  };
  return (
    <Fragment>
      <SignIn submitForm={signIn} />
    </Fragment>
  );
};

export default SignInPage;
