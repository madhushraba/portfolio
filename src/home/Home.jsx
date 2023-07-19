import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="hometop">
        <div className="homeleft">
          <h1 className="h1">FRONTEND REACTJS DEVELOPER</h1>
          <p className="p">
            Hi i am <span> Madhushraba Das</span> i am a passionate frontend
            developer based on Kolkata.
          </p>
          <div className="giticons">
            <GitHubIcon />
            <LinkedInIcon />
          </div>
        </div>
        <div className="homeright">
          <img
            className="img"
            src="https://images.pexels.com/photos/15795162/pexels-photo-15795162/free-photo-of-woman-sitting-at-the-table-full-of-candles.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
        </div>
      </div>
      <div className="techstack">
        <div className="techl">Tech Stacks:</div>
        <hr />
        <div className="techr">
          <div className="techskill">HTML</div>
          <div className="techskill">CSS</div>
          <div className="techskill">Javascript</div>
          <div className="techskill">React</div>
          <div className="techskill">Redux</div>
          <div className="techskill">Taillwind</div>
          <div className="techskill">Next</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
