import styled from "styled-components";
import { Vars } from "../../Styles/vars.style";

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
  align-items: flex-start;
  gap: ${(props) => (props.size === "large" ? Vars.size.px32 : Vars.size.px8)};
`;

const ButtonStyle = styled.button`
  display: inline-flex;
  border: none;
  outline: none;
  align-items: center;
  min-width: ${(props) => (props.width === "full" ? "100%" : "100px")};
  padding: 0 ${Vars.size.px16};
  justify-content: center;

  cursor: ${(props) => (props.type === "disabled" ? "not-allowed" : "pointer")};

  border: ${(props) =>
    props.type === "secondary" ? "2px solid " + Vars.color.blue : ""};

  border-radius: ${(props) =>
    props.size === "small" ? Vars.size.px4 : Vars.size.px4};

  color: ${(props) =>
    props.type === "secondary"
      ? Vars.color.blue
      : props.type === "disabled"
      ? Vars.color.greyDark
      : props.type === "ghost"
      ? Vars.color.greyDark
      : Vars.color.white};

  background: ${(props) =>
    props.type === "secondary"
      ? "none"
      : props.type === "disabled"
      ? Vars.color.grey
      : props.type === "ghost"
      ? "none"
      : props.type === "error"
      ? Vars.color.error
      : props.type === "success"
      ? Vars.color.success
      : Vars.color.blue};

  height: ${(props) =>
    props.size === "large"
      ? Vars.size.px40
      : props.size === "medium"
      ? Vars.size.px32
      : props.size === "small"
      ? Vars.size.px24
      : Vars.size.px24};
`;

export { ButtonStyle, ButtonGroup };
