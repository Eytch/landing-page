import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full">
      <nav className="max-w-[1440px] h-[80px] m-auto flex flex-row gap-10 justify-between sm:px-3">
        <div className="logo flex items-center">
          <Image src="/logo.png" alt="Biccas" width={130} height={200} />
        </div>
        <ul className="flex flex-row gap-10 items-center">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#" className="text-[#A6A6A6] hover:text-black">
              Product
            </Link>
          </li>
          <li>
            <Link href="#" className="text-[#A6A6A6] hover:text-black">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="#" className="text-[#A6A6A6] hover:text-black">
              Blog
            </Link>
          </li>
          <li>
            <Link href="#" className="text-[#A6A6A6] hover:text-black">
              About Us
            </Link>
          </li>
        </ul>
        <ul className="flex flex-row gap-10 items-center">
          <li>
            <Link href="#">Login</Link>
          </li>
          <li>
            <Link href="#">Sign up</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
