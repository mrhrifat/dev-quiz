import React from "react";
import signup from "../images/signup.svg";
import classes from "../styles/Signup.module.css";
import Illustration from "./Illustration";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration illustration={signup} />
        <SignUpForm className={`${classes.signup}`} />
      </div>
    </>
  );
};

export default SignUp;
