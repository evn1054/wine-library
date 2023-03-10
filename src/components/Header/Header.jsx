import React from "react";

import MainLogo from "../UI/MainLogo/MainLogo";
import CustomButton from "../UI/CustomButton/CustomButton";
import CustomHeader from "../UI/CustomHeader/CustomHeader";

import classes from "./Header.module.css";

function Header(props) {
  return (
    <header className="header">
      <div className="header__container">
        <div className="wrapper header__wrapper">
          <MainLogo></MainLogo>
          <CustomButton>Login</CustomButton>
        </div>
      </div>
      <CustomHeader path={props.path} alt={"this is header of site"} />
    </header>
  );
}

export default Header;
