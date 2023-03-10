import React from "react";
import classes from "./MainLogo.module.css";

function MainLogo(props) {
  return (
    <a href="#" className={classes.site__name}>
      <h1>Wines for you</h1>
    </a>
  );
}

export default MainLogo;
