import React from "react";
import Image from "next/image";
import ReactStars from "react-rating-stars-component";

type Props = {};

const Stripe = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 items-center w-[80%] md:max-w-5xl mx-auto z-20 xl:items-center pt-10 pb-10 md:pt-2 md:pb-2">
      <div className="border border-lg w-[100%] md:w-[30%] rounded-lg flex justify-start pl-4 border-[#1F343E]">
        <a href="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk">
          <div className="p-2">
            <div className="flex">
              <div className="flex items-centers justify-center">
                <Image
                  src="/assets/chrome.svg"
                  alt="Left Image"
                  height={45}
                  width={45}
                />
              </div>
              <div className="flex flex-col justify-center pl-2">
                <p className="text-sm">available in the</p>
                <h1 className="font-bold">chrome web store</h1>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="border border-lg w-[100%] md:w-[30%] rounded-lg flex justify-start pl-4 border-[#1F343E]">
        <a href="https://apps.apple.com/app/ratepunk/id1607823726">
          <div className="p-2">
            <div className="flex">
              <div className="flex items-center justify-center">
                <Image
                  src="/assets/apple.svg"
                  alt="Left Image"
                  height={45}
                  width={45}
                />
              </div>
              <div className="flex flex-col justify-center pl-2">
                <p className="text-sm">available in the</p>
                <h1 className="font-bold">Apple Store</h1>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="md:w-[30%] w-[100%] flex justify-center">
        <div className="">
          <div className="flex">
            <div className="flex items-center ">
              <ReactStars
                count={5}
                size={24}
                isHalf={true}
                color={"white"}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </div>
            <div className="flex flex-col justify-center pl-4">
              <p className="text-sm">Chrome Store reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stripe;
