import React from "react";
import { FaReact, FaBootstrap, FaFire } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-2 text-center text-light">
      <h3>Powered By</h3>
      <div className="d-flex align-items-center justify-content-evenly">
        <FaReact className="footer-icon react" />
        <FaBootstrap className="footer-icon bs" />
        <FaFire className="footer-icon firebase" />
      </div>
    </div>
  );
};

export default Footer;
