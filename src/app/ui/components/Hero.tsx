import Image from "next/image";

export default function Hero() {
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
  return (
    <div className="grid md:grid-cols-2 h-2/3">
      <div>
        <Image src={content[0].desktopImage} alt="" width={840} height={534} />
      </div>
      <div className="relative md:p-28">
        <div className="max-w-md">
          <h1 className="font-bold text-5xl mb-4">{content[0].title}</h1>
          <p className="text-gray-500 mb-4">{content[0].text}</p>
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
          <button className="flex-1 flex justify-center items-center bg-black hover:bg-gray-700">
            <Image
              src="/images/icon-angle-left.svg"
              alt=""
              width={20}
              height={20}
            />
          </button>
          <button className="flex-1 flex justify-center items-center bg-black hover:bg-gray-700">
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
