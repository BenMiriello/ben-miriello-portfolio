import React from "react";
import { ReactComponent as Linkedin } from "../icons/linkedin.svg";
import { ReactComponent as Medium } from "../icons/medium.svg";
import { ReactComponent as Twitter } from "../icons/twitter.svg";
import { ReactComponent as Email } from "../icons/email.svg";

const Contact = ({ type }) => {
  let Icon = null;
  let destination = "";

  const copyToClipboard = () => {
    navigator.clipboard.writeText("benmiriello@gmail.com");
  };

  if (type === "Email") {
    if (!Email) return null;
    return (
      <div
        className={"contact-button external-link-button cursor-copy"}
        onClick={() => copyToClipboard()}
      >
        <Email className="contact-icon" />
      </div>
    );
  }

  switch (type) {
    case "Linkedin":
      Icon = Linkedin;
      destination = "https://www.linkedin.com/in/benmiriello";
      break;
    case "Medium":
      Icon = Medium;
      destination = "https://medium.com/@benmiriello_36460";
      break;
    case "Twitter":
      Icon = Twitter;
      destination = "https://twitter.com/ManateeIdol";
      break;
  }

  if (!Icon) return null;

  return (
    <div className="contact-button external-link-button">
      <a href={destination} target="_blank">
        <Icon className="contact-icon" />
      </a>
    </div>
  );
};

export default Contact;
