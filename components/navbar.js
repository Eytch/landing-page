"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdOutlineLightMode } from "react-icons/md";
import { RiMoonClearLine } from "react-icons/ri";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <div className="w-full">
      <nav className="max-w-[1440px] h-[80px] m-auto flex flex-row gap-10 justify-between sm:px-3">
        <div className="logo flex items-center">
          <Link href="#">
            <Image src="/logo.png" alt="Biccas" width={130} height={200} />
          </Link>
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
        <ul className="flex flex-row gap-3 items-center">
          <li>
            <Button variant="ghost">Login</Button>
          </li>
          <li>
            <Button>Sign Up</Button>
          </li>
          <li>
            <Button variant="outline" className="px-2" onClick={toggleDarkMode}>
              {theme === "dark" ? (
                <MdOutlineLightMode fontSize={20} />
              ) : (
                <RiMoonClearLine fontSize={20} />
              )}
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
