import React from "react";
import PropTypes from "prop-types";
import * as styles from "./Header.styles";
import { Link } from "react-router-dom";
import Container from "../Container";

const Header = (props) => (
  <styles.Header>
    <Container>
      <styles.HeaderMain>
        <Link to="/"><h1>Logo</h1></Link>
        <styles.HeaderMainNav>
          <span>search</span>
          <span>profile</span>
          <span>cart(0)</span>
        </styles.HeaderMainNav>
      </styles.HeaderMain>
      <styles.HeaderNav>
        <span>Woman</span>
        <span>Men</span>
        <span>Jeans</span>
        <span>Services</span>
      </styles.HeaderNav>
    </Container>
  </styles.Header>
);

Header.propTypes = {
  // bla: PropTypes.string,
};

Header.defaultProps = {
  // bla: 'test',
};

export default Header;
