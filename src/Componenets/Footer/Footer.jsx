import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
const Footer = (prop) => {
  console.log(prop);
  return (
    <div className="footerMenu">
      <Link to="/" className={prop?.homeActive ? "activeMenu" : ""}>
        Home
      </Link>
      <Link to="/About" className={prop?.aboutUs ? "activeMenu" : ""}>
        About Us
      </Link>
      {/* <Link to="#">Contact Us</Link> */}
      <Link to="#" style={{ marginLeft: "auto" }}>
        <FaGithub />
      </Link>
    </div>
  );
};

export default Footer;
