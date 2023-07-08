import React from "react";
import MyDetailsCard from "../Common/myDetailsCard";
import {
  Be_emotion,
  Be_enhance,
  Be_improved,
  Be_increase,
  Be_stand,
  Box_dot,
  Circle_Dash,
  ZIcon,
} from "@/Assets/SVGs/SVG";
import Image from "next/image";
import cameraman from "../../Assets/img/camera_man.png";
import Patter_color from "@/Assets/SVGs/Patter_color";
import Patter from "@/Assets/SVGs/Patter";
import Btn_Zoom from "../Common/btn_Zoom";
const VideoInfographics = () => {
  return (
    <main className="container mx-auto">
      <section className="mx-4 mt-20 flex justify-between flex-col xl:flex-row-reverse items-center gap-4 ">
        <div className="relative w-[500px] h-[500px] 2xl:w-[675px] 2xl:h-[675px] ">
          <Image
            src={cameraman}
            // width={675}
            // height={675}
            layout="fill"
            className="rounded-3xl object-cover "
          />
          <div className="absolute top-[-4rem] right-0 2xl:top-[-31px] 2xl:right-[-104px]">
            {" "}
            <Circle_Dash />
          </div>
        </div>
        <div className="xl:w-[50%]">
          <div>
            <h1 className="clip text-2xl xl:text-[48px] xl:leading-[60px] leading-8 italic mt-8 xl:mt-0 text-center xl:text-left">
              The Benefits of Video Infographics
            </h1>
          </div>
          <section className=" grid grid-cols-1 md:grid-cols-2  justify-items-center gap-8  mt-12 text-center lg:text-left">
            <MyDetailsCard
              LOGO={Be_stand}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Stand Out from the Crowd"
              P="Our cutting-edge video infographics will set your products apart from the competition, grabbing your customers' attention and making a lasting impression."
            />
            <MyDetailsCard
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              LOGO={Be_enhance}
              H1="Enhanced Engagement"
              P="The combination of motion, visuals, and storytelling captivates your audience and keeps them engaged, increasing the chances of conversion."
            />
            <MyDetailsCard
              LOGO={Be_improved}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Improved Comprehension"
              P="Video infographics simplify complex information and make it easier for your customers to understand your product's features, benefits, and unique selling points."
            />
            <MyDetailsCard
              LOGO={Be_emotion}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Emotional Connection"
              P="Our video infographics tap into your customers' emotions, creating a powerful connection between them and your brand."
            />
          </section>
        </div>
      </section>
      <section className="flex justify-between flex-col xl:flex-row items-center mt-8">
        <MyDetailsCard
          LOGO={Be_increase}
          CLASS="lg:w-[50%] mx-auto flex flex-col items-center xl:items-start text-center md:text-left"
          H1="Increased Share ability"
          P="Compelling video content is more likely to be shared on social media, expanding your reach and amplifying your brand's presence."
        />
        <div className="lg:w-[50%] mt-4 xl:mt-0">
          <h6 className="text-center xl:text-left">
            At Product Paparazzi UK Limited, our innovative video infographics
            are designed to turn heads and leave a lasting impact. Transforming
            plain white 180-degree images into dynamic visual experiences, we
            help your e-commerce business stand out, engage your audience, and
            drive conversions. Let us redefine your visual content strategy and
            propel your brand to new heights. Contact us today to experience the
            transformative power of video infographics.
          </h6>
        </div>
      </section>
      <Btn_Zoom />
    </main>
  );
};

export default VideoInfographics;
