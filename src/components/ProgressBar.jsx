import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/ProgressBar.module.css";
import Button from "./Button";

const ProgressBar = () => {
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>24% Cimplete!</div>
        <div className={classes.rangeBody}>
          <div className={classes.progress} style={{ width: "20%" }}></div>
        </div>
      </div>
      <Link to="/result">
        <Button className={`${classes.button} ${classes.next}`}>
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </Link>
    </div>
  );
};

export default ProgressBar;
