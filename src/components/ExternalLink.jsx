import React from "react";

import { ReactComponent as RightArrow } from "../icons/arrow-right.svg";

const ExternalLink = ({ type, link }) => {
  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className={type === 'linkTo' ? "project-external-link pxl-link-to" : "project-external-link"}>
        {type === 'linkTo' ?
          <div className='go-to-site'>Visit<RightArrow height='0.8rem' style={{marginLeft: '4px'}}/></div> :
          <img
            alt={type} 
            className="external-link-image"
            src={process.env.PUBLIC_URL + `./images/external-links/${type}.png`}
          />
        }
      </a>
    )
  };

  let image = "";
  let destination = "";

  const copyToClipboard = () => {
    navigator.clipboard.writeText("benmiriello@gmail.com");
  };

  if (type === "Email") {
    return (
      <div className={"cursor-copy"} onClick={() => copyToClipboard()}>
        <img
          alt={type}
          className="external-link-image"
          src={process.env.PUBLIC_URL + "./images/external-links/gmail.png"}
        />
      </div>
    );
  };


  switch (type) {
    case "Linkedin":
      destination = "https://www.linkedin.com/in/benmiriello";
      image = "./images/external-links/linkedin.png";
      break;
    case "Medium":
      destination = "https://medium.com/@benmiriello_36460";
      image = "./images/external-links/medium.png";
      break;
    case "Twitter":
      destination = "https://twitter.com/ManateeIdol";
      image = "./images/external-links/twitter.png";
      break;
    case "Github":
      destination = "https://github.com/BenMiriello/";
      image = "./images/external-links/Github.png";
      break;
    default:
      break;
  };

  return (
    <a href={destination} target="_blank" rel="noopener noreferrer">
      <img src={process.env.PUBLIC_URL + image} alt={type} className="external-link-image" />
    </a>
  );
};

export default ExternalLink;
