import Logo from "../../../../public/images/logo.svg";
import Image from "next/image";
const Nav = () => {
  return (
    <div className="absolute top-0 left-0 md:ml-16 md:mt-16 w-full md:w-1/4 z-10">
      <nav className="hidden md:flex md:items-start text-white justify-between align-bottom">
        <Image src={Logo} alt="" className="mr-8 text-2xl" />
        <ul className="flex md:justify-around grow leading-none pb-3">
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
      <nav className="md:hidden flex justify-center py-8">
        <Image src={Logo} alt="" className="mr-8 text-2xl" />
      </nav>
    </div>
  );
};

export default Nav;
