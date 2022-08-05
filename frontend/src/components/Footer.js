import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <h3>
        <a href="https://www.techncodetools.com">TechnCodeTools</a> All Rights
        Reserved @ {new Date().getFullYear()}
      </h3>
    </div>
  );
};

export default Footer;
