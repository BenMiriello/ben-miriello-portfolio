import React, { useState } from "react";
import Headline from "./components/Headline";
import Section from "./components/Section";
import Skill from "./components/Skill";
import Project from "./components/Project";
import content from "./content";
import MediumProfile from "react-medium-profile";

// import './tailwind.output.css';

const App = () => {
  const [selectedSkills, setSelectedSkills] = useState(['Javascript', 'React', 'Rails', 'Typescript', 'Ruby', 'CSS3', 'SQLite3', 'HTML5', 'PostgreSQL', 'Redux']);
  const [highlightedProjects, setHighlightedProjects] = useState(['Grab a Meeting']);

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
        {content.aboutMe.map((paragraph, i) => (
          <>
            <p>{paragraph}</p>
            {content.aboutMe.length > (i + 1) ? <br /> : ''}
          </>
        ))}
      </Section>
      <Section title="Skills" narrow >
        {content.skillset.map((name) => (
          <Skill
          key={name}
          name={name}
          onClick={handleClickSkill}
          selected={selectedSkills.includes(name) ? true : false}
          />
        ))}
      </Section>
      <Section title="Projects">
        {projects().map((project) => (
          <Project
            key={project.name}
            project={project}
            handleClickTech={handleClickSkill}
            selectedSkills={selectedSkills}
            highlighted={highlightedProjects.includes(project.name)}
          />
        ))}
      </Section>
      <Section title="Blogs">
        <div className="medium-section">
          <MediumProfile username={"benmiriello_36460"} />
        </div>
      </Section>
    </>
  );
};

export default App;
