import Image from "next/image";
import React from "react";

type Props = {};

const InfoContainer = (props: Props) => {
  return (
    <div className="flex flex-col gap-12">
      <div className="p-4">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
          <div className="">
            <Image
              src="/assets/invite.svg"
              alt="Left Image"
              height={100}
              width={150}
            />
          </div>
          <div className=" flex flex-col justify-center items-center md:items-start md:max-w-[220px] md:pl-8 gap-4 md:gap-0">
            <p className="text-md font-bold uppercase mb-2  text-[#4EB3E3]">
              Step 1
            </p>
            <h1 className="text-4xl text-[#1F343E] font-bold font-caveat mb-2">
              Invite Friends
            </h1>
            <p className="text-md font-noto md:text-left text-[#1F343E]">
              Refer friends with your unique referral link
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 ">
        <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-0">
          <div className="flex flex-col justify-center items-center md:items-start md:max-w-[230px] md:pr-8 gap-4 md:gap-0">
            <p className="text-md font-bold uppercase mb-2 text-[#4EB3E3]">
              Step 2
            </p>
            <h1 className="text-4xl text-[#1F343E] font-bold font-caveat mb-2">
              COLLECT COINS
            </h1>
            <p className="text-md font-noto text-center md:text-left text-[#1F343E]">
              Get 1 coin for each friend that installs our extension using your
              referral link.
            </p>
          </div>
          <div className="">
            <Image
              src="/assets/collect-coins.svg"
              alt="Left Image"
              height={100}
              width={150}
            />
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
          <div className="">
            <Image
              src="/assets/voucher.svg"
              alt="Left Image"
              height={100}
              width={150}
            />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start md:max-w-[220px] md:pl-8 gap-4 md:gap-0">
            <p className="text-md font-bold uppercase mb-2 text-[#4EB3E3]">
              Step 3
            </p>
            <h1 className="text-4xl text-[#1F343E] font-bold font-caveat mb-2">
              Invite Friends
            </h1>
            <p className="text-md font-noto text-center md:text-left text-[#1F343E] ">
              Redeem for a $20 hotel booking voucher once you collect 20 coins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoContainer;
