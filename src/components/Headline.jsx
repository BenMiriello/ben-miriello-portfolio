import React from "react";
import Contact from './Contact';
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
          <Contact type="Linkedin" />
          <Contact type="Medium" />
          <Contact type="Twitter" />
          <Contact type="Email" />
        </div>
      </div>
    </div>
  );
};

export default Headline;
