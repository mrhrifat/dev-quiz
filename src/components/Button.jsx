import React from "react";
import classes from '../styles/Button.module.css'

const Button = ({children, className}) => {
  return (
    <div className={classes.button}>
     {children}
    </div>
  );
};

export default Button;
