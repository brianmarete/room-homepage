import Image from "next/image";
import angleLeft from "@/images/icon-angle-left.svg";
import angleRight from "@/images/icon-angle-right.svg";

interface SlideshowButtonsProps {
  handlePrev: () => void;
  handleNext: () => void;
}

const SlideshowButtons = ({
  handlePrev,
  handleNext,
}: SlideshowButtonsProps) => {
  return (
    <>
      <button
        onClick={handlePrev}
        className="flex-1 flex justify-center items-center bg-black hover:bg-gray-700"
        aria-label="Previous slide"
      >
        <Image src={angleLeft} alt="" />
      </button>
      <button
        onClick={handleNext}
        className="flex-1 flex justify-center items-center bg-black hover:bg-gray-700"
        aria-label="Next slide"
      >
        <Image src={angleRight} alt="" />
      </button>
    </>
  );
};

export default SlideshowButtons;
