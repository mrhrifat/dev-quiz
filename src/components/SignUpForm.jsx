import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/Form.module.css";
import Button from "./Button";
import CheckBox from "./CheckBox";
import TextInput from "./TextInput";

const Form = ({ children, className, ...rest }) => {
  return (
    <form className={`${className} ${classes.form}`} action="#" {...rest}>
      <TextInput placeholder="Enter name" type="text" icon="person" />
      <TextInput
        placeholder="Enter email"
        type="email"
        icon="alternate_email"
      />
      <TextInput placeholder="Enter password" type="password" icon="lock" />
      <TextInput
        placeholder="Confirm password"
        type="password"
        icon="lock_clock"
      />
      <CheckBox text="I agree to the Terms &amp; Conditions" />
      <Button>
        <span>Submit now</span>
      </Button>
      <div className={classes.info}>
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </form>
  );
};

export default Form;
