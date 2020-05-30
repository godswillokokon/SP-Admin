import React, { useState } from "react";
import { VideoPickerContainer } from "./styles";
import axios from "axios";
import Loader from "components/Loader";

const VideoPicker = ({ title, onChange = (files) => {} }) => {
  const [videoInfo, setVideoInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadVideo = (e) => {
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append("upload_preset", "ngflnmyo");
    formData.append("file", files);
    setLoading(true);

    axios
      .post("https://api.cloudinary.com/v1_1/tech-18/video/upload", formData)
      .then((res) => {
        setVideoInfo(res.data.secure_url);
        onChange(res.data.secure_url);
      })
      .then(setLoading(false))
      .catch((err) => console.log(err));
  };

  return (
    <VideoPickerContainer>
      {loading ? (
        <Loader />
      ) : (
        <>
          <input type="file" name="file" onChange={uploadVideo} />
          <VideoPickerContainer.PlaceHolder>
            {videoInfo && (
              <video controls width={"100%"} height={"100%"}>
                <source src={videoInfo ? videoInfo : ""} type="video/mp4" />
              </video>
            )}
            {!videoInfo ? (
              <div>
                <h3>{title}</h3>
                <p>Click to upload or drag and drop here</p>
              </div>
            ) : (
              ""
            )}
          </VideoPickerContainer.PlaceHolder>
        </>
      )}
    </VideoPickerContainer>
  );
};

export default VideoPicker;
