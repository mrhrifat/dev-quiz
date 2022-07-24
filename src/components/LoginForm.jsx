import React from "react";
import classes from "../styles/Form.module.css";
import Button from "./Button";
import TextInput from "./TextInput";

const LoginForm = ({ className, children, ...rest }) => {
  return (
    <form className={`${className} ${classes.form}`} action="#">
      <TextInput
        placeholder="Enter email"
        type="email"
        icon="alternate_email"
      />
      <TextInput placeholder="Enter password" type="password" icon="lock" />
      <Button>
        <span>Login</span>
      </Button>
      <div className={classes.info}>
        Don't have an account? <a href="signup.html">Signup</a> instead.
      </div>
    </form>
  );
};

export default LoginForm;
