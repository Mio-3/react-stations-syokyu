// @ts-check
import React from "react";

export const DogImage = ({imageUrl}) => {
  console.log(imageUrl)
  return (
      <div>
          <img src={imageUrl} alt="犬の画像" />
      </div>
  );
};

export default DogImage
