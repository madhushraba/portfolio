import React, { useEffect, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import "./navbar.css";
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
          <ul className="navlist">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
            {/* <DarkModeIcon/> */}
            <button className="toggle" onClick={toggler}>
              {darkicon}
            </button>
            {/* <LightModeIcon/> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
