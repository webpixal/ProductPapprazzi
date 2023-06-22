import React from "react";
import MyDetailsCard from "../Common/myDetailsCard";
import {
  Website,
  Display,
  Trade,
  Printer,
  Presentation,
  Press,
  Advertisement,
  Ecommerce,
  Email_marketing,
  Social_media,
} from "@/Assets/SVGs/SVG";

const InfographicDetails = () => {
  return (
    <div className="container mx-auto">
      <main className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center mx-4 mt-20">
        <MyDetailsCard
          LOGO={Website}
          H1="Website"
          P="Feature product photography and infographics on your website, such as on product pages, blog posts, or dedicated landing pages, to provide valuable information and showcase your products effectively."
        />
        <MyDetailsCard
          LOGO={Social_media}
          H1="Social Media"
          P="Share your product photography and infographics on social media platforms like Instagram, Facebook, Pinterest, Twitter, and LinkedIn to increase engagement and reach a broader audience."
        />
        <MyDetailsCard
          LOGO={Email_marketing}
          H1="Email Marketing"
          P="Incorporate product photography and infographics into your email marketing campaigns to showcase product features, announce new products, or offer exclusive promotions."
        />

        <MyDetailsCard
          CLASS="mt-8"
          LOGO={Ecommerce}
          H1="E-commerce Platforms"
          P="Incorporate product photography and infographics into your email marketing campaigns to showcase product features, announce new products, or offer exclusive promotions."
        />
        <MyDetailsCard
          CLASS="mt-8"
          LOGO={Email_marketing}
          H1="Email Marketing"
          P="Display your product photography and infographics on e-commerce platforms like Amazon, eBay, or Etsy to give shoppers essential information and make your listings stand out."
        />
        <MyDetailsCard
          CLASS="mt-8"
          LOGO={Advertisement}
          H1="Online Advertisements"
          P="Use product photography and infographics in your online advertisements, such as Google Ads or social media sponsored posts, to attract potential customers and increase click-through rates."
        />
        <MyDetailsCard
          CLASS="mt-8"
          LOGO={Press}
          H1="Press Releases"
          P="Include product photography and infographics in press releases to enhance the visual appeal and provide journalists with valuable information about your products."
        />
        <MyDetailsCard
          CLASS="mt-8"
          LOGO={Presentation}
          H1="Slide Presentations"
          P="Incorporate product photography and infographics in slide presentations for webinars, conferences, or sales pitches to effectively showcase your products and their unique features."
        />
        <MyDetailsCard
          CLASS="mt-8"
          LOGO={Printer}
          H1="Print Marketing Materials"
          P="Use your product photography and infographics in print marketing materials such as brochures, catalogues, flyers, and direct mail campaigns to provide visually appealing and informative content."
        />
        <MyDetailsCard
          CLASS="mt-8"
          LOGO={Trade}
          H1="Trade Shows and Events"
          P="Display product photography and infographics at trade shows, exhibitions, or other events to attract attention and provide visitors with essential information about your products."
        />
        <div className="w-[652px] mt-28 lg:ml-56">
          <p className="leading-6 font-normal text-[#494949] tracking-tight">
            By leveraging product photography and infographics across multiple
            channels and platforms, you can create a cohesive and engaging brand
            experience for your customers, ultimately driving increased
            awareness, engagement, and sales.
          </p>
        </div>
      </main>
    </div>
  );
};

export default InfographicDetails;
