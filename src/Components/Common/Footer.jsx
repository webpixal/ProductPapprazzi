import {
  LogoProductPaparazzi,
  LogoPaymentMethod,
  LogoPhoneRound,
  LogoLightEmail,
  LogoCarbonMap,
  LogoFbLinkComponent,
} from "@/Assets/SVGs/SVG";
import React from "react";

const Footer = () => {
  return (
    <>
      <main className="flex flex-wrap justify-around mt-10 items-start mb-16 xl:ml-32 xl:mr-32">
        <div className="w-[366px] ">
          <div className="mt-4">
            <LogoProductPaparazzi />
          </div>
          <p className="text-[18px] font-bold mt-4">
            Launch your own Software As A Service Application with Flex
            Solutions.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <div>
              <LogoPhoneRound />
            </div>
            <p className="font-medium">+44 (0) 1234 567890</p>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <div>
              <LogoLightEmail />
            </div>
            <p className="font-medium">info@productpaparazzi.co.uk</p>
          </div>
          <div className="flex  gap-6 mt-4">
            <div>
              <LogoCarbonMap />
            </div>
            <p className="font-medium">
              Product Paparazzi UK Limited 3 Charndon Close, Barton Hill, Luton,
              Bedfordshire United Kingdom, LU3 4DU.
            </p>
          </div>
        </div>
        <div className="">
          <h5 className="text-[18px] font-bold mt-24">Service</h5>
          <div className="mt-8">
            <p className="text-[16px] font-medium leading-6 mb-4">
              Product Photography
            </p>
            <p className="text-[16px] font-medium leading-6 mb-4">
              Infographics services
            </p>
            <p className="text-[16px] font-medium leading-6 mb-4">
              Amazon Services
            </p>
            <p className="text-[16px] font-medium leading-6 mb-4">
              Graphic Design Services
            </p>
            <p className="text-[16px] font-medium leading-6 mb-4">
              Website Builds
            </p>
            <p className="text-[16px] font-medium leading-6 mb-4">
              Linkedin services.
            </p>
            <p className="text-[16px] font-medium leading-6 mb-4">
              Linkedin services.
            </p>
            <p className="text-[16px] font-medium leading-6">CV services</p>
          </div>
        </div>
        <div>
          <h5 className="text-[18px] font-bold mt-24">Remaining</h5>
          <div className="mt-8">
            <p className="text-[16px] leading-6 mb-9">Privacy Policy</p>
            <p className="text-[16px] font-medium leading-6 mb-9">
              Terms Of Use
            </p>
            <p className="text-[16px] font-medium leading-6 mb-9">
              Shipping Policy
            </p>
            <p className="text-[16px] font-medium leading-6 mb-9">
              User Content Agreement
            </p>
            <p className="text-[16px] font-medium leading-6">
              Refund And Returns Policy
            </p>
          </div>
        </div>
        <div>
          <h5 className="text-[18px] font-bold mt-24">Newsletter</h5>
          <button className="w-[226px] h-[46px] bg-white text-[#2A3342 border border-[#D5DAE1] text-[16px] rounded-[8px] mt-8">
            pat@shuffle.dev
          </button>
          <h5 className="text-[18px] font-bold mt-14">Product Paparazzi</h5>
          <p className="border-b-[1px] border-[#000000] mt-3 w-32 ml-3"></p>
          <div className="mt-3">
            <LogoFbLinkComponent />
          </div>
        </div>
        <div className=" flex flex-col justify-end items-end">
          <button className="btn_light_primary mt-[155px]">
            <span className="text-[#F0FDF4] font-medium">Subscribe</span>
          </button>
          <div className="mt-20">
            <LogoPaymentMethod />
          </div>
        </div>
      </main>
      <div className="h-[100px] shadow-2xl">
        <div className="pt-7">
          <h4 className="text-center font-bold">
            © 2023 Product Paparazzi. All rights reserved.
          </h4>
          <p className="text-center font-extralight">Powered By Al Jaami Technologies ltd</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
