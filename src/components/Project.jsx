import React from "react";
import Icon from "./Icon";

const Project = ({ selectedSkills, project, handleClickTech }) => {
  const technologies = () => {
    return project.technologies.map((name) => {
      if (selectedSkills.includes(name)) {
        // console.log(handleClick)
        return <Icon name={name} handleClick={handleClickTech} selected inProject />;
      }
      return <Icon name={name} />;
    });
  };

  return (
    <div className="project-card">
      <a href={project.github} target="_blank">
        <div className="project-image-container hide-before-mobile">
          <div className="project-image-container">
            <img
              className="project-image"
              src={process.env.PUBLIC_URL + `../images/${project.image}.jpg`}
            />
          </div>
        </div>
      </a>
      <div className="project-details">
        <a href={project.github} target="_blank">
          <h3>{project.name}</h3>
        </a>
        <p className="project-description">{project.description}</p>
        <div>{technologies()}</div>
      </div>
    </div>
  );
};

export default Project;
