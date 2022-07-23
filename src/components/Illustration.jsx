import React from "react";
import signup from "../images/signup.svg";
import classes from "../styles/Illustration.module.css";

const Illustration = () => {
  return (
    <div class={classes.illustration}>
      <img src={signup} alt="Signup" />
    </div>
  );
};

export default Illustration;
