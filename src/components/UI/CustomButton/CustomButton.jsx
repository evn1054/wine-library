import React from "react";
import classes from "./CustomButton.module.css";

function CustomButton(props) {
  return (
    <button className={classes.button} {...props}>
      {props.children}
    </button>
  );
}

export default CustomButton;
