import React from "react";
import ShampooItem from "../shampooItem";
import Image1 from "../../assets/1.png";
import Image2 from "../../assets/2.png";
import Image3 from "../../assets/3.jpg";
import "./shampooList.css";

const ShampooList = () => {
  const images = [Image1, Image2, Image3];

  return (
    <ul className="products">
      {images.map((img) => {
        return <ShampooItem image={img} />;
      })}
    </ul>
  );
};

export default ShampooList;
