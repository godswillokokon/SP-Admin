import React, { useState } from "react";
import { ImagePickerContainer } from "./styles";
import axios from "axios";

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

function Previews({ onChange = (image) => {} }) {
  const [images, setImages] = useState([]);

  const uploadImages = (e) => {
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append("upload_preset", "ngflnmyo");
    formData.append("file", files);

    axios
      .post(
        "https://api.cloudinary.com/v1_1/tech-18/image/upload",
        formData
      )
      .then((res) => {
        setImages(images.concat(res.data.secure_url));
        onChange(images.concat(res.data.secure_url));
      })
      .catch((err) => console.log(err));
  };

  const thumbs = images.map((file) => (
    <ImagePickerContainer.Thumb key={file}>
      <div style={thumbInner}>
        <ImagePickerContainer.Img src={file} />
      </div>
    </ImagePickerContainer.Thumb>
  ));

  return (
    <ImagePickerContainer>
      <section className="container">
        <div className="input-container">
          <input
            type="file"
            name="file"
            onChange={uploadImages}
            multiple
          />
          <p>
            Drag 'n' drop some files here, or click to select files
          </p>
        </div>
        <ImagePickerContainer.ThumbsContainer>
          {thumbs}
        </ImagePickerContainer.ThumbsContainer>
      </section>
    </ImagePickerContainer>
  );
}

export default Previews;
