import Logo from "../../../../public/images/logo.svg";
import Image from "next/image";
const Nav = () => {
  return (
    <div className="absolute top-0 left-0 md:ml-16 md:mt-16 w-full md:w-1/4">
      <nav className="flex items-start text-white justify-between align-bottom">
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
    </div>
  );
};

export default Nav;
