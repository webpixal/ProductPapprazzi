import React, { useState } from "react";
import MyDetailsCard from "../Common/myDetailsCard";
import Image from "next/image";
import commerImg1 from "../../Assets/img/comercial1.png";
import commerImg2 from "../../Assets/img/commercial2.png";
import commerImg3 from "../../Assets/img/commercial3.png";
import {
  Box_dot,
  Circle_Dash,
  Coloring_circle,
  Commercial_budget_friendly,
  Commercial_competitive_pricing,
  Commercial_customer_centric,
  Commercial_cutting_edge,
  Commercial_distribution,
  Commercial_industry,
  Commercial_post_production,
  Commercial_pre_product,
  Commercial_production,
  Commercial_timely_delivey,
} from "@/Assets/SVGs/SVG";
import PlayIcon from "@/Assets/SVGs/Play";
import Btn_Zoom from "../Common/btn_Zoom";
import VideoPlayerModal from "../Common/VideoPlayerModal";
const CommercialProductBody = () => {
  const [openVideoModal, setOpenVideoModal] = useState(false);
  const [videoData, setVideoData] = useState("");
  const handelVideoModal = (video) => {
    setOpenVideoModal(true);
    setVideoData(video);
  };
  return (
    <main className="container mx-auto">
      <section className="lg:flex justify-between lg:gap-8 mx-4 mt-20">
        <div className="lg:w-[50%]">
          <h2 className="text-[28px] leading-[30px]  2xl:text-[48px] 2xl:leading-[60px] capitalize font-bold text-center lg:text-left italic tracking-[-0.06rem]">
            <span className="clip inline-block w-[265px] 2xl:w-[475px]">
              Premium Video Production{" "}
            </span>{" "}
            Services Tailored for{" "}
            <span className="clip inline-block w-[255px] 2xl:w-[465px]">
              Television & E-commerce
            </span>{" "}
            Advertisements
          </h2>
          <h6 className="italic text-[22px] leading-7 text-center lg:text-start 2xl:text-[32px] font-medium 2xl:leading-10 tracking-[-0.04rem] mt-3 ">
            Your <span className="text-[#6940CC]">Vision</span>, Our{" "}
            <span className="text-[#6940CC]">Expertise</span>
          </h6>
          <p className="text-base  leading-[1.5rem] text-center lg:text-start mt-3 ">
            Welcome to Product Paparazzi UK Limited, where we turn your vision
            into a reality by crafting visually stunning and emotionally
            captivating video content that leaves a lasting impact on your
            audience. Our top-notch video production services are designed to
            promote your products on television and e-commerce platforms,
            helping you reach new heights of success, no matter your budget.{" "}
            <br />
            <br />
            At Product Paparazzi UK Limited, we believe in the power of visual
            storytelling to create an unbreakable bond between your brand and
            your customers. Our dedicated team of creative professionals,
            including directors, cinematographers, editors, and animators, work
            closely with you to understand your objectives and create a visual
            masterpiece that reflects your brand's essence.
          </p>
        </div>
        <div>
          <Image
            src={commerImg1}
            className="w-[635px] h-[417px] lg:w-[600px] lg:h-[400px] 2xl:w-[735px] 2xl:h-[417px] mx-auto mt-8 xl:mt-0"
          />
        </div>
      </section>

      <section className="flex justify-between flex-col xl:flex-row  lg:gap-14 mx-4 mt-12">
        <div
          className="relative w-[500px] h-[500px] xl:w-[702px] xl:h-[701px] mx-auto"
          onClick={() => handelVideoModal("videos/photo.webm")}
        >
          <Image
            src={commerImg2}
            // width={675}
            // height={675}
            layout="fill"
            className="rounded-3xl object-cover"
          />
          <div className="absolute top-[-31px] right-0 lg:top-[-45px] lg:right-[-12px]">
            <Circle_Dash />
          </div>
          <div className="absolute -bottom-8 left-0 lg:-bottom-14 lg:-left-24 ">
            <Box_dot />
          </div>
          <div className="absolute left-[45%] xl:left-[45%]  top-[45%] ">
            <PlayIcon />
          </div>
        </div>
        <div className="xl:w-[50%]">
          <div className="-ml-4 2xl:-ml-4">
            <h6 className="text-2xl xl:text-[32px] xl:leading-[2.6875rem] leading-5 italic mt-12 xl:mt-0 text-center xl:text-left 2xl:ml-4 clip font-medium tracking-[-0.04rem]">
              Our Comprehensive Video Production Services
            </h6>
          </div>
          <section className=" grid grid-cols-1 md:grid-cols-2  justify-items-center gap-8 mt-4 mx-4 lg:mx-0 text-center lg:text-left">
            <MyDetailsCard
              LOGO={Commercial_pre_product}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Pre-Production"
              P="From concept development and scriptwriting to storyboarding and casting, we lay the foundation for a successful video production by meticulously planning every detail."
            />
            <MyDetailsCard
              LOGO={Commercial_production}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Production"
              P="Our experienced crew utilizes state-of-the-art equipment and techniques to capture stunning visuals and audio, ensuring your product takes centre stage in the final product."
            />
            <MyDetailsCard
              LOGO={Commercial_post_production}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Post-Production"
              P="Our skilled editors and animators polish your video to perfection, adding visual effects, motion graphics, and sound design to create a seamless and engaging viewing experience."
            />
            <MyDetailsCard
              LOGO={Commercial_distribution}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Distribution"
              P="We optimize your video content for various platforms, ensuring maximum exposure for your brand on television, e-commerce websites, and social media channels."
            />
            <MyDetailsCard
              LOGO={Commercial_budget_friendly}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block lg:ml-96"
              H1="Budget-Friendly"
              P="Solutions for Every Client"
            />
          </section>
        </div>
      </section>

      <section className="flex justify-between flex-col xl:flex-row-reverse items-center lg:gap-14 mt-8 mx-4 ">
        <div className="w-[600px] relative h-[500px] xl:h-[675px] 2xl:w-[775px] 2xl:h-[875px] ">
          <Image
            src={commerImg3}
            width={742}
            height={634}
            // layout="fill"
            className="rounded-3xl object-cover"
          />
          <p className="mt-3 leading-[1.5rem]">
            Product Paparazzi UK Limited is your one-stop-shop for exceptional
            video production services that captivate, engage, and inspire your
            audience. <br /> <br />
            With our expertise, creativity, and dedication to customer
            satisfaction, we're confident in our ability to propel your brand to
            new heights. Don't let budget constraints hold you back from
            achieving your marketing goals; reach out to us today and discover
            how our tailored video production solutions can transform your
            product commercials and e-commerce advertisements into visual
            masterpieces.
          </p>
          <div className="absolute top-[-31px] right-0 lg:top-[-45px] lg:right-[-12px]">
            <Coloring_circle className="w-[130px]" />
          </div>
        </div>
        <div className="xl:w-[50%] mt-80 xl:mt-8">
          <div>
            <h6 className="text-2xl xl:text-[32px] font-medium xl:leading-[2.6875rem] leading-7 italic mt-8 xl:mt-0 text-center xl:text-left clip">
              <span className="cliptwo">Why Choose </span>
              Product Paparazzi UK Limited
            </h6>
            <h6 className="italic text-2xl leading-7 text-center lg:text-start 2xl:text-[32px] font-medium 2xl:leading-[2.6875rem] tracking-[-0.04rem] mt-3 ">
              We <span className="clip">understand </span> that every client's{" "}
              <span className="clip inline-block 2xl:w-[15rem]">
                needs & budget
              </span>{" "}
              constraints are unique
            </h6>
            <p className="text-base font-normal leading-[1.5rem] text-black text-center lg:text-start mt-3 ">
              That's why we offer tailored video production packages that cater
              to a wide range of budgets without compromising on quality.
              Whether you're an established brand seeking a high-end commercial
              or a small business looking for cost-effective promotional
              content, our team at Product Paparazzi UK Limited is committed to
              delivering exceptional results that exceed your expectations.
            </p>
          </div>
          <section className=" grid grid-cols-1 md:grid-cols-2  justify-items-center  gap-8 mt-12 mx-4 lg:mx-0 text-center lg:text-left">
            <MyDetailsCard
              LOGO={Commercial_industry}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Industry Expertise"
              P="Our team boasts years of experience in the video production industry, bringing a wealth of knowledge and creativity to every project we undertake."
            />
            <MyDetailsCard
              LOGO={Commercial_cutting_edge}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Cutting-Edge Technology"
              P="We invest in the latest video production equipment and software to ensure your content is of the highest quality, captivating your audience with breath-taking visuals and sound."
            />
            <MyDetailsCard
              LOGO={Commercial_customer_centric}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Customer-Centric Approach"
              P="We pride ourselves on our dedication to client satisfaction, working closely with you to understand your needs and deliver a final product that meets and surpasses your expectations."
            />
            <MyDetailsCard
              LOGO={Commercial_timely_delivey}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Timely Delivery"
              P="We understand the importance of time in today's fast-paced business world and are committed to completing your project within the agreed-upon timeframe."
            />
            <MyDetailsCard
              LOGO={Commercial_competitive_pricing}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block lg:ml-96"
              H1="Competitive Pricing"
              P="Our flexible pricing options cater to a wide range of budgets, ensuring you receive the best value for your investment."
            />
          </section>
        </div>
      </section>
      <Btn_Zoom
        P="Book a Zoom call with us today to learn more about our"
        P2="Commercial Product and take the first step in building your presence and authority on LinkedIn."
      />
      <>
        {openVideoModal && (
          <VideoPlayerModal
            handelCloseModal={() => setOpenVideoModal(false)}
            video={videoData}
          />
        )}
      </>
    </main>
  );
};

export default CommercialProductBody;
