import React from "react";
import classes from "./CustomHeader.module.css";

function CustomHeader(props) {
  return (
    <img src={props.path} alt={props.alt} className={classes.header__poster} />
  );
}

export default CustomHeader;
