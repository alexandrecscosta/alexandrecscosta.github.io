import React from "react";
import IntroductionBoxComponent from "../IntroductionBoxComponent/IntroductionBoxComponent";
import "./HomePage.scss";


function HomePage(props) {

  return (
    <div className="HomeContainer">
      <div className={props.expandPage ? "BoxesWrapper Expand" : "BoxesWrapper"}>
        <IntroductionBoxComponent title="About me">
          <h5>I'm passionate about creating content and tools with code and multimedia.</h5>
          <h5>I like working with a professional team and learning new things with others.</h5>
          <h5>I'm good at adapting to new environments and working with new projects and new technologies.</h5>
        </IntroductionBoxComponent>
        <IntroductionBoxComponent title="Education">
          <h5>Undergraduate Degree in <a href="https://www.esmad.ipp.pt/courses/degree/663" target="_blank" rel="noreferrer">Web Information Systems and Technologies</a></h5>
          <h5>Good knowledge on HTML, CSS and JavaScript frameworks, among other technologies</h5>
          <h5>Good knowledge on developing responsive interfaces</h5>
          <h5>Knowledge on User Interface and Experience</h5>
          <h5>Good at using Photoshop, Illustrator, After Effects and similar software</h5>
        </IntroductionBoxComponent>
        <IntroductionBoxComponent title="Professional Experience">
          <h5>2 years of professional working experience</h5>
          <h5>Used to working as a front-end developer using mainly JavaScript frameworks</h5>
          <h5>Good at implementing responsive layouts</h5>
          <h5>Good at creating, improving and testing UI components</h5>
          <h5>Good at fixing bugs related to the UI or the JavaScript logic</h5>
          <h5>Good at working with databases and APIs</h5>
        </IntroductionBoxComponent>
      </div>
    </div>
  );
}

export default HomePage;
