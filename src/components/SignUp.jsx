import React from "react";
import Form from "./Form";
import Illustration from "./Illustration";
import classes from '../styles/Signup.module.css'

const SignUp = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${classes.signup}`} />
      </div>
    </>
  );
};

export default SignUp;
