import React, { useState } from "react";
import Image from "next/image";
import imageProductListin from "../../Assets/img/amazon_4_prodduct_listing.png";
import amazon_5_video from "../../Assets/img/amazon_5_video.png";
import amazon_6_imgs from "../../Assets/img/amazon_6_why_chose.png";
import PlayIcon from "@/Assets/SVGs/Play";
import {
  Amazon_automated_sponsored,
  Amazon_backend_search,
  Amazon_comprehensive,
  Amazon_comprehensive_and,
  Amazon_comprehensive_copywriting,
  Amazon_cretified_seo,
  Amazon_delivered_in,
  Amazon_experienced_certified,
  Amazon_five_informativesvg,
  Amazon_in_depth,
  Amazon_results_drived,
  Box_dot,
  ZIcon,
} from "@/Assets/SVGs/SVG";
import MyDetailsCardTwo from "@/Components/Common/DetailsCardTwo";
import Patter from "@/Assets/SVGs/Patter";
import Patter_color from "@/Assets/SVGs/Patter_color";
import Btn_Zoom from "../Common/btn_Zoom";
import VideoPlayerModal from "../Common/VideoPlayerModal";
const AmazonServices = () => {
  const [openVideoModal, setOpenVideoModal] = useState(false);
  const [videoData, setVideoData] = useState("");
  const handelVideoModal = (video) => {
    setOpenVideoModal(true);
    setVideoData(video);
  };
  return (
    <main
      className="min-h-[2768px] bg-cover mx-auto overflow-hidden mt-28"
      style={{
        backgroundImage: `url("background_.svg")`,
      }}
    >
      <div className="container mx-auto">
        <section className="lg:flex justify-between gap-4 mx-4 mt-28 xl:mt-48">
          <div className="lg:w-[50%] pt-20 xl:pt-0">
            <h2 className="text-[28px] leading-[30px]  2xl:text-[48px] 2xl:leading-[50px] tracking-tight clip capitalize font-bold text-center lg:text-start text-white">
              <span className="cliptwo">Product Paparazzi</span> Optimization
              Services The Key to{" "}
              <span className="cliptwo">Unlocking Your Amazon Success</span>
            </h2>
            <h6 className="italic text-[22px] leading-7 text-center lg:text-start 2xl:text-[32px] font-medium 2xl:leading-10 tracking-tight mt-3 text-white">
              Elevate <span className="cliptwo">Your Amazon Listing</span> with
              Expertly Crafted Content &{" "}
              <span className="cliptwo">Proven Optimization</span> Strategies
            </h6>
            <p className="text-base xl:text-xl font-semibold xl:leading-7 text-center lg:text-start text-[#D9D9D9] mt-3">
              Product Paparazzi Optimization Services is your ultimate partner
              in creating Amazon listings that not only captivate shoppers but
              also appeal to Amazon's algorithm. Our team of skilled Amazon
              copywriters and optimization experts craft engaging content,
              combining sales-inducing language with strategically selected
              keywords to maximize your product's visibility, traffic, and
              conversion rates.
            </p>
          </div>
          <div>
            <Image
              src={imageProductListin}
              className="w-[635px] h-[417px] lg:w-[600px] lg:h-[400px] 2xl:w-[735px] 2xl:h-[417px] mx-auto mt-8 xl:mt-0"
            />
          </div>
        </section>

        <section className="flex justify-between flex-col xl:flex-row  lg:gap-14 mx-4 mt-8">
          <div
            className="relative w-[600px] h-[600px] lg:h-[700px] 2xl:w-[795px] 2xl:h-[903px] mx-auto"
            onClick={() => handelVideoModal("videos/bg1.mp4")}
          >
            <Image
              src={amazon_5_video}
              // width={675}
              // height={675}
              layout="fill"
              className="rounded-3xl object-cover"
            />
            <div className="absolute left-[45%] top-[45%] 2xl:left-[45%]">
              <PlayIcon />
            </div>
            <div className="absolute -bottom-8 left-0 lg:-bottom-14 lg:-left-24 ">
              <box_dot />
            </div>
          </div>
          <div className="xl:w-[50%]">
            <div>
              <h6 className="clip text-2xl 2xl:text-[32px] xl:leading-7 2xl:leading-[43px] leading-8 italic mt-8 xl:mt-0 text-center xl:text-left 2xl:ml-4 cliptwo tracking-tight">
                Our Comprehensive Amazon Listing Optimization Process
              </h6>
            </div>
            <section className=" grid grid-cols-1 md:grid-cols-2  justify-items-center  gap-8  mt-4 mx-4 lg:mx-0 text-center lg:text-left">
              <MyDetailsCardTwo
                LOGO={Amazon_comprehensive}
                CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
                H1="Compelling and Keyword-Infused Title"
                P="Our experts create a concise, reader-friendly, and vivid title that incorporates the most relevant keywords, ensuring your product stands out in search results."
              />
              <MyDetailsCardTwo
                LOGO={Amazon_five_informativesvg}
                CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
                H1="Five Informative Bullet Points"
                P="We highlight the essential product information and key selling points in five persuasive bullet points, making it easy for potential buyers to grasp the unique benefits of your product."
              />
              <MyDetailsCardTwo
                LOGO={Amazon_comprehensive_and}
                CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
                H1="Comprehensive and Engaging Product Description"
                P="Our captivating product descriptions encompass everything from your product's features and benefits to brand story, items included, usage instructions, and other vital information, crafting a compelling narrative that drives conversions."
              />
              <MyDetailsCardTwo
                LOGO={Amazon_in_depth}
                CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
                H1="In-Depth Keyword Research"
                P="Utilizing cutting-edge AI and customized Amazon tools, we generate an extensive keyword research file, identifying the most effective keywords to enhance your product's visibility."
              />
              <MyDetailsCardTwo
                LOGO={Amazon_backend_search}
                CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
                H1="Backend Search Terms"
                P="We strategically incorporate backend search terms in your Seller Central account to capitalize on additional ranking opportunities and maximize your product's exposure."
              />
              <MyDetailsCardTwo
                LOGO={Amazon_automated_sponsored}
                CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
                H1="Automated Sponsored Advertising"
                P="We ensure your sponsored advertising campaigns start building data and history automatically, laying the groundwork for continuous improvement and optimization."
              />
            </section>
          </div>
        </section>

        <section className="flex justify-between flex-col xl:flex-row-reverse items-center xl:items-start lg:gap-14 mt-8 mx-4 ">
          <div className="w-[600px] h-[500px] xl:h-[675px] 2xl:w-[775px] 2xl:h-[875px] ">
            <Image
              src={amazon_6_imgs}
              width={742}
              height={634}
              // layout="fill"
              className="rounded-3xl object-cover"
            />
          </div>
          <div className="xl:w-[50%] mt-4">
            <div>
              <h6 className="clip text-2xl xl:text-[32px] xl:leading-[43px] leading-8 italic mt-8 xl:mt-0 text-center xl:text-left cliptwo tracking-tight">
                Why Choose Product Paparazzi Optimization Services?
              </h6>
            </div>
            <section className=" grid grid-cols-1 md:grid-cols-2  justify-items-center  gap-8 mt-12 mx-4 lg:mx-0 text-center lg:text-left">
              <MyDetailsCardTwo
                LOGO={Amazon_cretified_seo}
                CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
                H1="Certified Amazon SEO Consultants"
                P="Our team of experienced and certified Amazon product SEO consultants have a proven track record of creating profitable, appealing, and high-converting Amazon listings."
              />
              <MyDetailsCardTwo
                LOGO={Amazon_comprehensive_copywriting}
                CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
                H1="Comprehensive Copywriting Services"
                P="We provide a full suite of copywriting services, including keyword research, title creation, bullet points, product descriptions, backend search terms, and suggested PPC campaign keywords and search terms."
              />
              <MyDetailsCardTwo
                LOGO={Amazon_delivered_in}
                CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
                H1="Delivered in a Convenient Format"
                P="All copywriting materials are prepared and shared in an easy-to-use Word document, streamlining the process of implementing our optimization recommendations."
              />
              <MyDetailsCardTwo
                LOGO={Amazon_results_drived}
                CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
                H1="Results-Driven Approach"
                P="Our focus on combining persuasive content with effective optimization strategies ensures that your Amazon listing achieves maximum visibility, traffic, and conversions."
              />
            </section>
          </div>
        </section>
        <section className="flex justify-between flex-col lg:flex-row w-[80%] mx-auto lg:gap-14">
          <p className="mt-12 lg:w-[50%] text-center xl:text-left text-white">
            Don't leave your Amazon success to chance; partner with Product
            Paparazzi Optimization Services today and unlock the full potential
            of your Amazon listing.
          </p>
          <p className="mt-12 text-center xl:text-left text-white lg:w-[50%] lg:">
            Don't leave your Amazon success to chance; partner with Product
            Paparazzi Optimization Services today and unlock the full potential
            of your Amazon listing.
          </p>
        </section>
        <Btn_Zoom colorTrue={true} classNAME="pb-52" />
      </div>
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

export default AmazonServices;
