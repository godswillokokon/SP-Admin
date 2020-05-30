import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ImagePickerContainer } from "./styles";

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

function Previews({ onChange = (files) => {} }) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: true,
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
      setFiles(
        files.concat(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        )
      );
      onChange(
        files.concat(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <ImagePickerContainer.Thumb key={file.name}>
      <div style={thumbInner}>
        <ImagePickerContainer.Img src={file.preview} />
      </div>
    </ImagePickerContainer.Thumb>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <ImagePickerContainer>
      <section className="container">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        <ImagePickerContainer.ThumbsContainer>
          {thumbs}
        </ImagePickerContainer.ThumbsContainer>
      </section>
    </ImagePickerContainer>
  );
}

export default Previews;
