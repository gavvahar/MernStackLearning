import React from "react";
import PropTypes from "prop-types";

class TextContent extends React.Component {
  render() {
    const { title } = this.props;
    return <p>{title}</p>;
  }
}

TextContent.defaultProps = {
  title: "default content......"
};

TextContent.propTypes = {
  title: PropTypes.string,
};
export default TextContent;
