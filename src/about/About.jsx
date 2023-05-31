import React from "react";

import "./about.css";
const About = () => {
  return (
    <div className="about">
      <div className="aboutdiv">
        <div className="aboutl">
          <img className="abmg" src="https://images.pexels.com/photos/15843944/pexels-photo-15843944/free-photo-of-photo-of-a-young-woman-standing-in-the-yard.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" />
        </div>
        <div className="aboutr">
          {/* <h3>About me</h3> */}
          <h2>A dedicated <span> Front-end Developer</span> based in Kolkata, India 📍</h2>
          <p>
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
