import React from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="fooleft">Copyright © 2023. All rights are reserved</div>
      <div className="fooright">
        <a href="https://github.com/madhushraba">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/madhushraba-das-703664190/">
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
};

export default Footer;
