import React from "react";
import PropTypes from "prop-types";
import * as styles from "./Product.styles";
import { Link } from "react-router-dom";

const ProductCard = (props) => (
  <styles.ProductCard>
    <Link to={props.link}>
      <styles.ProductCardImg src={props.image} alt={props.headline} />
      <styles.ProductHeadline>{props.headline}</styles.ProductHeadline>
      <styles.ProductDescription>{props.description}</styles.ProductDescription>
      <p>{props.price}</p>
    </Link>
  </styles.ProductCard>
);

const ProductGrid = (props) => (
  <styles.ProductGrid>{props.children}</styles.ProductGrid>
);

ProductCard.propTypes = {
  // bla: PropTypes.string,
};

ProductCard.defaultProps = {
  link: "/",
};

export { ProductCard, ProductGrid };
