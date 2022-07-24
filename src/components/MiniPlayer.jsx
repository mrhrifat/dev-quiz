import React from "react";
import image from "../images/3.jpg";
import classes from "../styles/MiniPlayer.module.css";

const MiniPlayer = () => {
  return (
    <div className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
      <span className={`material-icons-outlined ${classes.open}`}>
        play_circle_filled
      </span>
      <span className={`material-icons-outlined ${classes.close}`}>close</span>
      <img src={image} alt={image} />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
};

export default MiniPlayer;
