import styled from "styled-components";

export const AddCareerContainer = styled.div`
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
export const ButtonGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CareerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  @media only screen and (max-width: 1280px) {
    margin-right: 0;
    margin-left: 0;
  }
`;

export const CareerCard = styled.div`
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  padding-right: 10px;
  margin-left: 1rem;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 4.28542px 2.14271px;
  border: 1px solid #dee2e6;
  .img {
    padding: 0.25rem;
    background-color: #fff;
    border-radius: 0.25rem;
    max-width: 100%;
    width: 294px;
    height: 187px;
  }
  .title {
    font-size: 1.3em;
    line-height: 1.4em;
    margin-bottom: 15px;
    margin-top: 0 !important;
  }
  .description {
    color: #6c757d !important;
    line-height: 1.61em;
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;
