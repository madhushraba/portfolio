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
            src="https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/301606477_1391625491363107_1353372446152285278_n.jpg?stp=c0.36.206.206a_dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=da31f3&_nc_ohc=U-fza50n8FAAX8teCkE&_nc_ht=scontent.fccu5-1.fna&oh=00_AfBQchLOPBG0dYN-WEKKDExjq59qHhWhcoNOAsfCbS79eg&oe=64BC7509"
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
