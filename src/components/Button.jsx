import React from "react";
import classes from "../styles/Button.module.css";

const Button = ({ children, className }) => {
  return <button className={classes.button}>{children}</button>;
};

export default Button;
