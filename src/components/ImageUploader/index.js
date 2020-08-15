import React, { useState, useEffect } from "react";
import { ImagePickerContainer } from "./styles";
import axios from "axios";
import Delete from "assets/img/delete.svg";

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const ThumbsComponent = ({ file, index, images, setImages }) => {
  const [showDelete, setShowDelete] = useState(false);
  const handleDelete = (index) => {
    const newImages = images.splice(index, 1);
    setImages(images);
    return newImages;
  };
  return (
    <>
      <ImagePickerContainer.Thumb
        key={file}
        onMouseEnter={() => setShowDelete(true)}
        onMouseLeave={() => setShowDelete(false)}
      >
        <ImagePickerContainer.Delete
          src={Delete}
          showDelete={showDelete}
          onClick={() => handleDelete(index)}
        />
        <div style={thumbInner}>
          <ImagePickerContainer.Img src={file} />
        </div>
      </ImagePickerContainer.Thumb>
    </>
  );
};

const Thumbs = ({ images, setImages }) => {
  return (
    <>
      {images.map((file, index) => (
        <ThumbsComponent
          file={file}
          index={index}
          images={images}
          setImages={setImages}
        />
      ))}
    </>
  );
};

function Previews({ onChange }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    onChange([...images]);
  }, [images, onChange]);

  const uploadImages = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const files = e.target.files[i];
      const formData = new FormData();
      formData.append("upload_preset", "ngflnmyo");
      formData.append("file", files);

      axios
        .post(
          "https://api.cloudinary.com/v1_1/tech-18/image/upload",
          formData
        )
        .then((res) => {
          setImages((images) => [...images, res.data.secure_url]);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <label>Image Uploader</label>
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
            <Thumbs images={images} setImages={setImages} />
          </ImagePickerContainer.ThumbsContainer>
        </section>
      </ImagePickerContainer>
    </>
  );
}

export default Previews;
