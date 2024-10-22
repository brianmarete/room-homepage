"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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

  const currentContent = content[currentIndex];

  return (
    <div className="grid md:grid-cols-2 h-2/3">
      <div>
        <Image
          src={currentContent.desktopImage}
          alt=""
          width={840}
          height={534}
          className={`hidden md:block transition-opacity duration-1000 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        />
        <Image
          src={currentContent.mobileImage}
          alt={currentContent.title}
          layout="fill"
          objectFit="cover"
          className={`md:hidden transition-opacity duration-1000 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>
      <div className="relative md:p-28">
        <div className="max-w-md">
          <h1
            className={`font-bold text-5xl mb-4 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            {currentContent.title}
          </h1>
          <p
            className={`text-gray-500 mb-4 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            {currentContent.text}
          </p>
          <button className="uppercase font-bold text-start tracking-[1em] w-2/3 hover:text-gray-400">
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
        <div className="absolute bottom-0 left-0 flex justify-around md:w-48 md:h-24 ">
          <button
            onClick={handlePrev}
            className="flex-1 flex justify-center items-center bg-black hover:bg-gray-700"
            aria-label="Previous slide"
          >
            <Image
              src="/images/icon-angle-left.svg"
              alt=""
              width={20}
              height={20}
            />
          </button>
          <button
            onClick={handleNext}
            className="flex-1 flex justify-center items-center bg-black hover:bg-gray-700"
            aria-label="Next slide"
          >
            <Image
              src="/images/icon-angle-right.svg"
              alt=""
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
