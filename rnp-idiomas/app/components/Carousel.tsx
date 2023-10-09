"use client";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  {
    src: require("../src/images/rec-n-play-2022-3.jpg"),
    alt: "Image 1",
    width: 400,
    height: 100,
  },
  {
    src: require("../src/images/rec-n-play-2022-3.jpg"),
    alt: "Image 2",
    width: 400,
    height: 100,
  },
  // slots for images
];

const CarouselComponent: React.FC = () => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <div key={index}>
          <Image
            src={image.src.default} 
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
