import Image from "next/image";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

function Benefit() {
  return (
    <div className="max-w-[1440px] m-auto p-8 mt-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="flex flex-col gap-8">
          <h3 className="text-4xl font-semibold text-center lg:text-5xl">
            What Benefit Will You Get
          </h3>

          <ul className="flex flex-col gap-6 px-8">
            <li className="flex align-middle gap-2">
              <FaCircleCheck color="#54BD95" fontSize={20} />
              <p className="leading-5">
                Free Consulting With Expert Saving Money
              </p>
            </li>
            <li className="flex align-middle gap-2">
              <FaCircleCheck color="#54BD95" fontSize={20} />
              <p className="leading-5">Online Banking</p>
            </li>
            <li className="flex align-middle gap-2">
              <FaCircleCheck color="#54BD95" fontSize={20} />
              <p className="leading-5">Investment Report Every Month</p>
            </li>
            <li className="flex align-middle gap-2">
              <FaCircleCheck color="#54BD95" fontSize={20} />
              <p className="leading-5">Saving Money For The Future</p>
            </li>
            <li className="flex align-middle gap-2">
              <FaCircleCheck color="#54BD95" fontSize={20} />
              <p className="leading-5">Online Transection</p>
            </li>
          </ul>
        </div>
        <div>
          <Image src="/Benifit.svg" width={600} height={600} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Benefit;
