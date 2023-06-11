import React from "react";
import Form from "./Form";
import InfoContainer from "./InfoContainer";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex justify-between items-stretch flex-col lg:flex-row max-w-5xl mx-auto z-20 xl:items-center p-[64px] pl-5 pr-5 gap-[6vw]">
      <div className="flex-1">
        <Form />
      </div>
      <div className="">
        <InfoContainer />
      </div>
    </div>
  );
};

export default Hero;
