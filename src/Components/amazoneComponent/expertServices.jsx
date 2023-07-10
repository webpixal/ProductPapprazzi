import Patter from "@/Assets/SVGs/Patter";
import Patter_color from "@/Assets/SVGs/Patter_color";
import {
  Amazon_acos_roas,
  Amazon_campaign_setup,
  Amazon_keyword_research,
  Amazon_performanch_reporting,
  Amazon_ppc_campaing,
  ZIcon,
  Amazon_expertise,
  Amazon_customised_solutions,
  Amazon_data_driven,
  Amazon_cost_effective,
  Amazon_ongoing_support,
  Circle_Dash,
  Box_dot,
  Coloring_circle,
} from "@/Assets/SVGs/SVG";
import MyDetailsCard from "../Common/myDetailsCard";
import amazon_img_7 from "../../Assets/img/amazon_7_content_marketing.png";
import amazon_img_8 from "../../Assets/img/amazon_8_why_chose_2.png";
import amazon_img_9 from "../../Assets/img/amazon_9_why_chose_3.png";
import Image from "next/image";
import PlayIcon from "@/Assets/SVGs/Play";
import Btn_Zoom from "../Common/btn_Zoom";
import VideoPlayerModal from "../Common/VideoPlayerModal";
import { useState } from "react";
const ExpertServices = () => {
  const [openVideoModal, setOpenVideoModal] = useState(false);
  const [videoData, setVideoData] = useState("");
  const handelVideoModal = (video) => {
    setOpenVideoModal(true);
    setVideoData(video);
  };
  return (
    <main className="container mx-auto">
      <section className="lg:flex justify-between lg:gap-8 mx-4 mt-18">
        <div className="lg:w-[50%]">
          <h2 className="text-[28px] leading-[30px]  2xl:text-[48px] 2xl:leading-[50px] tracking-tight capitalize font-extrabold text-center lg:text-left italic ">
            Master Your <span className="clip">Amazon PPC Campaigns</span> with
            Our <span className="clip">Expert Services</span>
          </h2>
          <h6 className="italic text-[22px] leading-7 text-center lg:text-start 2xl:text-[32px] font-semibold 2xl:leading-10 tracking-tight mt-3 capitalize">
            <span className="clip">Boost Sales</span> and{" "}
            <span className="clip">Maximize Profit Margins</span> through{" "}
            <span className="clip">Effective PPC Management</span>
          </h6>
          <p className="text-base xl:text-xl font-semibold xl:leading-7 text-center lg:text-start mt-3 ">
            Amazon PPC (Pay-Per-Click) campaigns are a powerful tool for sellers
            looking to promote their products and drive sales. However, managing
            these campaigns effectively requires a thorough understanding of
            spending control, ACOS (Advertising Cost of Sales), and ROAS (Return
            on Ad Spend) metrics. That's where our Amazon PPC Services come in,
            providing expert guidance and management to help you optimize your
            campaigns and achieve a healthy profit margin.
          </p>
        </div>
        <div>
          <Image
            src={amazon_img_7}
            className="w-[635px] h-[417px] lg:w-[600px] lg:h-[400px] 2xl:w-[735px] 2xl:h-[417px] mx-auto mt-8 xl:mt-0"
          />
        </div>
      </section>

      <section className="flex justify-between flex-col xl:flex-row  lg:gap-14 mx-4 mt-8">
        <div
          className="relative w-[500px] h-[500px] xl:w-[702px] xl:h-[701px] mx-auto"
          onClick={() => handelVideoModal("videos/photo.webm")}
        >
          <Image
            src={amazon_img_8}
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
          <div className="absolute left-[-20%] xl:left-[45%] top-[45%] 2xl:left-[45%]">
            <PlayIcon />
          </div>
        </div>
        <div className="xl:w-[50%]">
          <div className="-ml-4 2xl:-ml-4">
            <h1 className="clip text-2xl 2xl:text-[48px] xl:leading-10 2xl:leading-[60px] leading-5 italic mt-8 xl:mt-0 text-center xl:text-left 2xl:ml-4 clip">
              Our Comprehensive Amazon PPC Management Services
            </h1>
            <p className="text-center lg:text-left 2xl:ml-4">
              Our team of Amazon advertising specialists is dedicated to helping
              you harness the full potential of PPC campaigns. We offer a wide
              range of services, including
            </p>
          </div>
          <section className=" grid grid-cols-1 md:grid-cols-2  justify-items-center gap-8 mt-4 mx-4 lg:mx-0 text-center lg:text-left">
            <MyDetailsCard
              LOGO={Amazon_ppc_campaing}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="PPC Campaign Strategy"
              P="We work with you to develop a customized PPC strategy, taking into account your goals, budget, and target audience."
            />
            <MyDetailsCard
              LOGO={Amazon_keyword_research}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Keyword Research"
              P="Our experts conduct extensive keyword research to identify the most relevant and profitable keywords for your campaigns."
            />
            <MyDetailsCard
              LOGO={Amazon_campaign_setup}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Campaign Setup and Management"
              P="We handle the entire process of setting up and managing your PPC campaigns, continuously monitoring performance and making adjustments as needed to optimize results."
            />
            <MyDetailsCard
              LOGO={Amazon_acos_roas}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="ACOS and ROAS Optimization"
              P="Our team focuses on effectively managing your ACOS and ROAS metrics, ensuring that your campaigns generate sales while maintaining a healthy profit margin."
            />
            <MyDetailsCard
              LOGO={Amazon_performanch_reporting}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block lg:ml-96"
              H1="Performance Reporting and Analysis"
              P="We provide regular reports and in-depth analysis of your PPC campaigns, giving you valuable insights into their performance and areas for improvement."
            />
          </section>
        </div>
      </section>

      <section className="flex justify-between flex-col xl:flex-row-reverse items-center lg:gap-14 mt-8 mx-4 ">
        <div className="w-[600px] relative h-[500px] xl:h-[675px] 2xl:w-[775px] 2xl:h-[875px] ">
          <Image
            src={amazon_img_9}
            width={742}
            height={634}
            // layout="fill"
            className="rounded-3xl object-cover"
          />
          <div className="absolute top-[-31px] right-0 lg:top-[-45px] lg:right-[-12px]">
            <Coloring_circle />
          </div>
        </div>
        <div className="xl:w-[50%] mt-12 lg:mt-4">
          <div>
            <h1 className="clip text-2xl xl:text-[48px] xl:leading-[60px] leading-8 italic mt-8 xl:mt-0 text-center xl:text-left clip">
              Why Choose Our Amazon PPC Services?
            </h1>
          </div>
          <section className=" grid grid-cols-1 md:grid-cols-2  justify-items-center  gap-8 mt-12 mx-4 lg:mx-0 text-center lg:text-left">
            <MyDetailsCard
              LOGO={Amazon_expertise}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Expertise"
              P="Our team of Amazon advertising specialists has the knowledge and experience necessary to create and manage high-performing PPC campaigns."
            />
            <MyDetailsCard
              LOGO={Amazon_customised_solutions}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Customised Solutions"
              P="We tailor our PPC management services to your unique needs and goals, ensuring that your campaigns deliver the best possible results."
            />
            <MyDetailsCard
              LOGO={Amazon_data_driven}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Data-Driven Approach"
              P="We utilize advanced analytics and reporting tools to monitor and optimize your PPC campaigns, making data-driven decisions to maximize your ROI."
            />
            <MyDetailsCard
              LOGO={Amazon_cost_effective}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Cost-Effective"
              P="Our services are designed to help you control spending and achieve a healthy profit margin, ensuring that your investment in PPC advertising pays off."
            />
            <MyDetailsCard
              LOGO={Amazon_ongoing_support}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Ongoing Support"
              P="Our team is committed to your success, providing ongoing support and guidance to help you continually improve and refine your PPC campaigns."
            />
          </section>
        </div>
      </section>
      <section className="flex justify-between flex-col lg:flex-row w-[80%] mx-auto lg:gap-14">
        <p className="mt-12 lg:w-[50%] text-center xl:text-lef">
          Don't leave your Amazon success to chance; partner with Product
          Paparazzi Optimization Services today and unlock the full potential of
          your Amazon listing.
        </p>
        <p className="mt-12 text-center xl:text-lef lg:w-[50%] lg:">
          Don't leave your Amazon success to chance; partner with Product
          Paparazzi Optimization Services today and unlock the full potential of
          your Amazon listing.
        </p>
      </section>
      <Btn_Zoom />
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

export default ExpertServices;
