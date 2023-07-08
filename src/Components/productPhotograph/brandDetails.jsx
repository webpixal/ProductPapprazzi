import {
  OurRequire,
  OurbrandeImg,
  OurBuildsTrust,
  OurConnect,
  OurEnhances,
  OurImproves,
  OurPurchasing,
  OurSupportsOmnichanner,
  OurmeetCustomers,
  ZIcon,
  Pattern,
  Pattern_colarings,
} from "@/Assets/SVGs/SVG";
import React from "react";
import MyDetailsCard from "../Common/myDetailsCard";
import Patter from "@/Assets/SVGs/Patter";
import Patter_color from "@/Assets/SVGs/Patter_color";
import Btn_Zoom from "../Common/btn_Zoom";

const BrandDetails = () => {
  return (
    <div className="container mx-auto">
      <main className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:justify-items-center  gap-8  mt-12">
        <MyDetailsCard
          LOGO={OurbrandeImg}
          H1="Reflects Your Brand Image"
          P="The quality of your product photos represents your brand's
          professionalism, value, creativity, and innovation. High-quality
          images convey to customers that your brand cares about their needs,
          encouraging loyalty and repeat purchases."
        />
        <MyDetailsCard
          LOGO={OurPurchasing}
          H1="Influences on Purchasing Decisions"
          P="Research shows that 93% of consumers consider visual appearance a critical factor in purchasing decisions. Professional product photography captures the attention of potential customers, increasing the likelihood of a sale."
        />
        <MyDetailsCard
          LOGO={OurRequire}
          H1="Requires Specialized Skills"
          P="Capturing exceptional product images requires specific techniques, professional equipment, and expertise in editing and retouching. Skilled product photographers ensure that your pictures stand out from the competition."
        />
        <MyDetailsCard
          CLASS={"mt-16"}
          LOGO={OurEnhances}
          H1="Enhances Engagement & Sets a High Standard"
          P="Professional images resonate with your audience, engaging them instantly. By setting a high standard for your product photography, you showcase your attention to detail, promote unique selling points, and differentiate your brand from competitors.."
        />
        <MyDetailsCard
          CLASS={"mt-16"}
          LOGO={OurmeetCustomers}
          H1="Meets Customer Expectations"
          P="Accurate, professional product photography helps set customer expectations, reducing the likelihood of returns due to discrepancies between the image and the actual product."
        />
        <MyDetailsCard
          CLASS={"mt-16"}
          LOGO={OurmeetCustomers}
          H1="Boosts Conversion Rates"
          P="High-quality images can lead to higher conversion rates, as customers are more likely to purchase when presented with visually appealing and informative product photos."
        />
        <MyDetailsCard
          CLASS={"mt-16"}
          LOGO={OurImproves}
          H1="Improves SEO"
          P="Search engines favour websites with high-quality, relevant images. Investing in professional product photography can help improve your search engine rankings, driving more traffic to your site."
        />
        <MyDetailsCard
          CLASS={"mt-16"}
          LOGO={OurConnect}
          H1="Connect multiple apps"
          P="The first business platform to bring together all of your products from one place."
        />
        <MyDetailsCard
          CLASS={"mt-16"}
          LOGO={OurSupportsOmnichanner}
          H1="Supports Omnichannel Marketing"
          P="Professional images can be used across various marketing channels, including website, email marketing, print advertising, and in-store displays, ensuring a cohesive brand experience for customers."
        />
      </main>
      <section className=" flex justify-between flex-col md:flex-row gap-4 lg:items-center lg:mx-8  mt-12  ">
        <MyDetailsCard
          LOGO={OurBuildsTrust}
          H1="Builds Trust"
          P="Customers who see high-quality, accurate product images are likelier to trust your brand and feel confident in their purchase."
        />
        <div className="w-[420px] xl:w-[652px] ">
          <p className="leading-6 font-normal text-[#494949] tracking-tight">
            Investing in professional product photography is crucial for
            e-commerce businesses looking to drive sales, increase brand
            awareness, and create a lasting impression on potential customers.
          </p>
          <p className="leading-6 font-normal text-[#494949]  tracking-tight">
            Embrace the power of visually stunning images to set your brand
            apart and enjoy the benefits of a successful e-commerce presence.
          </p>
        </div>
      </section>
      <Btn_Zoom />
    </div>
  );
};

export default BrandDetails;
