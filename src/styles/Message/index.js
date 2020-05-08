import styled, { css } from "styled-components";
import Content from "./Content";
import Icon from "./Icon";
import Close from "./Close";

const Container = styled.section`
  width: 100%;
  border-radius: 3px;
  padding: ${props => (props.bigPadding ? "18px 20px" : "15px")};
  display: flex;
  align-items: flex-start;
  ${props =>
    props.status === "info" &&
    css`
      background-color: #ebeced;
    `};
  ${props =>
    props.status === "success" &&
    css`
      background-color: #e3f1df;
    `};
  ${props =>
    props.status === "warning" &&
    css`
      background-color: #ffd700;
    `};
  ${props =>
    props.status === "error" &&
    css`
      background-color: #fbeae5;
    `};
`;

const Message = {
  Container,
  Content,
  Icon,
  Close
};

export default Message;
