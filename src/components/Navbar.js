import React, { useRef } from "react";
import { List } from "react-bootstrap-icons";
import { Link } from "react-scroll";
const Navbar = () => {
  const menu = useRef();
  const anchor = useRef();
  const menuAction = () => {
    if (menu.current.classList.contains("hidden")) {
      menu.current.classList.remove("hidden");
      menu.current.classList.add("flex");
    } else {
      menu.current.classList.remove("flex");
      menu.current.classList.add("hidden");
    }
  };

  return (
    <>
      <nav className="z-10 h-16 w-full sticky top-0 bg-primary-0 shadow-sm flex flex-row justify-center items-center gap-48 lg:gap-44 xl:gap-48 xxl:gap-48 text-white">
        <h1 className="text-2xl text-slate-50 font-semibold font-segoe">
          Capik
        </h1>
        <ul className="flex-row hidden md:gap-16 lg:gap-16 xl:gap-20 xxl:gap-20 md:flex lg:flex xl:flex xxl:flex">
          <Link
            to="home"
            className="px-4 py-2 cursor-pointer"
            activeClass={"active" ? "bg-white text-primary-0" : ""}
            spy={true}
            smooth={true}
          >
            Home
          </Link>
          <Link
            to="product"
            className="px-4 py-2 cursor-pointer"
            activeClass={"active" ? "bg-white text-primary-0" : ""}
            spy={true}
            smooth={true}
          >
            Product
          </Link>
          <Link
            to="about"
            className="px-4 py-2 cursor-pointer"
            activeClass={"active" ? "bg-white text-primary-0" : ""}
            spy={true}
            smooth={true}
          >
            About
          </Link>
          <Link
            to="services"
            className="px-4 py-2 cursor-pointer"
            activeClass={"active" ? "bg-white text-primary-0" : ""}
            spy={true}
            smooth={true}
          >
            Services
          </Link>
        </ul>
        <List
          className="flex text-3xl md:hidden lg:hidden xl:hidden xxl:hidden cursor-pointer hover:font-bold"
          onClick={menuAction}
        />
      </nav>
      <ul
        ref={menu}
        className="hidden flex-col justify-center items-center text-white fixed gap-16 md:hidden lg:hidden xl:hidden xxl:hidden z-10 bg-primary-0 w-full h-full overflow-y-hidden"
      >
        <Link
          to="home"
          className="px-4 py-2 cursor-pointer"
          activeClass={"active" ? "bg-white text-primary-0" : ""}
          spy={true}
          smooth={true}
          ref={anchor}
          onClick={menuAction}
        >
          Home
        </Link>
        <Link
          to="product"
          className="px-4 py-2 cursor-pointer"
          activeClass={"active" ? "bg-white text-primary-0" : ""}
          spy={true}
          smooth={true}
          ref={anchor}
          onClick={menuAction}
        >
          Product
        </Link>
        <Link
          to="about"
          className="px-4 py-2 cursor-pointer"
          activeClass={"active" ? "bg-white text-primary-0" : ""}
          spy={true}
          smooth={true}
          ref={anchor}
          onClick={menuAction}
        >
          About
        </Link>
        <Link
          to="services"
          className="px-4 py-2 cursor-pointer"
          activeClass={"active" ? "bg-white text-primary-0" : ""}
          spy={true}
          smooth={true}
          ref={anchor}
          onClick={menuAction}
        >
          Services
        </Link>
      </ul>
    </>
  );
};

export default Navbar;
