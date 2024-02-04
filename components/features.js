import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function Features() {
  return (
    <div className="max-w-[1440px] m-auto p-8">
      <div className=" flex flex-col mb-10 lg:flex-row items-center gap-5 lg:gap-52">
        <h3 className="text-3xl">Our Features you cab get</h3>
        <p className="text-sm opacity-50 text-center lg:text-left">
          We offer a variety of interesting features that you can help increase
          yor productivity at work and manage your project easily.
        </p>
        <Button size="lg" className="rounded-full p-7 text-white">
          Get Started
        </Button>
      </div>
      <div className="flex flex-col items-center lg:justify-center lg:flex-row gap-10 lg:gap-20 ">
        <div className="flex flex-col gap-2 max-w-xs">
          <Image
            className="self-center lg:self-start"
            src="/left-image.svg"
            width={300}
            height={300}
            alt=""
          />
          <h3 className="text-2xl text-center lg:self-start lg:text-left">
            Collboration Teams
          </h3>
          <p className="text-sm self-center text-center lg:self-start opacity-50 lg:text-left">
            Here you can handle projects together with team virtually
          </p>
        </div>
        <div className="flex flex-col gap-2 max-w-xs">
          <Image
            className="self-center lg:self-start"
            src="/center-image.svg"
            width={300}
            height={300}
            alt=""
          />
          <h3 className="text-2xl text-center lg:self-start lg:text-left">
            Cloud Storage
          </h3>
          <p className="text-sm self-center text-center lg:self-start opacity-50 lg:text-left">
            No need to worry about storage because we provide storage up to 2 TB
          </p>
        </div>
        <div className="flex flex-col gap-2 max-w-xs">
          <Image
            className="self-center lg:self-start"
            src="/right-image.svg"
            width={300}
            height={300}
            alt=""
          />
          <h3 className="text-2xl text-center lg:self-start lg:text-left">
            Daily Analytics
          </h3>
          <p className="text-sm self-center text-center lg:self-start opacity-50 lg:text-left">
            We always provide useful information to make it easier for you every
            day
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
