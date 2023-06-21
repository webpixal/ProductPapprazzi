import {
  Line_left,
  ProducImajon,
  Product_Chart,
  Product_Cv,
  Product_Pay,
  Product_home,
  Product_linkedin_small,
  Product_network,
  Product_no_img,
  Product_pan_graphic,
  Product_personalguidance_personal,
  Product_photograph,
  Product_seo,
  Product_webbild,
} from "@/Assets/SVGs/SVG";
import React from "react";

const NavContext = () => {
  return (
    <section className="h-[313px] w-[965px] relative top-9 left-10 bg-white">
      <section className="py-8 px-8 flex justify-between relative">
        <div>
          <h1 className="flex items-center text-[22px] font-semibold leading-7 text-black  tracking-tight">
            <Product_photograph className="mr-3" /> Product Photography
          </h1>
          <div className="mt-3 ml-10">
            <p className="flex items-center text-[18px] leading-6 font-semibold tracking-tight">
              <Product_no_img className="mr-3" /> White background Photography
            </p>
            <p className="flex items-center text-[18px] leading-6 font-semibold tracking-tight mt-2">
              <Product_no_img className="mr-3" /> 180 Degree plain white imagery
            </p>
            <p className="flex items-center text-[18px] leading-6 font-semibold tracking-tight mt-2">
              <Product_no_img className="mr-3" /> Product Rotating Videos
            </p>
            <div className="absolute top-11 left-[22rem]">
            <Line_left />
            </div>
          </div>
         
        </div>
        <div>
          <h1 className="flex items-center text-[22px] font-semibold leading-7 text-black  tracking-tight">
            <Product_network className="mr-3" /> Infographics services
          </h1>
          <div className="mt-3 ml-10">
            <p className="flex items-center text-[18px] leading-6 font-semibold tracking-tight">
              <Product_Chart className="mr-3" /> Product Infographics
            </p>
            <p className="flex items-center text-[18px] leading-6 font-semibold tracking-tight mt-2">
              <Product_Chart className="mr-3" /> Video Infographics
            </p>
            <div className="absolute top-11 left-[41rem]">
            <Line_left />
            </div>
          </div>
         
        </div>
        <div>
          <h1 className="flex items-center text-[22px] font-semibold leading-7 text-[#0B002D] tracking-tight">
            <ProducImajon className="mr-3" /> Amazon Services
          </h1>
          <div className="mt-3 ml-10">
            <p className="flex items-center text-[18px] leading-6 font-semibold text-[#0B002D] tracking-tight">
              <Product_seo className="mr-3" /> SEO / Product copywriting
            </p>
            <p className="flex items-center text-[18px] leading-6 font-semibold text-[#0B002D] tracking-tight mt-2">
              <Product_Pay className="mr-3" /> Amazon PPC Services
            </p>
          </div>
        </div>
      </section>
      <div className="h-[1px] w-[552px] bgone relative left-48 -top-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8">
          <h2 className="flex items-center text-[22px] font-semibold leading-7 text-black  tracking-tight">
            <Product_personalguidance_personal className="mr-3" /> Personal
            e-Commerce Portraits
          </h2>
          <h2 className="flex items-center text-[22px] font-semibold leading-7 text-black  ">
            <Product_home className="mr-3" /> Commercial Product videos
          </h2>
          <h2 className="flex items-center text-[22px] font-semibold leading-7 text-black  ">
            <Product_pan_graphic className="mr-3" /> Graphic Design Services
          </h2>
          <h2 className="flex items-center text-[22px] font-semibold leading-7 text-black  ">
            <Product_webbild className="mr-3" /> Website Builds
          </h2>
          <h2 className="flex items-center text-[22px] font-semibold leading-7 text-black  ">
            <Product_linkedin_small className="mr-3" /> Linkedin services.
          </h2>
          <h2 className="flex items-center text-[22px] font-semibold leading-7 text-black  ">
            <Product_Cv className="mr-3" /> CV services
          </h2>
        </div>
    </section>
  );
};

export default NavContext;
