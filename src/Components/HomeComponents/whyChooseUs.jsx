import React from "react";
import Image from "next/image";
import { Box_dot } from "@/Assets/SVGs/SVG";
import { Circle_Dash } from "@/Assets/SVGs/SVG";

const Whychooseus = () => {
  return (
    <div className="mt-[92px] mb-[92px]">
      <div className="container md:mx-auto">
        <div className=" flex justify-between flex-col lg:flex-row gap-3 items-center h-[775px]">
          <div
            className="w-[775px] delay-[300ms] duration-[600ms] taos:translate-x-[200px] taos:opacity-0"
            data-taos-offset="400"
          >
            {/* About Content */}
            <div className="flex items-center justify-between flex-col lg:flex-row w-[675] h-[500px] 2xl::w-[673px] 2xl:h-[675px] mx-auto lg:mx-0 relative ">
              {/* aboutImage */}
              <Image
                src="/Images/video.png"
                layout="fill"
                className="rounded-3xl object-cover "
              />
              <Circle_Dash className="absolute z-10 top-[-31px] right-0 lg:top-[-31px] lg:right-[-104px]" />
              <Box_dot className="absolute z-10 -bottom-8 left-0 lg:-bottom-14 lg:-left-12 " />
            </div>
          </div>
          <div className="relative">
            {/* Why Choose Us Points*/}
            <h1 className="text-5xl font-bold pt-28 pb-16">Why Choose Us</h1>
            <div className="grid grid-rows-3 grid-flow-col gap-6">
              <div className=" w-[323px] mb-5 mr-5">
                <h4 className="clip text-xl xl:text-[48px] xl:leading-10 font-semibold">Our Expertise</h4>
                <p className="text-base font-extralight leading-6">
                  As specialists in product photography, we understand that the
                  perfect image is more than just a high-resolution photograph
                  against a white background.{" "}
                </p>
              </div>
              <div className=" w-[323px] mb-5 mr-5">
                <h4 className="clip text-xl font-semibold">
                  Turning Product Features into Benefits
                </h4>
                <p className="text-base font-extralight leading-6">
                  Our talented designers transform mundane product photographs
                  into compelling visual stories through the power of
                  infographics.
                </p>
              </div>
              <div className="w-[323px] relative left-52 mb-5 mr-5">
                <h4 className="clip text-xl font-semibold">
                  Bringing Your Products into the Real World
                </h4>
                <p className="text-base font-extralight leading-6">
                  Our lifestyle photography service adds a touch of authenticity
                  to your product images by placing them in real-life
                  situations.
                </p>
              </div>
              <div className="w-[323px] mb-5 mr-5">
                <h4 className="clip text-xl font-semibold">Our Expertise</h4>
                <p className="text-base font-extralight">
                  As specialists in product photography, we understand that the
                  perfect image is more than just a high-resolution photograph
                  against a white background.{" "}
                </p>
              </div>
              <div className="w-[323px] mb-5 mr-5">
                <h4 className="clip text-xl font-semibold">
                  Turning Product Features into Benefits
                </h4>
                <p className="text-base font-extralight">
                  Our talented designers transform mundane product photographs
                  into compelling visual stories through the power of
                  infographics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whychooseus;
