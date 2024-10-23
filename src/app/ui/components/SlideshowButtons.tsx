import Image from "next/image";

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
        <Image
          src="/images/icon-angle-left.svg"
          alt=""
          width={10}
          height={10}
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
          width={10}
          height={10}
        />
      </button>
    </>
  );
};

export default SlideshowButtons;
