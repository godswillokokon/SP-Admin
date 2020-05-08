import React, { useState, useEffect } from "react";
import eyeIcon from "assets/img/eye.svg";
import styled, { css } from "styled-components";

const PasswordToggleBlock = styled.span`
  position: absolute;
  z-index: 1;
  margin: 0;
  border: none;
  background-color: transparent;
  top: 18px;
  margin-left: -35px;
  opacity: 0.6;
  transition: 0.5s ease all;
  -webkit-transition: 0.5s ease all;
  -moz-transition: 0.5s ease all;
  ${(props) =>
    props.show &&
    css`
      opacity: 1;
    `}
`;

export default function PasswordToggle({ onChange, initialValue = false }) {
  const [show, setShow] = useState(initialValue);

  useEffect(() => {
    onChange(show);
  }, [show, onChange]);

  return (
    <PasswordToggleBlock onClick={() => setShow(!show)} show={show}>
      <img src={eyeIcon} alt="visibility" />
    </PasswordToggleBlock>
  );
}
