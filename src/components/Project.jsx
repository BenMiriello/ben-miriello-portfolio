import React from "react";
import Icon from "./Icon";

const Project = ({ selectedSkills, project, handleClickTech }) => {
  const technologies = () => {
    return project.technologies.map((name) => {
      if (selectedSkills.includes(name)) {
        return <Icon name={name} handleClick={handleClickTech} selected inProject />;
      }
      return <Icon name={name} />;
    });
  };

  return (
    <div className="project-card">
      
        <div className="project-image-container hide-before-mobile">
          <div className="project-image-container">
            <img
              className="project-image"
              src={process.env.PUBLIC_URL + `../images/${project.image}.jpg`}
            />
          </div>
        </div>
      <div className="project-details">
          <div className="project-header">
            <h3>{project.name}</h3>
            <Icon github={project.github} />
            <Icon video={project.video} />
          </div>
        <p className="project-description">{project.description}</p>
        <div>{technologies()}</div>
      </div>
    </div>
  );
};

export default Project;
