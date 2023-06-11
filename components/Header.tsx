import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex md:items-start justify-between max-w-5xl mx-auto z-20 xl:items-center p-5">
      <div className="flex items-center">
        <Image src="/assets/logo.svg" alt="" width={100} height={100} />
      </div>
      <div className="flex items-center text-gray-500 gap-12">
        <div
          className={`${
            isMenuOpen ? "visible" : "invisible"
          } xl:visible flex items-center text-gray-500 gap-12`}
        >
          <p className="hover:text-[#4EB3E3]">Chrome Extension</p>
          <p className="hover:text-[#4EB3E3]">Price Comparison</p>
          <p className="hover:text-[#4EB3E3]">Blog</p>
        </div>
        <div className="xl:hidden">
          <button
            className="flex items-center justify-center w-10 h-10 rounded-md  hover:bg-gray-300 focus:outline-none"
            onClick={toggleMenu}
          >
            <Image src="/assets/menu.svg" alt="" width={20} height={20} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white z-50">
          <div className="p-5 border border-black">
            <button
              className="flex items-center justify-center w-10 h-10 rounded-md  hover:bg-gray-300 focus:outline-none absolute top-2 right-2"
              onClick={toggleMenu}
            >
              <Image src="/assets/close.svg" alt="" width={20} height={20} />
            </button>
            <Image src="/assets/logo.svg" alt="" width={100} height={100} />
            <div className="text-black mt-10 flex flex-col gap-6 ">
              <p className="hover:text-[#4EB3E3]">Chrome Extension</p>
              <p className="hover:text-[#4EB3E3]">Price Comparison</p>
              <p className="hover:text-[#4EB3E3]">Blog</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
