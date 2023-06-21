import React from "react";
import PolegoneStape from "../Style/polegoneStape";
import Photography from "../Style/photography";
import Returning from "../Style/return";
import { Circle } from "@/Assets/SVGs/SVG";

const Steps = () => {
  return (
    <div className="mt-[92px] mb-[92px]">
      <div className="2xl:container md:mx-auto">
        <div className="flex justify-center items-center">
          <div className="bg-left-bottom shadow-[-30px_60px_60px_10px_rgba(0,0,0,0.3)] rounded-full bg-gradient-to-r from-[#EBEAEA] from-[14.64%] to-[#FFFFFF] to-[85.36%] relative z-20 w-[668px] h-[668px]">
            <div className="rounded-full w-[624px] h-[624px] bg-[#F9F9F9] flex items-center relative mt-5 ml-5">
              <Circle className="relative w-[585px] h-[585px] flex items-center mt-1 ml-5" />
              <div className="absolute top-[200px] left-[100px] w-[476px]">
                <h2 className="text-[60px] font-bold uppercase">
                  Steps to process
                </h2>
                <p className="text-[38px] italic ">
                  Educate us about the product to maximise the best results!
                </p>
              </div>
            </div>
          </div>
          <div className="relative -left-[26rem] flex flex-col gap-9 -top-10">
            <PolegoneStape />
            <Photography />
            <Returning />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
