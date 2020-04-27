import React, { useState } from "react";
import Icon from "./Icon";

const Skill = ({ name, onClick, selected }) => {

  let showIcon = () => {
    if (selected) {
      return <Icon name={name} className={"skill-icon"} selected />;
    } else {
      return <Icon name={name} className={"skill-icon"} />;
    }
  }

  return (
    <li
      className={selected ? "skill-clicked" : "skill"}
      onClick={() => onClick(name)}
    >
      <div className="skill-name-container">
        <span>
          {showIcon()}
          {name}
        </span>
      </div>
    </li>
  );
};

export default Skill;