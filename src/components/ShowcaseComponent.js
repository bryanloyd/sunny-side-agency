import React from "react";
import HeaderComponent from "./HeaderComponent";
import arrow from "../images/icon-arrow-down.svg";

const ShowcaseComponent = () => {
  return (
    <div className="showcase">
      <HeaderComponent />
      <div className="showcase_content">
        <h1>we are creatives</h1>
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default ShowcaseComponent;
