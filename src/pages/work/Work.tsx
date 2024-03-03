import { CustomCarousel } from "@/components/CustomCarousel";
import React from "react";

const Work = () => {
  return (
    <div className="py-20 md:py-20 border-y border-y-inputBorder" id="work">
      <div className="flex flex-col items-center bg-dark">
        <div className="bg-border font-bold px-3 w-[100px] text-center rounded-[99px]">
          <p className="text-purple-100">WORK</p>
        </div>
        <p className="text-white-100 font-bold text-[24px] sm:text-[36px] md:text-[42px] mt-3">
          Dig into my universe
        </p>
      </div>
      <div className="container">
        <CustomCarousel />
      </div>
    </div>
  );
};

export default Work;
