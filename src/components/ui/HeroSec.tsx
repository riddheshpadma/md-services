import Image from "next/image";
import Navbar from "../ui/Navbar";
import React from "react";

interface HeroSecProps {
  image: string;
  head: string;
  subhead: string;
}

const HeroSec = (props: HeroSecProps) => {
  return (
    <div>
      <section className="relative h-screen bg-primaryColor ">
        <Image
          src={props.image}
          layout="fill"
          objectFit="cover"
          alt="Hero Section"
          className="absolute opacity-50"
        />
        {/* Overlay */}
        <div className="absolute inset-0 z-0 bg-black bg-opacity-50 shadow-2xl"></div>

        {/* Navbar */}
        <div className="relative z-20">
          <Navbar />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-10">
            {props.head}
          </h1>
          <p className="mt-2 text-sm md:text-xl text-gray-200 text-center">
            {props.subhead}
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroSec;
