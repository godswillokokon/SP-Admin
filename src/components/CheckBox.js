import React from "react";
import styled from "styled-components";
import InputBlock from "styles/InputBlock";

export default function CheckBox({
  field,
  id,
  label,
  value,
  checked,
  onClick,
  errorText,
  disabled,
  ...rest
}) {
  return (
    <Container {...rest}>
      <span
        style={{
          color: disabled ? "rgb(170, 170, 170)" : "black",
        }}
      >
        {label}
      </span>
      <input
        type="checkbox"
        value={value}
        checked={checked}
        onClick={onClick}
        disabled={disabled}
      />
      <span className="checkmark"></span>
      {errorText && (
        <InputBlock.ErrorText>{errorText}</InputBlock.ErrorText>
      )}
    </Container>
  );
}

const Container = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 15px;
  line-height: 1.5;
  font-family: "GT Walsheim";
  font-weight: 300;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  box-sizing: border-box;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 3px;
    height: 18px;
    width: 18px;
    background-color: #fff;
    border: 2px solid #0daba8;
    box-sizing: border-box;
    &:after {
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
  &:hover input ~ .checkmark {
    background-color: #ccc;
  }
  input:checked ~ .checkmark {
    background-color: #0daba8;
    border: 2px solid #fff;
    box-shadow: 0 0 0 2px #0daba8;
  }
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
  input:checked ~ .checkmark:after {
    display: block;
  }
`;
