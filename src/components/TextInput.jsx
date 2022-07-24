import React from "react";
import classes from "../styles/TextInput.module.css";

const TextInput = ({ icon, ...props }) => {
  return (
    <div className={classes.textInput}>
      <input {...props} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
};

export default TextInput;
