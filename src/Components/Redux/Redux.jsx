import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { Test } from './Redux.styles';

const Redux = (props) => (
  <div className="ReduxWrapper">
    Test content
  </div>
);

Redux.propTypes = {
  // bla: PropTypes.string,
};

Redux.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Redux);
