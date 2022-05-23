import React from "react";
import PropTypes from "prop-types";
import "./IntroductionBoxComponent.scss";

class IntroductionBoxComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="IntroductionBox">
        <h3>{this.props.title}</h3>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

//  IntroductionBoxComponent.propTypes = {};

//  IntroductionBoxComponent.defaultProps = {};

export default IntroductionBoxComponent;
