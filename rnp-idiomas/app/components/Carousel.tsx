"use client";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent: React.FC = () => {
  return (
    <Carousel>
      <div>
        <Image
          src={require("../src/images/rec-n-play-2022-3.jpg")}
          alt="Image 1"
          width={300} 
          height={200}
        />
        <p>Legenda do Slide 1</p>
      </div>
      <div>
        <Image
          src={require("../src/images/rec-n-play-2022-3.jpg")}
          alt="Image 2"
          width={300} 
          height={200}
        />
        <p>Legenda do Slide 2</p>
      </div>
      {/* Adicione mais slides conforme necessário */}
    </Carousel>
  );
};

export default CarouselComponent;
