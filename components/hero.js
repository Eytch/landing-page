import React from "react";
import Navbar from "./navbar";
import Image from "next/image";
import split from "/public/split.svg";
import heroImage from "/public/HeroSVG.svg";
import { Button } from "./ui/button";
import { FaCirclePlay } from "react-icons/fa6";

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
            Let&apos;s make your work more organize and easily using the Taskio
            Dashboard with many of the latest featuresin managing work every
            day.
          </p>
          <div className="flex flex-row gap-1">
            <Button size="lg" className="rounded-full p-7">
              Try Free Trial
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="rounded-full p-7 flex gap-2"
            >
              <FaCirclePlay fontSize={20} />
              View Demo
            </Button>
          </div>
        </div>
        <div className=" ">
          <Image src={heroImage} width={700} height={500} alt="hero" />
        </div>
      </div>
      <div className="flex flex-col gap-10 justify-center mt-10 mb-10">
        <h2 className="text-3xl lg:text-4xl text-center font-bold">
          More than 25,000 teams use Collabs
        </h2>
        <div className="flex flex-wrap gap-10 items-center justify-center">
          <Image src="/Unsplash.svg" width={140} height={100} alt="Unsplash" />
          <Image src="/Notion.svg" width={140} height={100} alt="Notion" />
          <Image src="/Intercom.svg" width={140} height={100} alt="Intercom" />
          <Image src="/descript.svg" width={140} height={100} alt="Descript" />
          <Image
            src="/grammarly.svg"
            width={140}
            height={100}
            alt="grammarly"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
