import styled from "styled-components";

export const ImagePickerContainer = styled.div`
  border: 1px #e8e8e8 solid;
  padding: 16px;
  border-radius: 3px;
  display: inline-block;
  width: 100%;
  input {
    display: block;
    height: 100%;
    width: 100%;
    opacity: 0;
    cursor: pointer;
    position: absolute;
  }
  .input-container {
    text-align: center;
    border: dashed;
    background: whitesmoke;
    position: relative;
    padding: 20px 0;
    p {
      margin: 0;
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    .dropzone {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      border-width: 2px;
      border-radius: 2px;
      border-color: #eeeeee;
      border-style: dashed;
      background-color: #fafafa;
      color: #bdbdbd;
      outline: none;
      transition: border 0.24s ease-in-out;
    }
  }
`;

ImagePickerContainer.ThumbsContainer = styled.aside`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16px;
`;

ImagePickerContainer.Thumb = styled.div`
  display: inline-flex;
  border-radius: 2px;
  border: 1px solid #eaeaea;
  margin-bottom: 8px;
  margin-right: 8px;
  width: 100px;
  height: 100px;
  padding: 4px;
  box-sizing: border-box;
`;

ImagePickerContainer.Img = styled.img`
  display: block;
  width: auto;
  height: 100%;
`;

ImagePickerContainer.Delete = styled.img`
  display: ${({ showDelete }) => (showDelete ? "block" : "none")};
  position: absolute;
  height: 15px;
  cursor: pointer;
`;
