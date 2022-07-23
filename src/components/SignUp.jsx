import React from "react";
import classes from "../styles/Signup.module.css";
import Illustration from "./Illustration";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <SignUpForm className={`${classes.signup}`} />
      </div>
    </>
  );
};

export default SignUp;
