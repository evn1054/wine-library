import React from "react";
import classes from "./CustomInput.module.css";

function CustomInput(props) {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      className={classes.search__input}
    />
  );
}

export default CustomInput;
