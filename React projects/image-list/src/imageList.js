import React from "react";

const ImageList = (props) => {
  const Image = props.image.map((image) => {
    return (
      <div>
        <img key={image.id} src={image.webformatURL} alt="hue hue"></img>
      </div>
    );
  });
  return <div>{Image}</div>;
};
export default ImageList;
