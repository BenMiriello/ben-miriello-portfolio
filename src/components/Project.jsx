import React from "react";
import Icon from "./Icon";

const Project = ({ selectedSkills, project, handleClickSkill }) => {
  const technologies = () => {
    return project.technologies.map((name) => {
      if (selectedSkills.includes(name)) {
        return (
          <Icon iconName={name} onClick={handleClickSkill} selected inProject />
        );
      }
      return <Icon iconName={name} />;
    });
  };

  return (
    <div className="project-card">
      <a href={project.github} target="_blank" >
        <div className="project-image-container hide-before-mobile">
          <div className="project-image-container">
            <a href={project.github} target="_blank" >
              <img
                className="project-image"
                src={process.env.PUBLIC_URL + `../images/${project.image}.jpg`}
              />
            </a>
          </div>
        </div>
      </a>
      <a href={project.github} target="_blank" >
        <div className="project-details">
        <a href={project.github} target="_blank" ><h3>{project.name}</h3></a>
          <p className="project-description">{project.description}</p>
          <div>{technologies()}</div>
        </div>
      </a>
    </div>
  );
};

export default Project;
