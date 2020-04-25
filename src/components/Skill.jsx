import React, { useState } from "react";

const Skill = ({name, size, onClick}) => {

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked);
    onClick(name)
  }
  
  return (
    <li
      className={!clicked ? "skill" : "skill-clicked"}
      onClick={() => handleClick()}
    >
      <div className="skill-name-container">
        <span>{name}</span>
      </div>
    </li>
  );
};

export default Skill;
