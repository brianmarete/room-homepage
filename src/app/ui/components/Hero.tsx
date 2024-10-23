"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SlideshowButtons from "./SlideshowButtons";

const content = [
  {
    desktopImage: "/images/desktop-image-hero-1.jpg",
    mobileImage: "/images/mobile-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property reflection of you and what you love.",
  },
  {
    desktopImage: "/images/desktop-image-hero-2.jpg",
    mobileImage: "/images/mobile-image-hero-2.jpg",
    title: "We are available all across the globe",
    text: "With stores all over the world, it's easy to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    desktopImage: "/images/desktop-image-hero-3.jpg",
    mobileImage: "/images/mobile-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];
export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentContent = content[currentIndex];

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
        setIsAnimating(false);
      }, 500); // Half of the transition duration
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + content.length) % content.length
        );
        setIsAnimating(false);
      }, 500); // Half of the transition duration
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        handlePrev();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="grid md:grid-cols-5 grid-cols-1 min-h-[65vh] overflow-hidden">
      <div className="relative md:col-span-3 overflow-hidden">
        <Image
          src={currentContent.desktopImage}
          alt=""
          width={840}
          height={534}
          className={`hidden md:block w-full h-full transition-all ease-in-out duration-1000 ${
            isAnimating ? "opacity-0 scale-100" : "opacity-100 scale-105"
          }`}
        />
        <Image
          src={currentContent.mobileImage}
          alt={currentContent.title}
          width={415}
          height={400}
          className={`md:hidden block transition-all ease-in-out duration-1000 ${
            isAnimating ? "opacity-0 scale-100" : "opacity-100 scale-105"
          }`}
        />
        <div className="md:hidden absolute bottom-0 right-0 flex justify-around md:left-0 w-28 h-16 md:w-32 md:h-14">
          <SlideshowButtons handleNext={handleNext} handlePrev={handlePrev} />
        </div>
      </div>
      <div className="relative md:col-span-2 px-8 py-8 lg:pl-12 lg:pt-12 xl:pl-28 xl:pt-28">
        <div className="max-w-7xl">
          <h1
            className={`font-bold text-4xl md:text-5xl mb-4 max-w-md transition-opacity ease-in-out duration-1000 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            {currentContent.title}
          </h1>
          <p
            className={`text-gray-500 mb-4 max-w-md transition-opacity ease-in-out duration-1000 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            {currentContent.text}
          </p>
          <button className="uppercase font-bold text-start tracking-[1em] md:w-2/3 hover:text-gray-400">
            Shop now{" "}
            <Image
              className="inline"
              src="/images/icon-arrow.svg"
              alt=""
              width={50}
              height={10}
            />
          </button>
        </div>
        <div className="hidden absolute bottom-0 right-0 md:flex md:justify-around md:left-0 md:w-32 md:h-14 ">
          <SlideshowButtons handleNext={handleNext} handlePrev={handlePrev} />
        </div>
      </div>
    </div>
  );
}
