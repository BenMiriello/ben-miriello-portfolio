import React from "react";
import { ReactComponent as JSIcon } from "../vendors/devicons/javascript/javascript-original.svg";
import { ReactComponent as ReactIcon } from "../vendors/devicons/react/react-original.svg";
import { ReactComponent as ReduxIcon } from "../vendors/devicons/redux/redux-original.svg";
import { ReactComponent as RubyIcon } from "../vendors/devicons/ruby/ruby-original.svg";
import { ReactComponent as RailsIcon } from "../vendors/devicons/rails/rails-plain.svg";
import { ReactComponent as PGIcon } from "../vendors/devicons/postgresql/postgresql-original.svg";
import { ReactComponent as CSS3Icon } from "../vendors/devicons/css3/css3-original.svg";
import { ReactComponent as HTML5Icon } from "../vendors/devicons/html5/html5-original.svg";

const TechIcon = ({ iconName, className, selected, inProject }) => {
  let Icon = null;

  switch(iconName){
    case 'Javascript': Icon = JSIcon; break;
    case 'React': Icon = ReactIcon; break;
    case 'Redux': Icon = ReduxIcon; break;
    case 'Ruby': Icon = RubyIcon; break;
    case 'Rails': Icon = RailsIcon; break;
    case 'PostgreSQL': Icon = PGIcon; break;
    case 'CSS3': Icon = CSS3Icon; break;
    case 'HTML5': Icon = HTML5Icon; break;
  }

  if (!Icon) return null

  if (className === 'skill-icon') {
    return <Icon className="skill-icon" />
  }

  let buttonClass = "project-icon-button"
  let iconClass = "project-tech-icon"

  if (selected && inProject) {
    buttonClass ="project-icon-button selected-project-tech"
  }

  return (
    <div className={buttonClass}>
      <div className="project-icon-container">
        <Icon className={iconClass} />
      </div>
    </div>
  )
};

export default TechIcon;