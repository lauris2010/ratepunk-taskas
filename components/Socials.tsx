import Image from "next/image";
import React from "react";

type Props = {};

const Socials = (props: Props) => {
  return (
    <div className="flex gap-2 items-center md:justify-center">
      <div className="bg-[#4EB3E3] rounded-lg border-[#1F343E] border w-8 h-8 flex p-2 items-center justify-center">
        <Image src="/assets/instagram.svg" alt="" width={20} height={20} />
      </div>
      <div className="bg-[#4EB3E3] rounded-lg border-[#1F343E] border w-8 h-8  p-[0.7rem] flex items-center justify-center">
        <Image src="/assets/facebook.svg" alt="" width={10} height={10} />
      </div>
      <div className="bg-[#4EB3E3] rounded-lg border-[#1F343E] border w-8 h-8 p-2 flex items-center justify-center">
        <Image src="/assets/linkedin.svg" alt="" width={20} height={20} />
      </div>
      <div className="bg-[#4EB3E3] rounded-lg border-[#1F343E] border w-8 h-8 p-2 flex items-center justify-center">
        <Image src="/assets/twitter.svg" alt="" width={20} height={20} />
      </div>
      <div className="bg-[#4EB3E3] rounded-lg border-[#1F343E] border w-8 h-8 p-2 flex items-center justify-center">
        <Image src="/assets/tiktok.svg" alt="" width={20} height={20} />
      </div>
    </div>
  );
};

export default Socials;
