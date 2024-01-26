import React from "react";
import Navbar from "./navbar";
import Image from "next/image";
import heroImage from "/public/hero-image.png";
import split from "/public/split.svg";
import { Button } from "./ui/button";

function Hero() {
  return (
    <div className="max-w-[1440px] m-auto p-4 relative">
      <div className="flex flex-col gap-10 h-full lg:flex-row hero-container justify-between items-center lg:mt-32">
        <div className="max-w-[540px] flex flex-col gap-10">
          <h1 className="text-4xl lg:text-7xl  font-bold">
            We’re here to Increase your Productivity
          </h1>
          <Image src={split} width={500} height={300} alt="hero" />
          <p className="text-justify">
            Let's make your work more organize and easily using the Taskio
            Dashboard with many of the latest featuresin managing work every
            day.
          </p>
          <div>
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
