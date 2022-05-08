import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="z-10 h-16 w-full sticky top-0 bg-primary-0 shadow-sm flex flex-row justify-center items-center gap-48 text-white">
        <h1 className="text-2xl text-slate-50 font-semibold font-segoe">
          Capik
        </h1>
        <ul className="flex flex-row gap-20">
          <a href="#home">Home</a>
          <a href="#product">Products</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
