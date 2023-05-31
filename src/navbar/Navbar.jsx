import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import './navbar.css'
// import LightModeIcon from '@mui/icons-material/LightMode';
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="left">madhu</div>
        <div className="right">
          <ul className="navlist">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
            <DarkModeIcon/>
            {/* <LightModeIcon/> */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar