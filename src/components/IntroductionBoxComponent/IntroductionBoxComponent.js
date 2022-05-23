import React from "react";
import "./IntroductionBoxComponent.scss";

function IntroductionBoxComponent(props) {

  return (
    <div className="IntroductionBox">
      <h3>{props.title}</h3>
      <div>{props.children}</div>
    </div>
  );
}

export default IntroductionBoxComponent;
