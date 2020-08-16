import React from "react";
import "../CSS/About.css";

const About = () => {
  return (
    <div className="about_container">
      <h1>About</h1>
      <p>This project was built for practice purposes.</p>
      <div className="spacer"></div>
      <a href="https://github.com/AlexxGH/yummi-pizza" className="react">
        <span>
          <img src={require("../images/GitHub-Mark-Light-32px.png")} alt='github logo' />
        </span>
        <span>React Pizza</span>
      </a>
      <div className="spacer"></div>
      <a href="https://github.com/AlexxGH/API-yummi-pizza" className="api">
        <span>
          <img src={require("../images/GitHub-Mark-32px.png")} alt='github logo' />
        </span>
        <span>API Pizza</span>
      </a>
      <div className="spacer"></div>
    </div>
  );
};
export default About;
