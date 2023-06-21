import {
  IconAmajone,
  IconAllIcuive,
  IconCamera,
  IconCvService,
  IconGraphicDesign,
  IconInfographics,
  IconLinkdin,
  IconPersone,
  IconPlay,
  IconRestart,
  IconTv,
  IconseoCopywriting,
  Iconvideoinfographics,
  IconwebBuild,
} from "@/Assets/SVGs/SVG";
import React from "react";

const Service = () => {
  return (
    <div className="mt-[92px] mb-[92px] flex flex-col items-center justify-center">
      <div className="2xl:container md:mx-auto ">
        <div className="flex flex-col flex-wrap justify-center items-center ">
          <h2 className="text-[32px] font-bold clip ">Service</h2>
          <h1 className="text-[64px] leading-[50px] font-semibold border_bottom">
            We Provide{" "}
          </h1>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <div className="servicecard ">
            <IconCamera />
            <p className="text-center mt-5 font-bold">
              White Background <br /> Photography
            </p>
          </div>
          <div className="servicecard">
            <IconRestart />
            <p className="text-center mt-5 font-bold">
              180 Degree <br />
              Plain White Imagery
            </p>
          </div>
          <div className="servicecard">
            <IconTv />
            <p className="text-center mt-5 font-bold">
              Product <br />
              Rotating Videos
            </p>
          </div>
          <div className="servicecard">
            <IconPersone />
            <p className="text-center mt-5 font-bold">
              Personal <br />
              E-Commerce Portraits
            </p>
          </div>
          <div className="servicecard">
            <IconPlay />
            <p className="text-center mt-5 font-bold">
              Commercial <br />
              Product videos
            </p>
          </div>
          <div className="servicecard">
            <IconInfographics />
            <p className="text-center mt-5 font-bold">
              Product <br />
              Infographics
            </p>
          </div>
          <div className="servicecard">
            <Iconvideoinfographics />
            <p className="text-center mt-5 font-bold">
              Video <br />
              Infographics
            </p>
          </div>
          <div className="servicecard">
            <IconseoCopywriting />
            <p className="text-center mt-5 font-bold">
              SEO / Product <br />
              Copywriting
            </p>
          </div>
          <div className="servicecard">
            <IconAmajone />
            <p className="text-center mt-5 font-bold">
              Amazon <br />
              PPC Services
            </p>
          </div>
          <div className="servicecard">
            <IconGraphicDesign />
            <p className="text-center mt-5 font-bold">
              Graphic <br />
              Design Services
            </p>
          </div>
          <div className="servicecard">
            <IconwebBuild />
            <p className="text-center mt-5 font-bold">Website Builds</p>
          </div>
          <div className="servicecard">
            <IconLinkdin />
            <p className="text-center mt-5 font-bold">Linkedin services.</p>
          </div>
          <div className="servicecard">
            <IconCvService />
            <p className="text-center mt-5 font-bold">CV services</p>
          </div>
          <div className="servicecard">
            <IconAllIcuive />
            <p className="text-center mt-5 font-bold">
              All Inclusive <br />
              Managed Services
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
