import React from 'react';
import { ButtonStyle } from './button.style';

/**
 * Props
 * 
 * @param {props.label}
 * @returns button label
 * 
 * @param {props.size}
 * @returns large, medium, small
 * 
 * @param {props.width}
 * @returns full
 * 
 * @param {props.type}
 * @returns primary, secondary, disabled, ghost, error, success
 * 
 * @param {props.click}
 * @returns area for custom methods
 */

function Button(props) {
  return (
    <ButtonStyle onClick={props.click} size={props.size} type={props.type} width={props.width}>
      {props.label}
    </ButtonStyle>
  );
}

Button.defaultProps = {
  label: "Default label",
  size: "large",
  type: "primary",
}

export default Button;