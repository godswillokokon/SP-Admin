import styled from "styled-components";

export const PropertiesContainer = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  @media only screen and (max-width: 1280px) {
    margin-right: 0;
    margin-left: 0;
  }
`;

export const AddPropertyContainer = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 4%;
  display: flex;
  background: white;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
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
  .ammenities {
    display: flex;
    flex-wrap: wrap;
    & > * {
      margin: 10px;
    }
  }
  @media only screen and (max-width: 1280px) {
    margin-right: 0;
    margin-left: 0;
  }
`;

export const PropertyCard = styled.div`
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  padding-right: 10px;
  padding-left: 10px;
  .content {
    transition: all 0.5s;
    background: #fff;
    border-radius: 0.1875rem;
    margin-bottom: 30px;
    border: 0;
    display: inline-block;
    position: relative;
    width: 100%;
    box-shadow: none;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    .body {
      color: #424242;
      font-weight: 400;
      padding: 10px;
      .img-thumbnail {
        padding: 0.25rem;
        background-color: #fff;
        border: 1px solid #dee2e6;
        border-radius: 0.25rem;
        max-width: 100%;
        width: 294px;
        height: 187px;
      }
      .price {
        font-size: 1em;
        font-weight: 700;
        text-transform: uppercase;
        margin-top: 1rem !important;
        color: #56b68b !important;
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
      .location {
        color: #6c757d !important;
        font-size: 90%;
      }
      .features {
        padding: 1rem !important;
        margin-top: 1rem !important;
        justify-content: space-between !important;
        display: flex !important;
        background-color: #f8f9fa !important;
      }
    }
  }
  @media only screen and (max-width: 1280px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;
