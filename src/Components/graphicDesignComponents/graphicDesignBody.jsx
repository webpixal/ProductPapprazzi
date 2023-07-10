import React from "react";
import graphic_pic1 from "../../Assets/img/graphic_1.png";
import Image from "next/image";
import Patter_color from "@/Assets/SVGs/Patter_color";
import {
  Graphic_branding_logo,
  Graphic_illustration,
  Graphic_marketing_materials,
  Graphic_packaging_design,
  Graphic_web_design,
  Graphich_social_media,
  ZIcon,
} from "@/Assets/SVGs/SVG";
import Patter from "@/Assets/SVGs/Patter";
import MyDetailsCard from "../Common/myDetailsCard";
import Btn_Zoom from "../Common/btn_Zoom";
const GraphicDesignBody = () => {
  return (
    <main className="container mx-auto">
      <section className="lg:flex justify-between items-center lg:gap-8 mx-4 mt-20">
        <div className="lg:w-[50%]">
          <h2 className="text-[28px] leading-[30px]  2xl:text-[48px] 2xl:leading-[50px] tracking-tight capitalize font-extrabold text-center lg:text-left italic">
            <span className="clip xl:inline-block xl:w-[265px]">Graphic design</span> is a broad field that
            encompasses a range of{" "}
            <span className="clip_secondary xl:inline-block xl:w-[275px]">services aimed</span>
          </h2>
          <h6 className="italic text-[22px] leading-7 text-center lg:text-start 2xl:text-[32px] font-semibold 2xl:leading-10 tracking-tight mt-3 capitalize">
            at <span className="clip xl:inline-block xl:w-[270px]">creating visual content </span> for
            different mediums, such as {" "}
            <span className="clip_secondary">print, digital, & </span>{" "}
            <span className="clip xl:inline-block xl:w-[140px]">multimedia</span>. Some of the most popular
            graphic design services
          </h6>
          <p className="text-xl xl:text-xl xl:leading-7 text-center lg:text-start mt-3 font-semibold">
            Overall, graphic design services play a vital role in creating
            visual content that communicates a message, enhances brand identity,
            and engages audiences across various mediums.
          </p>
        </div>
        <div>
          <Image
            src={graphic_pic1}
            className="w-[635px] h-[417px] lg:w-[600px] lg:h-[400px] 2xl:w-[735px] 2xl:h-[417px] mx-auto mt-8 xl:mt-0"
          />
        </div>
      </section>
      <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 mt-12 mx-4 lg:mx-0 text-center lg:text-left">
        <MyDetailsCard
          LOGO={Graphic_branding_logo}
          CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
          H1="Branding and Logo Design"
          P="Branding is an essential aspect of any business or organization. Graphic designers create logos, typography, color schemes, and other visual elements that represent the brand's identity and message."
        />
        <MyDetailsCard
          LOGO={Graphic_marketing_materials}
          CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
          H1="Marketing Materials"
          P="Share your product photography and infographics on social media platforms like Instagram, Facebook, Pinterest, Twitter, and LinkedIn to increase engagement and reach a broader audience."
        />
        <MyDetailsCard
          LOGO={Graphic_web_design}
          CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
          H1="Website Design"
          P="Graphic designers create user-friendly, visually appealing websites that are optimized for both desktop and mobile devices. They design website layouts, icons, images, and other elements that enhance the user experience and communicate the brand's message."
        />
        <MyDetailsCard
          LOGO={Graphich_social_media}
          CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
          H1="Social Media Design"
          P="Graphic designers create visual content for social media platforms such as Facebook, Instagram, Twitter, and LinkedIn. They create engaging images, graphics, and videos that help businesses to connect with their audiences and grow their online presence."
        />
        <MyDetailsCard
          LOGO={Graphic_packaging_design}
          CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
          H1="Packaging Design"
          P="Graphic designers create packaging designs that are visually appealing, informative, and functional. They design product labels, boxes, bags, and other packaging materials that attract customers and convey the brand's message."
        />
        <MyDetailsCard
          LOGO={Graphic_illustration}
          CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
          H1="Illustration"
          P="Graphic designers create illustrations for books, magazines, websites, and other mediums. They use various techniques such as vector graphics, digital painting, and hand-drawn sketches to create unique and engaging visual content."
        />
      </section>
      <Btn_Zoom />
    </main>
  );
};

export default GraphicDesignBody;
