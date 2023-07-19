import React from "react";

import "./about.css";
const About = () => {
  return (
    <div className="about">
      <div className="aboutdiv">
        <div className="aboutl">
          <img className="abmg" 
          src="https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/325764173_906622347361070_5983886307322376710_n.jpg?stp=c0.23.206.206a_cp6_dst-jpg_p206x206&_nc_cat=107&ccb=1-7&_nc_sid=da31f3&_nc_ohc=mBEwhdqfAtIAX_WJ6SK&_nc_ht=scontent.fccu5-1.fna&oh=00_AfCz6GsYsdlK9O-89s4bU-gmA4MhrbKiRMk3f6uEFkClqA&oe=64BCCEC7" alt="" />
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
