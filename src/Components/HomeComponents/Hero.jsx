import React from "react";
import Link from "next/link";
import { Facebook, Line, Linkdin, Twitter } from "@/Assets/SVGs/SVG";

const Hero = () => {
  return (
    <div className="relative flex justify-center items-center overflow-hidden ">
      {/* <div className=" 2xl:container z-40">
        <div className=" w-[642px] h[77px] text-white">
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
          <Link href="/deshboard">
            <button className=" bgone link w-[123px] h-[48px] text-white mt-[31px]">
              <span className="z-50 relative">Read More</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-no-repeat  h-[80vh] bg-center bg-cover  bg-blend-overlay">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 object-cover  h-[100vh] xl:h-[80vh] w-full z-[-1] "
        >
          <source src="Videos/bg1.mp4" type="video/mp4" />
        </video>
      </div> */}
      <div className="absolute mx-auto right-16 z-40">
        <span>
          <Line className="mb-[49px] ml-3" />
        </span>
        <span>
          <Facebook className="mb-[49px] hover:bgone" />
          <Linkdin className="mb-[49px] " />
          <Twitter className="mb-[49px] " />
        </span>
        <span>
          <Line className="mb-[49px] ml-3" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
