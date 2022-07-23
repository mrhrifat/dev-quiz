import React from "react";
import classes from "../styles/Login.module.css";
import Illustration from "./Illustration";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <LoginForm className={classes.login} />
      </div>
    </>
  );
};

export default Login;
