import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="container project">
      <div className="mt-5 mb-5">
        <h1>{project.name}</h1>
      </div>
      <div className="mt-5 mb-5">
        <img src={project.image} alt=''/>
      </div>
      <div className="mt-5 mb-5">
        <h3>
          Skills: <b>{project.skills}</b>
        </h3>
      </div>
      <div className="mt-5 mb-5">
        <p>
          Description: <b>{project.description}</b>
        </p>
      </div>
      <a href={project.link} target="_blank" rel="noreferrer">Site/Repository</a>
    </div>
  );
};

export default ProjectDisplay;
