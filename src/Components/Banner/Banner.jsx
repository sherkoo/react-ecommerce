import React from "react";
import PropTypes from "prop-types";
import * as styles from "./Banner.styles";

/**
 * Banner
 */
const Banner = (props) => (
  <styles.Banner>
    <styles.BannerHeadline>{props.headline}</styles.BannerHeadline>
    <styles.BannerBody>{props.body}</styles.BannerBody>
    <div>{props.children}</div>
  </styles.Banner>
);

Banner.propTypes = {
  // bla: PropTypes.string,
};

Banner.defaultProps = {
  headline: "Headline",
  body: "this is body text",
};

export default Banner;
