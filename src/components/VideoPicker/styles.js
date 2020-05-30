import styled from "styled-components";
import CloudUploadSvg from "assets/img/cloud-upload.svg";

export const VideoPickerContainer = styled.div`
  position: relative;
  width: 50%;
  margin: 20px auto;
  input {
    display: block !important;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 99999;
    opacity: 0;
    box-sizing: border-box;
    cursor: pointer;
  }
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
    position: relative;
    height: 250px;
    border: 1px solid lightgrey;
    background-color: #fff;
    padding: 15px;
    box-sizing: border-box;
    background-image: url(${CloudUploadSvg});
    background-position: 98% 0%;
    background-size: 200px, 200px;
    background-repeat: no-repeat;
  }
`;

VideoPickerContainer.PlaceHolder = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-gap: 5px;
  img {
    margin: auto;
  }
  h3 {
    color: #353490;
    font-size: 16px;
  }
  p {
    color: #696969;
    font-size: 12px;
  }
`;
