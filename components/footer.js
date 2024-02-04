import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

function Footer() {
  return (
    <div className="py-16 px-8 lg:p-24 bg-[#161C28]">
      <div className="max-w-[1440px] m-auto">
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="basis-2/3 flex flex-col gap-12">
            <h3 className="text-white text-3xl lg:text-5xl lg:leading-snug font-bold">
              People are Saying About DoWhith
            </h3>
            <p className="text-sm lg:text-base text-white opacity-55">
              Everything you need to accept to payment and grow your money of
              manage anywhere on planet
            </p>
            <Image src="/quotes.svg" width={30} height={30} alt="" />
            <p className="text-sm lg:text-base text-white opacity-55">
              I am very helped by this E-wallet application, my days are very
              easy to use this application and its very helpful in my life, even
              I can pay a short time.
            </p>
            <p className="text-sm lg:text-base text-white opacity-55">
              _ Aria Zinanrio
            </p>
            <Image
              src="/Avatars.svg"
              className="cursor-pointer"
              width={300}
              height={50}
              alt=""
            />
          </div>
          <div className="basis-1/3">
            <div className="bg-[#222938] p-4 lg:py-16 lg:px-14 rounded-lg flex flex-col">
              <div className="flex flex-col items-center gap-2">
                <Image src="/moneyIcon.svg" width={50} height={50} alt="" />
                <h4 className="lg:text-3xl text-white">Get Started</h4>
              </div>
              <div>
                <form action="#" className="flex flex-col gap-3">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-white">
                      Email
                    </label>
                    <Input
                      className="bg-white h-12"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-white">
                      Message
                    </label>
                    <Input
                      className="bg-white h-12"
                      placeholder="What is your message?"
                    />
                  </div>
                  <Button className="h-12">Request Demo</Button>
                </form>
                <div className="flex justify-end mt-1">
                  <p className="text-white text-sm">
                    <span className="opacity-55 mr-1">or</span>
                    <Link href="#" className="opacity-100">
                      Start Free Trial
                    </Link>
                  </p>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
