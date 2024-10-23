"use client";

import Logo from "@/images/logo.svg";
import MenuIcon from "@/images/icon-hamburger.svg";
import CloseIcon from "@/images/icon-close.svg";
import Image from "next/image";
import { useState } from "react";
import CustomLink from "./CustomLink";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="absolute flex top-0 left-0 md:ml-16 md:mt-16 w-full md:w-1/3 z-10">
      <button
        onClick={toggleMenu}
        className="md:hidden fixed top-8 left-8 z-40"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <Image src={CloseIcon} alt="" />
        ) : (
          <Image src={MenuIcon} alt="" />
        )}
      </button>
      <div className="flex justify-center py-8  w-full md:max-w-fit">
        <Image src={Logo} alt="" className="mr-8 text-2xl" />
      </div>

      {/* MOBILE MENU */}
      <nav
        className={`fixed md:hidden top-0 left-0 bottom-0 flex items-center w-full h-20 bg-white pt-4 px-16 transform transition-transform duration-200 ease-in-out z-30 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex justify-around grow pb-3 font-semibold">
          <li className="inline">
            <a href="#">home</a>
          </li>
          <li className="inline">
            <a href="#">shop</a>
          </li>
          <li className="inline">
            <a href="#">about</a>
          </li>
          <li className="inline">
            <a href="#">contact</a>
          </li>
        </ul>
      </nav>
      {/* Dim overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
      {/* DESKTOP MENU */}
      <nav className="hidden md:flex md:items-center text-white">
        <ul className="leading-none space-x-8">
          <CustomLink href="#">home</CustomLink>
          <CustomLink href="#">shop</CustomLink>
          <CustomLink href="#">about</CustomLink>
          <CustomLink href="#">contact</CustomLink>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
