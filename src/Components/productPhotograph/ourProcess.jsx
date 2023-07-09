import React from "react";
import design_man from "../../Assets/img/designer_man.png";
import design_man2 from "../../Assets/img/Rectangle_1.png";
import Image from "next/image";
import {
  Box_dot,
  Circle_Dash,
  Process_animation_icon,
  Process_design,
  Process_integration,
  Process_optimization_svgrepo,
} from "@/Assets/SVGs/SVG";
import MyDetailsCard from "../Common/myDetailsCard";

const OurProcess = () => {
  return (
    <main className="container mx-auto">
      <section className="lg:flex justify-between gap-4 mx-4 mt-16">
        <div className="lg:w-[50%]">
          <h2 className="text-[28px] leading-[30px]  2xl:text-[48px] 2xl:leading-[60px] tracking-tight clip capitalize font-extrabold text-center lg:text-start text-black"> 
            Breath-taking <span className="clip">Video Infographics</span>{" "}
            <span className="clip">Revolutionizing</span> E-commerce Imagery
          </h2>
          <h6 className="italic text-[22px] leading-7 text-center lg:text-start 2xl:text-[32px] font-semibold 2xl:leading-10 tracking-tight mt-3">
            Transform Plain <span className="clip inline-block w-[180px]">Product Photos</span> into{" "}
            <span className="clip inline-block w-[318px]">Dynamic Visual Experiences</span>
          </h6>
          <p className="text-base xl:text-xl font-semibold xl:leading-7 text-center lg:text-start text-[#494949] mt-3">
            In today's fast-paced digital world, captivating your audience's
            attention has become more challenging. At Product Paparazzi UK
            Limited, we're pushing the boundaries of visual content by
            transforming static, plain white 180-degree images into engaging and
            immersive video infographics. Our innovative approach to product
            visualization allows e-commerce businesses to captivate and connect
            with customers in a previously unimaginable way.!
          </p>
        </div>
        <div className="">
          <Image src={design_man} className="w-[500px] h-[300px] xl:w-[735px] xl:h-[417px] mx-auto mt-8 xl:mt-0" />
        </div>
      </section>

      <section className="mt-20 flex justify-between flex-col xl:flex-row items-center gap-4 ">
        <div className="relative w-[500px] h-[500px] 2xl:w-[675px] 2xl:h-[675px] ">
          <Image
            src={design_man2}
            // width={675}
            // height={675}
            layout="fill"
            className="rounded-3xl object-cover "
          />
          <div className="absolute top-[-31px] right-0 lg:top-[-31px] lg:right-[-104px]">
            {" "}
            <Circle_Dash />
          </div>
          <div className="absolute -bottom-8 left-0 lg:-bottom-14 lg:-left-24 ">
            <Box_dot />
          </div>
        </div>
        <div className="xl:w-[50%]">
          <div>
            <h1 className="clip text-2xl xl:text-[48px] xl:leading-[60px] leading-8 italic mt-8 xl:mt-0 text-center xl:text-left">
              Our Process
            </h1>
            <p className="text-center xl:text-left">
              Our creative experts collaborate with you to understand your
              brand's story, goals, and target audience. We then brainstorm
              innovative ways to turn your plain product images into compelling
              video infographics that will capture the essence of your brand.
            </p>
          </div>
          <section className=" grid grid-cols-1 md:grid-cols-2  justify-items-center  gap-8  mt-12 text-center lg:text-left">
            <MyDetailsCard
              LOGO={Process_design}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Design"
              P="With a clear concept in mind, our skilled designers work on crafting visually striking infographics that highlight your product's features and benefits. We ensure the infographic design syncs with your brand identity and messaging."
            />
            <MyDetailsCard
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              LOGO={Process_animation_icon}
              H1="Animation"
              P="Our talented animators bring your static infographics to life, transforming them into dynamic, engaging video content. By adding motion and interactivity, we create a unique visual experience that keeps your customers hooked."
            />
            <MyDetailsCard
              LOGO={Process_integration}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Integration"
              P="We seamlessly integrate animated infographics into your product images, ensuring a cohesive and consistent visual presentation that enhances your e-commerce platform."
            />
            <MyDetailsCard
              LOGO={Process_optimization_svgrepo}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Optimization"
              P="We optimize video infographics for various devices and platforms, ensuring a smooth and enjoyable user experience for your customers, regardless of how they access your content."
            />
          </section>
        </div>
      </section>
    </main>
  );
};

export default OurProcess;
