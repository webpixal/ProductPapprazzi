import React from "react";
import Link from "next/link";
import { Facebook, Line, Linkdin, Twitter } from "@/Assets/SVGs/SVG";

const Hero = () => {
  return (
    <section
      className="thamnel-height  w-full bg-cover bg-center flex flex-col justify-center overflow-hidden blank_mode_2"
      // style={{
      //   backgroundImage: `url("home.png")`,
      // }}
    >
      {/* <div className="ml-10 xl:ml-40">
      <h1 className="text-white text-[30px] xl:text-[96px] font-semibold leading-10 xl:leading-[131px]">
        Amazon Service
      </h1>
      <p className="text-white text-[20px] leading-9">
        Home :: Amazon services
      </p>
    </div> */}
      <video
        autoPlay
        loop
        muted
        className="object-cover thamnel-height w-full z-[-1] -mt-[10rem]"
      >
        <source src="Videos/bg1.mp4" type="video/mp4" />
      </video>
      <div className="ml-10 xl:ml-40 text-white  max-[1280px]:-mt-72 xl:-mt-96 ">
        <h3 className="font-light tracking-[.35em]">Captivate</h3>
        <h2 className="text-5xl font-bold mt-[7px]">
          Your Audience at First Glance
        </h2>
        <p className="text-xl font-light mt-[14px]">
          Exceptional product photography shapes consumers' crucial initial
          <br />
          impressions, compelling them to explore and engage with your brand
          further.
        </p>
        <Link href="">
          <button className=" bgone rounded-full w-[123px] h-[48px] text-white mt-[31px]">
            <span className="">Read More</span>
          </button>
        </Link>
      </div>
      <div className="absolute mx-auto right-16 z-40">
        <span>
          <Line className="mb-[49px] ml-3 max-[1280px]:h-14 h-[85px] min-[1800px]:h-32 min-[1800px]:mt-8" />
        </span>
        <span>
          <Facebook className="mb-[49px] hover:bgone" />
          <Linkdin className="mb-[49px] " />
          <Twitter className="mb-[49px] " />
        </span>
        <span>
          <Line className="mb-[49px] ml-3 h-[85px] min-[1800px]:h-32 min-[1800px]:mt-8" />
        </span>
      </div>
    </section>
  );
};

export default Hero;
