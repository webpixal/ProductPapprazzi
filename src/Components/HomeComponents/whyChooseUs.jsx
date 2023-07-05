import React from "react";
import Image from "next/image";
import { Box_dot } from "@/Assets/SVGs/SVG";
import { Circle_Dash } from "@/Assets/SVGs/SVG";
import whyChoseimg from "../../Assets/img/why_chise_thamnel.png"
const Whychooseus = () => {
  return (
    <div className="mt-[92px] mb-[92px]">
      <div className="container md:mx-auto">
        <div className="container flex justify-between flex-col lg:flex-row items-center h-[775px]">
          <div
            className="w-[775px] delay-[300ms] duration-[600ms] taos:translate-x-[200px] taos:opacity-0"
            data-taos-offset="400"
          >
            {/* About Content */}
            <div className="flex items-center justify-between flex-col lg:flex-row w-[675] h-[500px] 2xl::w-[673px] 2xl:h-[675px] mx-auto lg:mx-0 lg:mt-24 xl:mt-0 relative ">
              {/* aboutImage */}
              <Image
                width={500}
                height={500}
                className="object-cover overflow-hidden rounded-3xl mt-8 lg:mt-0 w-[500px] xl:w-[716px] h-[438px] lg:h-[674px] mx-auto lg:ml-3"
                src={whyChoseimg}
              />
              <Circle_Dash className="absolute z-10 top-[-31px] right-10 lg:top-[-100px] lg:right-[88px] xl:top-[-31px] xl:right-[-70px]" />
              <Box_dot className="absolute z-10 -bottom-8 left-0 lg:-bottom-14 lg:-left-12 " />
            </div>
          </div>
          <div className="relative">
            {/* Why Choose Us Points*/}
            <h1 className="text-5xl font-bold pt-28 pb-16">Why Choose Us</h1>
            <div className="grid xl:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 lg:mr-8 mr-0">
              <div className=" w-[323px] mb-5 mr-5">
                <h4 className="clip text-xl xl:text-[48px] xl:leading-10 font-semibold">
                  Our Expertise
                </h4>
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
              <div className="w-[323px]  mb-5 mr-5">
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
              <div className="w-[323px] mb-5 mr-5 relative xl:left-52">
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
