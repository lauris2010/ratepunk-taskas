import Image from "next/image";
import React from "react";
import Socials from "./Socials";

function Footer() {
  return (
    <>
      <div className="bg-[#F8F4F9]  max-w-5xl h-1/2 w-full flex justify-center gap-4 mx-auto md:flex-row flex-col items-stretch pt-10 pb-10">
        <div className="p-5 flex">
          <ul className="flex flex-col justify-between">
            <div className="mb-6 md:mb-0">
              <Image src="/assets/logo.svg" alt="" width={100} height={100} />
            </div>
            <div>
              <p className="text-[#1F343E] font-noto max-w-[520px]">
                Ratepunk compares hotel room prices across the major online
                travel agencies. When you search for a room, Ratepunk extension
                scans the top booking sites and runs a price comparison, so you
                can be confident in knowing you’re getting the best deal!
              </p>
            </div>
            <div className="text-[#6D7A80] font-noto hidden md:block">
              <p>© 2021 Ratepunk. All Rights Reserved.</p>
            </div>
          </ul>
        </div>
        <div className="p-5 font-noto">
          <ul className="">
            <p className="text-gray-800 font-bold text-xl font-noto pb-4">
              QUICK LINKS
            </p>
            <li className="text-[#1F343E] text-md pb-2  hover:text-blue-600 cursor-pointer">
              Price Comparison
            </li>
            <li className="text-[#1F343E] text-md pb-2  hover:text-blue-600 cursor-pointer">
              Chrome Extension
            </li>
            <li className="text-[#1F343E] text-md pb-2 hover:text-blue-600 cursor-pointer">
              How It Works
            </li>
            <li className="text-[#1F343E] text-md pb-2 hover:text-blue-600 cursor-pointer">
              Ratepunk Blog
            </li>
            <li className="text-[#1F343E] text-md pb-2 hover:text-blue-600 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>
        <div className="p-5 flex flex-col justify-between ">
          <ul className="flex flex-col ">
            <p className="text-[#1F343E] font-bold font-noto text-xl pb-4 uppercase">
              contact
            </p>
            <li className="text-[#1F343E] text-md pb-2 hover:text-blue-600 cursor-pointer mb-4">
              hi@ratepunk.com
            </li>
          </ul>
          <ul className="flex flex-col">
            <p className="text-[#1F343E] font-bold text-xl font-noto pb-4 uppercase">
              SOCIAL
            </p>
            <div>
              <Socials />
            </div>
          </ul>
        </div>
        <div className="p-5 text-[#6D7A80] font-noto md:hidden">
          <p>© 2021 Ratepunk. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
