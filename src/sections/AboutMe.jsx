import React from "react";
// import "../stylesheets/development.css";

const AboutMe = (props) => {
  return (
    <div
      style={{
        margin: "auto",
        width: "85%",
        maxWidth: "850px",
      }}
    >
      <h1
        style={{
          margin: "auto",
          textAlign: "center",
        }}
      >
        About Me
      </h1>
      <div
        style={{
          position: "relative",
          margin: "auto",
          width: "85%",
        }}
      >
        <p
          style={{
            textAlign: "left",
          }}
        >
          {props.about}
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
