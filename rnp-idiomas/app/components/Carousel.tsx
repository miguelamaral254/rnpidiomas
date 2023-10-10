"use client";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  {
    src: require("../src/images/bg-1.jpg"),
    alt: "Image 1",
    
  },
  {
    src: require("../src/images/bg-2.jpg"),
    alt: "Image 2",
    
  },
 
  // slots for images
];

const CarouselComponent: React.FC = () => {
  return (
    <Carousel >
      {images.map((image, index) => (
        <div key={index}>
          <Image
            src={image.src.default}
            alt={image.alt}
            
            
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
