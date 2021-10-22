import React from "react";
import footerlogo from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import pinterest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";

const FooterComponent = () => {
  return (
    <>
      <div className="footer">
        <img
          src={footerlogo}
          style={{ fill: "#2c7566" }}
          alt=""
          className="footer_logo"
        />
        <ul className="footer_links">
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>
        <div className="footer_social">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={pinterest} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
