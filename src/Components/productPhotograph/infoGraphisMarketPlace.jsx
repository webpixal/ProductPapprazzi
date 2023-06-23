import React from "react";
import {
  Info_arcticons_boost,
  Info_compative,
  Info_customer,
  Info_enhanced,
  Info_improved,
  Info_search,
  Info_shared,
  I,
  ZIcon
} from "@/Assets/SVGs/SVG";
import body_bildre from "../../Assets/img/zim_man.png"

import Patter_color from "@/Assets/SVGs/Patter_color";
import Patter from "@/Assets/SVGs/Patter";
import Image from "next/image";
import MyDetailsCardTwo from "../Common/detailsCardTwo";

const InfoGraphisMarketPlace = () => {
  return (
    <main
      className="min-h-[1768px] bg-cover mx-auto overflow-hidden mt-28"
      style={{
        backgroundImage: `url("background_.svg")`,
      }}
    >
      <div className="container mx-auto">
        <section className="container flex justify-between gap-4 flex-col xl:flex-row items-center mx-4 pt-24">
          <div className="md:w-[767px]">
            <h1 className=" text-[30px] mt-8 lg:mt-0 leading-[40px]  xl:text-[38px] xxl:48px xxl:leading-[60px] font-extrabold italic font-sans w-full text-cap capitalize text-white text-center xl:text-left">
              Dominate the
              <span className="cliptwo">Marketplace</span>
            </h1>
            <h6 className="capitalize italic text-xl xl:text-[32px] font-semibold xl:leading-8 left-5 text-white text-center xl:text-left mt-8 ">
              Turbocharge Your{" "}
              <span className="cliptwo">eBay and Amazon Listings</span> with
              Exceptional{" "}
              <span className="cliptwo">
                Product Photography and Persuasive Infographics
              </span>
            </h6>
            <p className="text-[20px] font-semibold leading-7 mt-3 text-white text-center xl:text-left">
              Implementing product and infographic images on selling platforms
              like eBay and Amazon can significantly impact your product
              listings' success and help drive sales. Here are the key benefits
              of incorporating these visual assets on online marketplaces
            </p>
          </div>
          <Image
            src={body_bildre}
            className=" w-[486px] h-[486px] md:w-[486px] mt-8 pt-8 md:mr-8 xxl:mr-0 lg:mt-0 lg:pt0 md:h-[486px]  xl:w-[486px] xl:h-[486px] rounded-xl"
          />
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:justify-items-center mx-4 gap-8 mt-12">
          <MyDetailsCardTwo
            H1="Enhanced Product Listings"
            LOGO={Info_enhanced}
            P="High-quality product images and informative infographics make your product listings stand out from the competition by providing a visually appealing and comprehensive representation of your products."
          />

          <MyDetailsCardTwo
            H1="Increased Buyer Confidence"
            LOGO={Info_arcticons_boost}
            P="Professional product images and infographics that accurately portray your products' features and benefits contribute to increased buyer confidence, as they can make informed decisions based on the information provided."
          />

          {/* <MyDetailsCardTwo
            H1="Increases Shareability"
            LOGO={Info_arcticons_boost}
            P="Infographics are highly shareable on social media platforms, making them an excellent tool for increasing brand exposure. By incorporating your professional product photography into infographics, you can create content that is more likely to be shared, liked, and commented on, ultimately reaching a broader audience."
          /> */}

          <MyDetailsCardTwo
            H1="Improved Conversion Rates"
            LOGO={Info_improved}
            P="Listings with attractive product images and informative infographics are more likely to engage potential buyers and encourage them to purchase, leading to higher conversion rates."
          />
          <MyDetailsCardTwo
            H1="Competitive Edge"
            LOGO={Info_compative}
            P="Incorporating product and infographic images into your listings helps differentiate. Your products from competitors, showcasing your unique selling points and making your products more appealing to potential buyers."
          />
          <MyDetailsCardTwo
            H1="Better Customer Understanding:"
            LOGO={Info_customer}
            P="Infographics can simplify complex product information and make it more digestible for customers, leading to a better understanding of your products and reduced chances of product returns."
          />
          <MyDetailsCardTwo
            H1="Enhanced Brand Image"
            LOGO={Info_enhanced}
            P="Professional product images and well-designed infographics can elevate your brand image on selling platforms, creating a consistent and polished appearance that attracts potential customers and fosters trust."
          />
          <MyDetailsCardTwo
            H1="Higher Search Rankings"
            LOGO={Info_search}
            P="Listings with high-quality images and informative content are more likely to rank higher in search results on selling platforms like eBay and Amazon, increasing visibility, and driving more traffic to your product listings."
          />
          <MyDetailsCardTwo
            H1="Shareability"
            LOGO={Info_shared}
            P="Visually appealing product images and infographics are more likely to be shared on social media and other platforms, increasing your products' exposure, and attracting new potential customers."
          />
          <div className="mt-20 ml-8 xl:ml-0">
            <p className="leading-6 font-normal text-white tracking-tight mt-2">
              By implementing product and infographic images on selling
              platforms like eBay and Amazon, you can enhance your product
              listings, improve buyer confidence, and drive sales.
            </p>
            <p className="leading-6 font-normal text-white tracking-tight mt-2">
              The combination of visually appealing and informative content is
              essential for standing out in a competitive online marketplace and
              attracting potential customers.
            </p>
          </div>
        </section>
        <section className="flex justify-center relative lg:mt-28 mx-4 pb-48 mt-6">
          <Patter classNAME="absolute left-0 top-36 " />
          <div className="grid justify-items-center">
            <h1 className="text-center clip text-3xl leading-10 italic font-extrabold cliptwo">
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
          <Patter_color classNAME="absolute hidden xl:block -top-28 xl:-top-24 xl:right-0 -right-16 " />
        </section>
      </div>
    </main>
  );
};

export default InfoGraphisMarketPlace;
