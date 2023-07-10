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
          <h2 className="text-[28px] leading-[30px]  xl:text-[48px] xl:leading-[50px] tracking-tight clip capitalize font-extrabold text-center lg:text-start ">
            Our e-commerce product image editing services are specifically
            tailored to the needs of commercial selling platforms.
          </h2>
          <h6 className="italic text-[22px] leading-7 text-center lg:text-start xl:text-[32px] font-semibold xl:leading-10 tracking-tight mt-3">
            We can help you improve your product photography, giving it a
            professional and modern look that resonates with potential buyers.
            Our services include creating Amazon lifestyle images, composite
            lifestyle images, Amazon infographic images, white background
            images, and more.
          </h6>
          <p className="text-base xl:text-xl font-semibold xl:leading-7 text-center lg:text-start text-[#494949] mt-8">
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
          <h2 className="italic tracking-tight clip capitalize  text-center lg:text-start text-2xl 2xl:text-[32px] font-semibold">
            We deliver images with at least 1000 pixels in length or width.
          </h2>
          <p className=" text-xl text-center lg:text-start  font-semibold mt-4">
            All files are thoroughly optimized for the web, including being
            given search engine-friendly file names and formatted in
            commonly-used JPEG, PNG, GIF, or TIFF format. Our experienced team
            of editors uses Adobe Photoshop to professionally edit your product
            photos, ensuring a high-res finish that looks great on any device.
          </p>
          <p className="text-base xl:text-xl font-semibold xl:leading-7 text-center lg:text-start text-[#494949]">
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
          <h2 className="italic tracking-tight clip capitalize  text-center lg:text-start 2xl:text-[32px text-2xl font-semibold">
            Not only do we stay up to date with the latest trends in Amazon
            images, but we also adhere to Amazon's guidelines to ensure that
            your images meet all requirements and are ready for upload. This not
            only increases your chances of getting your listing approved but
            also helps your products stand out from the competition.
          </h2>
          <p className=" text-xl text-center lg:text-start  font-semibold mt-4">
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
        <h6 className="text-center italic tracking-tight text-2xl leading-6 lg:text-[32px] lg:leading-10 font-semibold capitalize mt-14">
          Don't let <span className="clip">poor imagery</span> hold back your
          sales <span className="clip">potential on Amazon.</span> <br />
          <span className="clip">Trust us</span> to enhance your{" "}
          <span className="clip">product images</span> and{" "}
          <span>boost your sales success.</span>
        </h6>
      </section>
      <Btn_Zoom />
    </main>
  );
};

export default ImageEditor;
