import styled, { css } from "styled-components";

export default styled.p`
  ${props =>
    props.tiny &&
    css`
      font-size: 0.6rem;
      font-weight: normal;
    `};

  ${props =>
    props.small &&
    css`
      font-size: 0.7rem;
      font-weight: normal;
    `};

  ${props =>
    props.medium &&
    css`
      font-size: 0.8rem;
      font-weight: normal;
    `};

  ${props =>
    props.big &&
    css`
      font-size: 0.9rem;
      font-weight: normal;
    `};

  ${props =>
    props.semiBold &&
    css`
      font-weight: 600;
    `};
`;
