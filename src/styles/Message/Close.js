import styled from "styled-components";

export default styled.section`
  display: flex;
  & > button {
    border: none;
    outline: none;
    padding: 0px;
    margin: 0;
    background-color: transparent;

    & > svg {
      height: 15px;
      width: 12px;
      .x-path-to-fill {
        fill: #42526e;
      }
    }
  }
`;
