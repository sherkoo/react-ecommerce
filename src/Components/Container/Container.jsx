import React from "react";
import * as styles from "./Container.styles";

/**
 * Container
 */
const Container = (props) => (
  <styles.Container>{props.children}</styles.Container>
);

Container.propTypes = {
  // bla: PropTypes.string,
};

Container.defaultProps = {
  // bla: 'test',
};

export default Container;
