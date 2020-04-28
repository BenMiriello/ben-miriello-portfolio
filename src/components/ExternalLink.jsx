import React from "react";

const ExternalLink = ({ type, link }) => {
  if (link) {
    return (
      <a href={link} target="_blank" className="project-external-link">
        <img 
          alt={type} 
          className="external-link-image"
          src={process.env.PUBLIC_URL + `./images/external-links/${type}.png`}
        />
      </a>
    )
  }

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
  }

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
      image = "./images/external-links/Github.png"
  }

  return (
    <a href={destination} target="_blank">
      <img src={process.env.PUBLIC_URL + image} alt={type} className="external-link-image" />
    </a>
  );
};

export default ExternalLink;
