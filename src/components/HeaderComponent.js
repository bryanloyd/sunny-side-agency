import React from "react";
import logo from "../images/logo.svg";
import nav from "../images/icon-hamburger.svg";

const HeaderComponent = () => {
  return (
    <>
      <div className="header">
        <div className="header_logo">
          <img src={logo} alt="" />
        </div>
        <div className="header_nav">
          <img src={nav} alt="" />
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
