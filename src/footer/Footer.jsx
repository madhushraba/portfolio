import React from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="fooleft">Copyright © 2023. All rights are reserved</div>
      <div className="fooright">
        <GitHubIcon />
        <LinkedInIcon />
      </div>
    </div>
  );
};

export default Footer;
