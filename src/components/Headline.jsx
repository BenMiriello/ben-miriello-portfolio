import React from "react";
import ExternalLink from './ExternalLink';
import content from "../content";

const Headline = _ => {
  return (
    <div className="main-section headline">
      <img
        className="headshot"
        src={process.env.PUBLIC_URL + "./images/portrait.jpg"}
        alt="Headshot"
      />
      <div className="headline-text">
        <h1>Ben Miriello</h1>
        <p>{content.tagline}</p>
        <div className="contact-container">
          <ExternalLink type="Linkedin" />
          <ExternalLink type="Github" />
          <ExternalLink type="Medium" />
          {/* <ExternalLink type="Twitter" /> */}
          <ExternalLink type="Email" />
        </div>
      </div>
    </div>
  );
};

export default Headline;