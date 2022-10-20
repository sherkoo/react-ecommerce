import React from "react";
import PropTypes from "prop-types";
import * as styles from "./Filter.styles";

/**
 * Filter
 */
const Filter = (props) => (
  <styles.Filter>
    <styles.FilterSection>
      <styles.FilterHeader>New Arrivals</styles.FilterHeader>
      <div>View all</div>
      <div>Clothes</div>
      <div>Shoes and accessories</div>
      <div>Sportswear</div>
    </styles.FilterSection>
    <styles.FilterSection>
      <styles.FilterHeader>New Arrivals</styles.FilterHeader>
      <div>View all</div>
      <div>Clothes</div>
      <div>Shoes and accessories</div>
      <div>Sportswear</div>
    </styles.FilterSection>
    <styles.FilterSection>
      <styles.FilterHeader>New Arrivals</styles.FilterHeader>
      <div>View all</div>
      <div>Clothes</div>
      <div>Shoes and accessories</div>
      <div>Sportswear</div>
    </styles.FilterSection>
  </styles.Filter>
);

// Filter.propTypes = {
//   // bla: PropTypes.string,
// };

// Filter.defaultProps = {
//   // bla: 'test',
// };

export default Filter;
