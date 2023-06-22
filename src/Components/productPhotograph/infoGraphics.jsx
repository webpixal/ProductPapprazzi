import React from "react";
import {
  Graphics_boost,
  Graphics_Encourage,
  Graphics_Simplify0,
  Graphics_enhanced,
  Graphics_facitates,
  Graphics_increases_share,
  Graphics_learning,
  Graphics_seo,
  Pattern,
  Pattern_colarings,
  ZIcon,
} from "@/Assets/SVGs/SVG";
import Img_sho from "../../Assets/img/Image 3 1.png";
import Image from "next/image";
import MyDetailsCardTwo from "../Common/DetailsCardTwo";
import Patter from "@/Assets/SVGs/Patter";
import Patter_color from "@/Assets/SVGs/Patter_color";
const InfoGraphics = () => {
  return (
    <main
      className="min-h-[1768px] bg-cover mx-auto overflow-hidden mt-28"
      style={{
        backgroundImage: `url("background_.svg")`,
      }}
    >
      <div className="container mx-auto">
        <section className="container flex justify-between flex-col xl:flex-row items-center mx-4 pt-24">
          <div className="md:w-[767px]">
            <h1 className="text-[30px] mt-8 lg:mt-0 leading-[40px]  xl:text-[38px] xxl:48px xxl:leading-[60px] font-extrabold italic font-sans w-full text-cap capitalize text-white">
              From Stunning Product Shots to <br className="hidden lg:block" />{" "}
              Informative <span className="cliptwo">Graphics</span> Skyrocket{" "}
              <br className="hidden lg:block" />
              Your Business with the
              <span className="cliptwo"> Power of Infographics</span>
            </h1>
            <p className="text-[20px] font-semibold leading-7 mt-8 text-white">
              Infographics are a powerful visual tool that can help convey
              complex information in an easily digestible format. By
              transforming your professional product photography into
              infographic images, you can enjoy numerous benefits that will
              elevate your brand's online presence and drive sales. Here are the
              key advantages of using infographics <br />
              based on your professional product photography:
            </p>
          </div>
          <Image
            src={Img_sho}
            className=" w-[486px] h-[486px] md:w-[486px] mt-8 pt-8 md:mr-8 xxl:mr-0 lg:mt-0 lg:pt0 md:h-[486px]  xl:w-[486px] xl:h-[486px] rounded-xl"
          />
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:justify-items-center  gap-4  mt-12">
          <MyDetailsCardTwo
            H1="Simplifies Complex Information"
            LOGO={Graphics_Simplify0}
            P="Infographics break down complex information into simple visual elements. By using professional product photography within an infographic, you can provide your audience with essential product details and features in a manner that is easy to understand and retain."
          />

          <MyDetailsCardTwo
            H1="Boosts Engagement"
            LOGO={Graphics_boost}
            P="The combination of professional photography and well-designed infographics is highly engaging. People are naturally drawn to visually appealing content, and infographics can capture and retain your audience's attention, leading to higher engagement levels."
          />

          <MyDetailsCardTwo
            H1="Increases Shareability"
            LOGO={Graphics_increases_share}
            P="Infographics are highly shareable on social media platforms, making them an excellent tool for increasing brand exposure. By incorporating your professional product photography into infographics, you can create content that is more likely to be shared, liked, and commented on, ultimately reaching a broader audience."
          />

          <MyDetailsCardTwo
            H1="Enhances Brand Recognition"
            LOGO={Graphics_enhanced}
            P="By using consistent design elements, colours, and typography in your infographics, you can reinforce your brand identity. Including professional product photography within these infographics will further boost brand recognition and create a cohesive brand experience for your customers."
          />
          <MyDetailsCardTwo
            H1="Supports SEO"
            LOGO={Graphics_seo}
            P="Infographics can improve your search engine rankings by generating backlinks when shared on other websites or social media platforms. By incorporating your professional product photography into infographics, you create high-quality, visually appealing content that is more likely to be linked to, increasing your website's authority and improving your SEO."
          />
          <MyDetailsCardTwo
            H1="Appeals to Different Learning Styles"
            LOGO={Graphics_learning}
            P="Infographics cater to various learning styles by combining visual elements, text, and professional photography. This makes the information more accessible to a diverse audience, increasing the likelihood of reaching and engaging a more comprehensive range of potential customers."
          />
          <MyDetailsCardTwo
            H1="Encourages Virality"
            LOGO={Graphics_Encourage}
            P="A well-crafted infographic that includes professional product photography has the potential to go viral. The more people share and engage with your infographic, the greater the exposure your brand and products will receive, potentially leading to increased sales and brand awareness."
          />
          <MyDetailsCardTwo
            H1="Facilitates Comparison"
            LOGO={Graphics_facitates}
            P="Infographics can effectively demonstrate the advantages of your products over competitors' offerings. By incorporating your professional product photography into a comparative infographic, you can highlight your product's unique selling points and features, making it easier for customers to choose your brand."
          />
          <div className="mt-20 ml-8 xl:ml-0">
            <p className="leading-6 font-normal text-white tracking-tight mt-2">
              Incorporating professional product photography into infographics
              offers numerous benefits, including simplifying complex
              information, boosting engagement, increasing shareability,
              enhancing brand recognition, supporting SEO, appealing to
              different learning styles, encouraging virality, and facilitating
              product comparison.
            </p>
            <p className="leading-6 font-normal text-white tracking-tight mt-2">
              By leveraging the power of infographics, you can elevate your
              marketing strategy and drive sales while providing your audience
              with valuable, visually appealing content.
            </p>
          </div>
        </section>
        <section className="flex justify-center relative lg:mt-28 mx-4 pb-48 mt-6">
          <Patter classNAME="absolute left-0 top-36 " />
          <div className="grid justify-items-center">
            <h1 className="text-center clip text-3xl leading-10 italic font-extrabold text-white">
              Don't leave opportunities on the table
            </h1>
            <p className="text-center italic text-2xl font-semibold leading-8 mt-3 relative z-10 text-white">
              Book a Zoom call with us today to learn more about our <br />
              White background Photography and enhance your product images and
              boost your sales success.
            </p>
            <button className="btn_light_primary2 mt-8 flex items-center justify-center  text-white">
              <ZIcon /> Book a Zoom call
            </button>
          </div>
          <Patter_color classNAME="absolute -top-28 xl:-top-24 xl:right-0 -right-16 " />
        </section>
      </div>
    </main>
  );
};

export default InfoGraphics;
