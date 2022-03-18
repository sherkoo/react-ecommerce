import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './NotFound.styles';
import Container from '../../Container';

const NotFound = (props) => (
  <div className="NotFoundWrapper">
    <Container>
      <h1>Page not found</h1>
      <p>Try searching again</p>
    </Container>
  </div>
);

NotFound.propTypes = {
  // bla: PropTypes.string,
};

NotFound.defaultProps = {
  // bla: 'test',
};

export default NotFound;
