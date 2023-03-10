import React from "react";

import CustomInput from "../UI/CustomInput/CustomInput";
import WineItem from "../UI/WineItem/WineItem";

import classes from "./Main.module.css";

function Main(props) {
  return (
    <>
      <div className={classes.search__panel}>
        <CustomInput placeholder={"search"} />
      </div>

      {props.wines && (
        <ul className={classes.wines__panel}>
          {[...Object.values(props.wines)].map((item) => (
            <li key={item.id} className={classes.list}>
              <WineItem src={item.image} id={item.id} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Main;
