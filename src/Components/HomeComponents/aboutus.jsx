import { Badge } from "@/Assets/SVGs/SVG";
import React from "react";
import Image from "next/image";
import PlayIcon from "@/Assets/SVGs/Play";
const AboutUs = () => {
  return (
    <div className="mt-[92px] mb-[92px]" id="about">
      <div className="container mx-auto">
        <div className="flex justify-between flex-col lg:flex-row gap-3 items-center mx-4 lg:h-[473px]">
          <div
            className="w-[648px] delay-[300ms] duration-[600ms] taos:translate-x-[200px] taos:opacity-0"
            data-taos-offset="400"
          >
            {/* About Content */}
            <Badge className="mb-[24px]" />
            <h1 className=" font-bold capitalize text-3xl leading-10 xl:text-5xl xl:leading-[60px]">
              Capturing the
              <span className="ml-3 clip">
                Essence of <br /> E-commerce Success
              </span>
            </h1>
            <h3 className="text-2xl font-light italic capitalize leading-[46px]">
              Bringing Your Products to Life Through Visual Storytelling
            </h3>
            <p className="text-[18px] text-[#556987]  leading-[30px]">
              Welcome to Product Paparazzi UK Limited, where we blend
              creativity, technology, and passion for creating stunning visual
              content that elevates e-commerce businesses to new heights.
              <br />
              <br />
              We are not just any product photography company; we are your
              partner in carving a unique identity for your brand and products,
              enabling you to stand out in the highly competitive e-commerce
              landscape
            </p>
          </div>
          <div className="relative ">
            {/* aboutImage */}
            {/* <div className=" absolute rounded-3xl bg-black opacity-[3%] top-0 w-[773px] h-[438px] left-[-236px]"></div> */}
            <Image
              width={500}
              height={500}
              className="object-cover overflow-hidden rounded-3xl mt-8 lg:mt-0 w-[500px] xl:w-[778px] h-[438px] mx-auto"
              src="/Images/video.png"
              // layout="fill"
            />
            <PlayIcon classNAME="absolute top-52 left-52 lg:left-48 xl:left-[300px] 2xl:left-[350px]" />
          </div>
        </div>
        <div className="flex justify-between items-center h-[110px] mt-16 mx-4 gap-4 lg:mt-[28px]">
          <div className="w-[421px]">
            <h4 className="clip text-xl font-semibold">Our Expertise</h4>
            <p className="text-base">
              As specialists in product photography, we understand that the
              perfect image is more than just a high-resolution photograph
              against a white background.{" "}
            </p>
          </div>
          <div className=" w-[390px]">
            <h4 className="clip text-xl font-semibold">
              Turning Product Features into Benefits
            </h4>
            <p className="text-base">
              Our talented designers transform mundane product photographs into
              compelling visual stories through the power of infographics.
            </p>
          </div>
          <div className=" w-[370px]">
            <h4 className="clip text-xl font-semibold">
              Bringing Your Products into the Real World
            </h4>
            <p className="text-base">
              Our lifestyle photography service adds a touch of authenticity to
              your product images by placing them in real-life situations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
