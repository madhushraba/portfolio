import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./contact.css";
import SendIcon from "@mui/icons-material/Send";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
const Contact = () => {
  const [msg, setmsg] = useState(" ");
  const handsub = () => {
    alert("ytgf");
    setmsg(" ");
  };
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
          <div className="i">
            <MarkEmailReadIcon />
          </div>
          <div className="sub">
            <div className="subup">
              <input className="inp" type="text" />
              <button className="conbtn" onClick={handsub}>
                <SendIcon /> Send
              </button>
            </div>
            <div className="subbtm">@madhushraba21das@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
