"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdOutlineLightMode } from "react-icons/md";
import { RiMoonClearLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  if (!mounted) return null;

  return (
    <div className="w-full p-4 relative">
      <nav className="max-w-[1440px] m-auto flex flex-row gap-10 justify-between sm:px-3">
        <div className="flex lg:hidden items-center">
          <Button variant="link" onClick={toggleMobileMenu}>
            {mobileMenuOpen === false ? (
              <RxHamburgerMenu fontSize={20} />
            ) : (
              <MdClose fontSize={20} />
            )}
          </Button>
        </div>
        <div className="logo flex items-center" style={{ minWidth: "100px" }}>
          <Link href="#">
            <Image
              src="/logo.png"
              alt="Biccas"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
              priority
            />
          </Link>
        </div>
        <ul className="hidden lg:flex flex-row gap-10 items-center">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#A6A6A6] hover:text-black dark:hover:text-white"
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#A6A6A6] hover:text-black dark:hover:text-white"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#A6A6A6] hover:text-black dark:hover:text-white"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#A6A6A6] hover:text-black dark:hover:text-white"
            >
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
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 w-full bg-white dark:bg-[#0C0A09] min-h-[92vh] flex flex-col gap-14 items-center justify-center absolute left-0">
          <Link href="/" className="text-lg">
            Home
          </Link>
          <Link href="/" className="text-lg">
            Product
          </Link>
          <Link href="/" className="text-lg">
            FAQ
          </Link>
          <Link href="/" className="text-lg">
            Blog
          </Link>
          <Link href="/" className="text-lg">
            About Us
          </Link>
        </div>
      )}
    </div>
  );
}
