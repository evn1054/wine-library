import React from "react";
import cn from "classnames";

import classes from "./WineItem.module.css";
import favoritesLabel from "../../../fonts/icomoon/style.module.css";

function WineItem(props) {
  console.log(props);
  return (
    <div className={classes.wine__item}>
      <span
        className={cn(classes.favorites, favoritesLabel.icon_add__favorites)} // favoritesLabel.icon_add__favorites
      />

      <div className={classes.wine__poster}>
        <img src={props.src} alt={props.id} className={classes.poster__img} />
      </div>
    </div>
  );
}

export default WineItem;
