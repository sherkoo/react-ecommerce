import React from "react";
import PropTypes from "prop-types";
import * as styles from "./Footer.styles";
import Container from "../Container";

const Footer = (props) => (
  <styles.Footer>
    <Container>Footer</Container>
  </styles.Footer>
);

Footer.propTypes = {
  // bla: PropTypes.string,
};

Footer.defaultProps = {
  // bla: 'test',
};

export default Footer;
