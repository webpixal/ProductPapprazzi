import React from "react";
import imageCamera from "../../Assets/img/rectangle49.png";
import imageCamera2 from "../../Assets/img/rectangle50.png";
import imageCamera3 from "../../Assets/img/rectangle51.png";
import Image from "next/image";
import { Pattern, Pattern_colarings, ZIcon } from "@/Assets/SVGs/SVG";
import Patter_color from "@/Assets/SVGs/Patter_color";
import Patter from "@/Assets/SVGs/Patter";
import Btn_Zoom from "../Common/btn_Zoom";
const ImageEditor = () => {
  return (
    <main className="container mx-auto">
      <section className="lg:flex justify-between gap-4 mx-4 mt-16">
        <div className="lg:w-[50%]">
          <h2 className="text-[28px] leading-[30px]  xl:text-[48px] xl:leading-[60px] tracking-[-0.06rem] clip  text-center lg:text-start w-[779px] text-5xl font-semibold capitalize italic">
            Our e-commerce product image editing services are specifically
            tailored to the needs of commercial selling platforms.
          </h2>
          <h6 className="italic text-base leading-7 text-center xl:leading-[2.4375rem] lg:text-start mt-4 text-black text-[1.75rem] font-normal capitalize tracking-[-0.035rem]">
            We can help you improve your product photography, giving it a
            professional and modern look that resonates with potential buyers.
            Our services include creating Amazon lifestyle images, composite
            lifestyle images, Amazon infographic images, white background
            images, and more.
          </h6>
          <p className="text-center xl:text-left text-zinc-700 text-base xl:text-xl font-normal xl:leading-[30px] mt-4">
            We understand that each platform has its own requirements and rules
            when it comes to product photos. That's why we take care to ensure
            our edits meet those guidelines while still allowing your product to
            stand out from the competition. With our expertise in e-commerce
            image editing, you can rest assured that your products will be
            presented in the best light possible increasing conversions and
            boosting sales!
          </p>
        </div>
        <div className="mt-8 lg:mt-0">
          <Image src={imageCamera} />
        </div>
      </section>
      <section className="lg:flex flex-row-reverse justify-between gap-4 mx-4 mt-16 items-center">
        <div className="lg:w-[50%]">
          <h6 className="italic text-base leading-7 text-center xl:leading-[2.6875rem] lg:text-start mt-4 clip text-[1.5rem] font-semibold capitalize tracking-[-0.035rem]">
            We deliver images with at least 1000 pixels in length or width.
          </h6>
          <p className="text-center xl:text-left text-zinc-700 text-base xl:text-xl font-normal xl:leading-[30px] mt-4">
            All files are thoroughly optimized for the web, including being
            given search engine-friendly file names and formatted in
            commonly-used JPEG, PNG, GIF, or TIFF format. Our experienced team
            of editors uses Adobe Photoshop to professionally edit your product
            photos, ensuring a high-res finish that looks great on any device.
          </p>
          <p className="text-center xl:text-left text-zinc-700 text-base xl:text-xl font-normal xl:leading-[30px] mt-4">
            Using our professional product image editing services, you can boost
            conversions through improved visuals and maximize sales performance
            on any commercial platform. With expert knowledge of e-commerce
            platforms' rules and requirements mixed with our creative flair and
            attention to detail, you can depend on us to take your product
            photos to the next level.
          </p>
        </div>
        <div className="mt-8 lg:mt-0">
          <Image src={imageCamera2} />
        </div>
      </section>
      <section className="lg:flex justify-between gap-4 mx-4 mt-16 items-center">
        <div className="lg:w-[50%]">
          <h6 className="italic text-base leading-7 text-center xl:leading-[1.90625rem] lg:text-start mt-4 clip text-[1.5rem] font-semibold capitalize tracking-[-0.035rem]">
            Not only do we stay up to date with the latest trends in Amazon
            images, but we also adhere to Amazon's guidelines to ensure that
            your images meet all requirements and are ready for upload. This not
            only increases your chances of getting your listing approved but
            also helps your products stand out from the competition.
          </h6>
          <p className="text-center xl:text-left text-zinc-700 text-base xl:text-xl font-normal xl:leading-[30px] mt-4">
            In addition to image editing, we also provide performance
            evaluations at the ad-group level to monitor the effectiveness of
            your campaigns. With weekly analysis of search term reports and
            monthly sales snapshots, we can help you optimize your campaigns for
            maximum profitability.
          </p>
        </div>
        <div className="mt-8 lg:mt-0">
          <Image src={imageCamera3} />
        </div>
      </section>
      <section>
        <h6 className="text-center italic tracking-[ -0.04rem] text-2xl leading-6 lg:text-[32px] lg:leading-10 font-medium capitalize mt-14">
          Don't let <span className="clip inline-block lg:w-[10.5rem]">poor imagery</span> hold back your
          sales <span className="clip inline-block lg:w-[16.5rem]">potential on Amazon</span>. <br />
          <span className="clip inline-block lg:w-[6.5rem]">Trust us</span> to enhance your{" "}
          <span className="clip inline-block lg:w-[12.5rem]">product images</span> and{" "}
          <span className="clip inline-block lg:w-[19.5rem]">boost your sales success</span>.
        </h6>
      </section>
      <Btn_Zoom P="Book a Zoom call with us today to learn more about our" P2="Product Photography and enhance your product images and boost your sales success."/>
    </main>
  );
};

export default ImageEditor;
