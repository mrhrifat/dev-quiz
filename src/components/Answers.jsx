import React from "react";
import classes from "../styles/Answers.module.css";
import CheckBox from "./CheckBox";

const Answers = () => {
  return (
    <div className={classes.answers}>
      <CheckBox className={classes.answer} text="Test Answer" />
      <CheckBox className={classes.answer} text="Test Answer" />
    </div>
  );
};

export default Answers;
