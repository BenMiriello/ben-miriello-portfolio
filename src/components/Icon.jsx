import React from "react";
import { ReactComponent as JSColor } from "../icons/javascript.svg";
import { ReactComponent as ReactColor } from "../icons/react.svg";
import { ReactComponent as ReduxColor } from "../icons/redux.svg";
import { ReactComponent as RubyColor } from "../icons/ruby.svg";
import { ReactComponent as RailsColor } from "../icons/rails.svg";
import { ReactComponent as PGColor } from "../icons/postgresql.svg";
import { ReactComponent as CSS3Color } from "../icons/css3.svg";
import { ReactComponent as HTML5Color } from "../icons/html5.svg";
import { ReactComponent as SQLite3Color } from "../icons/sqlite3.svg";
import { ReactComponent as TypescriptColor } from "../icons/typescript.svg";

import { ReactComponent as JSBW } from "../icons/javascript-bw.svg";
import { ReactComponent as ReactBW } from "../icons/react-bw.svg";
import { ReactComponent as ReduxBW } from "../icons/redux-bw.svg";
import { ReactComponent as RubyBW } from "../icons/ruby-bw.svg";
import { ReactComponent as RailsBW } from "../icons/rails-bw.svg";
import { ReactComponent as PGBW } from "../icons/postgresql-bw.svg";
import { ReactComponent as CSS3BW } from "../icons/css3-bw.svg";
import { ReactComponent as HTML5BW } from "../icons/html5-bw.svg";
import { ReactComponent as SQLite3BW } from "../icons/sqlite3-bw.svg";
import { ReactComponent as TypescriptBW } from "../icons/typescript-bw.svg";

// import { ReactComponent as Github } from '../icons/github.svg';
// import { ReactComponent as Youtube } from '../icons/youtube.svg';

const Icon = ({ name, className, selected, inProject, handleClick, github, video }) => {
  
  if (github) {
    return(
      <a href={github} target="_blank">
        <img src="../icons/external-links/github.png" rel="noopener noreferrer" alt='github' className="project-external-link-container" />
          {/* <Github />
        </div> */}
      </a>
    )
  }

  if (video) {
    return(
      <a href={video} target="_blank">
        <div className="project-external-link-container">
          {/* <Youtube /> */}
        </div>
      </a>
    )
  }

  let Icon = null;

  if (!!selected) {
    switch(name){
      case 'Javascript': Icon = JSColor; break;
      case 'React': Icon = ReactColor; break;
      case 'Redux': Icon = ReduxColor; break;
      case 'Ruby': Icon = RubyColor; break;
      case 'Rails': Icon = RailsColor; break;
      case 'PostgreSQL': Icon = PGColor; break;
      case 'CSS3': Icon = CSS3Color; break;
      case 'HTML5': Icon = HTML5Color; break;
      case 'SQLite3': Icon = SQLite3Color; break;
      case 'Typescript': Icon = TypescriptColor; break;
    }
  } else {
    switch(name){
      case 'Javascript': Icon = JSBW; break;
      case 'React': Icon = ReactBW; break;
      case 'Redux': Icon = ReduxBW; break;
      case 'Ruby': Icon = RubyBW; break;
      case 'Rails': Icon = RailsBW; break;
      case 'PostgreSQL': Icon = PGBW; break;
      case 'CSS3': Icon = CSS3BW; break;
      case 'HTML5': Icon = HTML5BW; break;
      case 'SQLite3': Icon = SQLite3BW; break;
      case 'Typescript': Icon = TypescriptBW; break;
    }
  }

  if (!Icon) return null
  
  if (className === 'skill-icon') {
    return <Icon className="skill-icon" />
  }
  
  let buttonClass = "project-icon-button selected-project-tech"
  if (selected && inProject) {
    buttonClass ="project-icon-button"
  }

  return (
    <div className={buttonClass} onClick={() => handleClick(name)}>
      <div className="project-icon-container">
        <Icon />
      </div>
    </div>
  )
};

export default Icon;
