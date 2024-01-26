import React from "react";
import Navbar from "./navbar";
import Image from "next/image";
import split from "/public/split.svg";
import heroImage from "/public/HeroSVG.svg";
import { Button } from "./ui/button";

function Hero() {
  return (
    <div className="max-w-[1440px] m-auto p-4 relative">
      <div className="flex flex-col-reverse gap-10 mt-5 lg:flex-row hero-container items-center lg:justify-between lg:mt-32">
        <div className="max-w-[540px] flex flex-col gap-10 items-center lg:items-start">
          <h1 className="text-5xl lg:text-7xl text-center font-bold lg:text-left">
            We’re here to Increase your Productivity
          </h1>
          <Image src={split} width={450} height={300} alt="hero" />
          <p className="text-center text-md lg:max-w-[400px] lg:text-left">
            Let's make your work more organize and easily using the Taskio
            Dashboard with many of the latest featuresin managing work every
            day.
          </p>
          <div className="flex flex-row gap-6">
            <Button>Try free trial</Button>
            <Button>view Demo</Button>
          </div>
        </div>
        <div className=" ">
          <Image src={heroImage} width={700} height={500} alt="hero" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
