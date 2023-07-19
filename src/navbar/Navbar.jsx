import React, { useEffect, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import "./navbar.css";
import { links } from "./link";
import LightModeIcon from "@mui/icons-material/LightMode";
const Navbar = () => {
  const [darkicon, setdarkicon] = useState(<DarkModeIcon />);
  // const [first, setfirst] = useState(second)
  // darkmode code
  const [mode, setmode] = useState("light-mode");

  useEffect(() => {
    document.documentElement.className = mode; ///imp
    localStorage.setItem("mode", mode);
  }, [mode]);

  const toggler = () => {
    if (mode === "light-mode") {
      setmode("dark-mode");
      setdarkicon(<LightModeIcon />);
    } else {
      setmode("light-mode");
      setdarkicon(<DarkModeIcon />);
    }
  };
  return (
    <div>
      <div className="navbar">
        <div className="navleft">Madhushraba.dev</div>
        <div className="navright">
         
          <div className="navlist">
          {links.map((link)=>{
            return <a href={link.url} key={link.id}>
              {link.text}
            </a>
          })}
          </div>
          <button className="toggle" onClick={toggler}>
              {darkicon}
            </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
