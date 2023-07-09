import React from "react";
import gym_images from "../../Assets/img/gym.png";
import Image from "next/image";

const GymSwoleMate = () => {
  return (
    <main className="container mx-auto mt-28">
      <div className="flex justify-between flex-col lg:gap-4 lg:flex-row items-center mx-4">
        <div className="lg:w-[50%]">
          <h1 className="text-center lg:text-left text-[30px] leading-[40px]  xl:text-[48px] max-w-[739px] xl:leading-[60px] font-extrabold italic font-sans w-full xl:w-9/12 text-cap capitalize">
            Bey ond the{" "}
            <span className="text-[#F02E6B]">Lens</span>
          </h1>
          <p className="text-2xl text-center lg:mt-8 lg:text-left lg:text-[32px] font-semibold italic tracking-tight">
            <span className="clip">Exploring {" "}</span> the Multifaceted Use of  {" "}
            <span className="clip inline-block min-w-[280px]">Product Photography  {" "}</span> <br />
            and <span className="clip inline-block min-w-[145px]">Infographics</span> for <span className="clip inline-block min-w-[280px]">Maximum Impact</span>
          </p>
          <p className="lg:text-[20px] font-semibold lg:mt-4 lg:leading-7 text-center lg:text-left">
            Product photography with supporting infographics can be utilized
            across various platforms and marketing channels to maximize your
            brand's exposure and reach. Here is a list of places where you can
            use these assets to engage your audience and boost sales
          </p>
        </div>
        <div className="mt-8 xl:mt-0">
          <Image src={gym_images} al className="w-[777px] h-[417px]" />
        </div>
      </div>
    </main>
  );
};

export default GymSwoleMate;
