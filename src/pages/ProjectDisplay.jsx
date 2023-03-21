import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">

      <h1>{project.name}</h1>
      <img src={project.image} alt=''/>
      <p>
        Skills: <b>{project.skills}</b>
      </p>
      <a href={project.link} target="_blank" rel="noreferrer">Live Site</a>
      <br></br>
      <GitHubIcon />
    </div>
  );
};

export default ProjectDisplay;
