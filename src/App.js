import React, { useState } from "react";
import Headline from "./components/Headline";
import Section from "./components/Section";
import Skill from "./components/Skill";
import Project from "./components/Project";
import content from "./content";

const App = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleClickSkill = (clicked) => {
    if (selectedSkills.includes(clicked)) {
      const idx = selectedSkills.indexOf(clicked);
      if (idx >= 0) {
        let temp = [...selectedSkills];
        temp.splice(idx, 1);
        setSelectedSkills(temp);
      }
    } else {
      setSelectedSkills([...selectedSkills, clicked]);
    }
  };

  const projects = () => {
    const projects = [...content.projects];

    // add matches values to projects
    projects.forEach((project) => {
      project.matches = 0;
      selectedSkills.forEach((skill) => {
        if (project.technologies.includes(skill)) {
          project.matches++;
        }
      });
    });

    // sort by number of matches
    projects.sort((a, b) => b.matches - a.matches);

    // sort by priority
    projects.sort((a, b) => {
      if (a.matches === b.matches) {
        return a.priority - b.priority;
      }
    });

    return projects;
  };

  return (
    <>
      <Headline />
      <Section title="About Me" narrow>
        <p>{content.aboutMe1}</p><br />
        <p>{content.aboutMe2}</p><br />
        <p>{content.aboutMe3}</p>
      </Section>
      <Section title="Projects">
        {content.skillset.map((name) => (
          <Skill
          key={name}
          name={name}
          onClick={handleClickSkill}
          selected={selectedSkills.includes(name) ? true : false}
          />
        ))}
        {projects().map((project) => (
          <Project
            key={project.name}
            project={project}
            handleClickTech={handleClickSkill}
            selectedSkills={selectedSkills}
          />
        ))}
      </Section>
    </>
  );
};

export default App;
