import React from "react";
import "./project.css";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "../data/data";
import { Link, useNavigate } from "react-router-dom";

function Project() {
  const nav = useNavigate();
  const red = () => {
    nav("/allpro");
    console.log('bhgvfd');
    // alert('nhbgvfcdx')
  };
  const data = ProjectData;
  return (
    <div className="projects">
      {/* <Separator /> */}
      <label className="section-title">Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>

      {/* <Link to="/allprojects"> */}

      <button className="btnpro" onClick={red}>
        More projects...
      </button>
      {/* </Link> */}
    </div>
  );
}

export default Project;
