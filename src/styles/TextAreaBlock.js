import styled, { css } from "styled-components";

const TextAreaBlock = styled.textarea`
  font-family: "GT Walsheim";
  font-weight: 400;
  background: #ffffff;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 16px;
  width: 100%;
  max-width: 400px;
  font-size: 14px;
  &::placeholder {
    color: black;
    font-weight: 200;
  }
  &:focus {
    border: 2px solid #0daba8;
  }
  &:disabled {
    opacity: 0.46;
  }
  ${(props) =>
    props.fullWidth &&
    css`
      max-width: 100%;
    `}
    ${(props) =>
      props.noResize &&
      css`
        resize: none;
      `}
  ${(props) =>
    props.error &&
    css`
      background-color: #ffe3e3;
      border: 2px solid #e12d39;
      color: #e12d39;
      &:focus {
        border-color: #e12d39;
      }
    `}
  ${(props) =>
    props.borderless &&
    css`
      background-color: #f2f2f2;
      border: none;
    `}
    ${(props) =>
      props.description &&
      css`
        border-left: none;
        border-top: none;
        border-right: none;
        &:focus {
          border-left: none;
          border-top: none;
          border-right: none;
          border-bottom: 2px solid #0daba8;
        }
      `}
`;

TextAreaBlock.Container = styled.div`
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 400px;
  margin: 10px 0;
  &.inline {
    display: flex;
    flex-direction: row;
    align-items: center;
    label {
      margin-bottom: 0;
    }
    input {
      margin-left: 10px;
    }
  }
  ${(props) =>
    props.fullWidth &&
    css`
      max-width: 100%;
    `}
`;

TextAreaBlock.ErrorText = styled.span`
  display: block;
  font-size: 15px;
  color: firebrick;
  font-weight: bold;
  padding-left: 10px;
  margin-top: 10px;
`;

TextAreaBlock.Label = styled.label`
  font-family: "GT Walsheim";
  display: block;
  color: #000;
  font-weight: 300;
  font-size: 12px;
  margin-bottom: 10px;
  ${(props) =>
    props.hide &&
    css`
      display: none;
    `}
`;

export default TextAreaBlock;
