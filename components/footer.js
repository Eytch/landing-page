import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

import { Button } from "./ui/button";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

function Footer() {
  return (
    <div className="pt-16 px-8 lg:pt-24 pb-10 bg-[#161C28]">
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
          <div className="basis-1/3 lg:min-w-[450px]">
            <div className="bg-[#222938] p-4 lg:py-16 lg:px-14 rounded-lg flex flex-col">
              <div className="flex flex-col items-center gap-2">
                <Image src="/moneyIcon.svg" width={50} height={50} alt="" />
                <h4 className="lg:text-3xl text-white">Get Started</h4>
              </div>
              <div>
                <form className="flex flex-col gap-3">
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
        <div className="flex flex-col lg:flex-row mt-20 gap-10">
          <div className="basis-1/2 flex flex-col gap-6">
            <div>
              <Image
                src="/Logo.svg"
                alt="Biccas"
                width={160}
                height={30}
                priority
              />
            </div>
            <div>
              <p className="text-white opacity-55 text-sm">
                Get started now! Try our product
              </p>
            </div>
            <div className="relative min-w-[200px] lg:max-w-[250px] lg:min-w-[400px]">
              <Input
                className="w-full border-gray-300 text-white border rounded-full p-8 focus:outline-none sm:text-sm"
                placeholder="Enter your email here"
              />
              <div className="absolute right-[0.3rem] top-[0.3rem] flex items-center cursor-pointer ">
                <Button className="rounded-full w-14 h-14 z-20">
                  <FaArrowRightLong
                    color="white"
                    fontSize={18}
                    className="cursor-pointer"
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="basis-1/2 justify-evenly align-middle flex lg:flex-row gap-2 lg:gap-5">
            <div>
              <ul className="flex flex-col gap-4 text-white text-sm">
                <li>Support</li>
                <li className="opacity-55">
                  <Link href="#">Help center</Link>
                </li>
                <li className="opacity-55">
                  <Link href="#">Account information</Link>
                </li>
                <li className="opacity-55">
                  <Link href="#">About</Link>
                </li>
                <li className="opacity-55">
                  <Link href="#">Contact us</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-4 text-white text-sm">
                <li>Help and Solution</li>
                <li className="opacity-55">
                  <Link href="#">Talk to support</Link>
                </li>
                <li className="opacity-55">
                  <Link href="#">Support docs</Link>
                </li>
                <li className="opacity-55">
                  <Link href="#">System status</Link>
                </li>
                <li className="opacity-55">
                  <Link href="#">Covid responde</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-4 text-white text-sm">
                <li>Product</li>
                <li className="opacity-55">
                  <Link href="#">Update</Link>
                </li>
                <li className="opacity-55">
                  <Link href="#">Security</Link>
                </li>
                <li className="opacity-55">
                  <Link href="#">Beta test</Link>
                </li>
                <li className="opacity-55">
                  <Link href="#">Pricing product</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-16 gap-2 lg:gap-0 items-center">
          <div className="basis-2/3 text-white text-sm ">
            <p>© 2022 Biccas Inc. Copyright and rights reserved</p>
          </div>
          <div className="basis-1/3 text-white text-sm opacity-55 ">
            <p className="flex gap-3 cursor-pointer">
              Terms and Condtions <span>•</span> Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
