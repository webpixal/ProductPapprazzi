import React from "react";
import amazonimage1 from "../../Assets/img/amazon.png";
import amazonimage2 from "../../Assets/img/amazon_2.png";
import amazonimage3 from "../../Assets/img/amazone_3.png";
import Image from "next/image";
import {
  Amazon_accound,
  Amazon_brand,
  Amazon_comprehensivesvg,
  Amazon_customized,
  Amazon_experienced_certified,
  Amazon_peace_mind,
  Amazon_ppc,
  Amazon_ranking,
  Amazon_resuld_oriented,
  Box_dot,
} from "@/Assets/SVGs/SVG";
import MyDetailsCard from "../Common/myDetailsCard";
import PlayIcon from "@/Assets/SVGs/Play";
const ProductManagement = () => {
  return (
    <main className="container mx-auto">
      <section className="lg:flex justify-between gap-4 mx-4 mt-16">
        <div className="lg:w-[50%]">
          <h2 className="text-[28px] leading-[30px]  2xl:text-[48px] 2xl:leading-[60px] tracking-tight clip capitalize font-extrabold text-center lg:text-start text-black"> 
            <span className="clip">Product Paparazzi Management{" "}</span>  Services
            Your Ultimate <span className="clip">Amazon Success Partner</span>
          </h2>
          <h6 className="italic text-[22px] leading-7 text-center lg:text-start 2xl:text-[32px] font-semibold 2xl:leading-10 tracking-tight mt-1 2xl:mt-3">
            Comprehensive{" "}
            <span className="clip">Amazon Account Management {" "}</span> to <br />
            Streamline Your {" "}
            <span className="clip inline-block w-[410px]">Business and Maximize Profitability {" "}</span>
          </h6>
          <p className="text-base xl:text-xl font-semibold xl:leading-7 text-center lg:text-start text-[#494949] mt-1 2xl:mt-3">
            In the ever-evolving Amazon marketplace, many sellers find
            themselves overwhelmed by the complex rules and processes.
            Maintaining a healthy Seller Account is crucial to scaling your
            business, and that's where Product Paparazzi comes in. Our dedicated
            team of experts takes the stress out of managing your Amazon
            account, allowing you to focus on growing your business while we
            handle every aspect of your Seller Central account.
            <br />
            <br className="hidden 2xl:block"/>
            At Product Paparazzi, we understand that your time is precious. Our
            team of certified Amazon consultants will manage your Amazon
            account, freeing you to concentrate on planning and monitoring your
            business growth. We offer end-to-end solutions for sellers who want
            to succeed on Amazon without getting bogged down in the minutiae.
          </p>
        </div>
        <div className="">
          <Image
            src={amazonimage1}
            className="w-[635px] h-[417px] lg:w-[600px] lg:h-[417px] 2xl:w-[735px] 2xl:h-[417px] mx-auto mt-8 xl:mt-0"
          />
        </div>
      </section>

      <section className="flex justify-between flex-col xl:flex-row  gap-4 mx-4 mt-4">
        <div className="relative w-[500px] h-[500px] 2xl:w-[702px] 2xl:h-[701px] mx-auto">
          <Image
            src={amazonimage2}
            // width={675}
            // height={675}
            layout="fill"
            className="rounded-3xl object-cover"
          />
          <div className="absolute left-[45%] top-[45%] 2xl:left-[45%]">
            <PlayIcon />
          </div>
          <div className="absolute h-[120px] bg-white w-[120px] top-0 right-0">
            {" "}
          </div>
          <div className="absolute -bottom-8 left-0 lg:-bottom-8 lg:-left-24 ">
            <Box_dot />
          </div>
        </div>
        <div className="xl:w-[50%]">
          <div>
            <h1 className="clip text-2xl xl:text-[48px] xl:leading-10 2xl:leading-[60px] leading-8 italic mt-8 xl:mt-0 text-center xl:text-left 2xl:ml-4">
              Our wide range of <br className="hidden 2xl:block" /> services
              includes
            </h1>
          </div>
          <section className=" grid grid-cols-1 md:grid-cols-2  justify-items-center  gap-8  mt-4 mx-4 lg:mx-0 text-center lg:text-left">
            <MyDetailsCard
              LOGO={Amazon_ranking}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Amazon Ranking Optimization"
              P="We strategically enhance your product listings to achieve higher rankings and drive increased visibility."
            />
            <MyDetailsCard
              LOGO={Amazon_accound}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Amazon Account SEO"
              P="Our team implements proven SEO techniques to improve your product listings' performance in Amazon search results."
            />
            <MyDetailsCard
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              LOGO={Amazon_ppc}
              H1="Amazon PPC Management"
              P="We oversee your pay-per-click advertising campaigns, maximizing return on investment and ensuring optimal ad performance."
            />

            <MyDetailsCard
              LOGO={Amazon_brand}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Brand Growth Management"
              P="Our experts develop and implement strategies to grow your brand's presence, recognition, and reputation on Amazon."
            />
          </section>
        </div>
      </section>

      <section className="flex justify-between flex-col xl:flex-row-reverse items-center gap-4 mt-8 mx-4 ">
        <div className="w-[600px] h-[500px] xl:h-[675px] 2xl:w-[775px] 2xl:h-[875px] ">
          <Image
            src={amazonimage3}
            width={775}
            height={775}
            // layout="fill"
            className="rounded-3xl object-cover"
          />
          <p className="mt-12 text-center xl:text-left">
            Product Paparazzi Management Services is your one-stop solution for
            comprehensive and effective Amazon account management. Our team of
            experienced and certified Amazon consultants will handle every
            aspect of your Seller Central account, allowing you to focus on what
            matters most - growing your business. Don't let the complexities of
            Amazon hold you back; partner with Product Paparazzi today and
            experience the difference our expert management services can make.
          </p>
        </div>
        <div className="xl:w-[50%] mt-96 xl:mt-4">
          <div>
            <h1 className="clip text-2xl xl:text-[48px] xl:leading-[60px] leading-8 italic mt-8 xl:mt-0 text-center xl:text-left">
              More Than Just Virtual Assistants
            </h1>
            <h6 className="italic text-xl leading-6 xl:font-[32px] xl:leading-10 text-center xl:text-left">
              Why Choose Product Paparazzi Management Services?
            </h6>
            <p className="text-center xl:text-left">
              Our team consists of experienced and certified Amazon consulting
              experts who possess an in-depth understanding of the Amazon
              ecosystem. We go above and beyond to ensure your Amazon business
              not only survives but thrives, flourishes, and scales to new
              heights. Our results-driven, ROI-focused approach guarantees that
              your investment in our services will pay off in the form of
              increased sales and profitability.
            </p>
          </div>
          <section className=" grid grid-cols-1 md:grid-cols-2  justify-items-center  gap-8  mt-12 mx-4 lg:mx-0 text-center lg:text-left">
            <MyDetailsCard
              LOGO={Amazon_experienced_certified}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Experienced and Certified Professionals"
              P="Our team of Amazon experts has the knowledge and skills necessary to navigate the complexities of the Amazon marketplace, ensuring your business's success."
            />
            <MyDetailsCard
              LOGO={Amazon_comprehensivesvg}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Comprehensive Account Management"
              P="We provide a full suite of services, from optimization and SEO to PPC management and brand growth, ensuring every aspect of your Amazon business is taken care of."
            />

            <MyDetailsCard
              LOGO={Amazon_resuld_oriented}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Results-Oriented Approach"
              P="Our experts develop and implement strategies to grow your brand's presence, recognition, and reputation on Amazon."
            />

            <MyDetailsCard
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              LOGO={Amazon_customized}
              H1="Customized Solutions"
              P="We tailor our services to your unique needs and goals, providing personalized attention and support throughout the process."
            />
            <MyDetailsCard
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block md:ml-96"
              LOGO={Amazon_peace_mind}
              H1="Peace of Mind"
              P="With Product Paparazzi handling your Amazon account, you can rest easy knowing your business is in capable hands, leaving you free to focus on other aspects of growth."
            />
          </section>
        </div>
      </section>
    </main>
  );
};

export default ProductManagement;
