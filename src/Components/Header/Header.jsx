import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import * as styles from "./Header.styles";
import { Link } from "react-router-dom";
import Container from "../Container";
import { useSelector, useDispatch } from 'react-redux';
import { incrementCartCount } from '../../Redux/cart';

const Header = (props) => {
  const [cartCount, setCartCount] = useState(0);
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <styles.Header>
    <Container>
      <styles.HeaderMain>
        <h1>{cartState.count}</h1>
        <button onClick={() => dispatch(incrementCartCount())}>Click</button>
        <Link to="/"><h1>Logo</h1></Link>
        <styles.HeaderMainNav>
          <span>search</span>
          <span>profile</span>
          <span><Link to="/cart">cart({cartState.count})</Link></span>
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
  )
};

Header.propTypes = {
  // bla: PropTypes.string,
};

Header.defaultProps = {
  // bla: 'test',
};

export default Header;
