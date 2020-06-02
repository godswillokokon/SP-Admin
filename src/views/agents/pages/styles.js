import styled from "styled-components";

export const AddAgentContainer = styled.div`
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  width: 100%;
  label {
    font-family: "GT Walsheim";
    color: #5c5c5c;
    font-size: 16px;
  }
  .header {
    margin-bottom: 20px;
    border-left: 3px solid black;
    padding-left: 12px;
    width: fit-content;
    text-align: center;
  }
  .basic-info {
    display: flex;
    align-items: center;
    justify-content: center;
    & > * {
      margin: 10px;
    }
  }
  @media only screen and (max-width: 1280px) {
    margin-right: 0;
    margin-left: 0;
  }
`;
