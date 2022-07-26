import React from "react";

import classes from "../styles/Illustration.module.css";

const Illustration = ({ illustration }) => {
  return (
    <div className={classes.illustration}>
      <img src={illustration} alt={illustration} />
    </div>
  );
};

export default Illustration;
