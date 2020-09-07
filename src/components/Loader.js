import React from "react";
import styled, { keyframes } from "styled-components";
import Colors from "constants/Colors";

const rotate = keyframes`
from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Box = styled.div`
  height: ${(props) => props.size || "40"}px;
  width: ${(props) => props.size || "40"}px;
  border: 2px solid transparent;
  border-top: 2px solid ${(props) => props.color || Colors.primary};
  border-right: 2px solid ${(props) => props.color || Colors.primary};
  border-radius: 100%;
  animation: ${rotate} 500ms infinite linear;
`;

const Loader = (props) => {
  return <Box {...props} />;
};

export default Loader;
