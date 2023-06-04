import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./contact.css";
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
const Contact = () => {
  return (
    <div className="contact">
      <h1>Lets get in touch!!</h1>
      <h2>React Out to me❤️❤️</h2>
      <div className="cont">
        <div className="contl">
          {/* import LocationOnIcon from '@mui/icons-material/LocationOn'; */}
          {/* import LocationOnIcon from '@mui/icons-material/LocationOn'; */}
          <LocationOnIcon />
          kolkata, india
        </div>
        <div className="contr">
          <MarkEmailReadIcon/>
          @madhushraba21das@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Contact;
