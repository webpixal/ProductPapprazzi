import InfographicHero from "@/Components/infographicComponents/infographicHero";
import React from "react";
import { Fira_Sans_Extra_Condensed } from "next/font/google";
import GymSwoleMate from "@/Components/infographicComponents/gymSwoleMate";
import InfographicDetails from "@/Components/infographicComponents/infographicDetails";
import InfoGraphisMarketPlace from "@/Components/productPhotograph/infoGraphisMarketPlace";
import OurProcess from "@/Components/productPhotograph/ourProcess";
import VideoInfographics from "@/Components/infographicComponents/videoInfographics";
const OpenSans = Fira_Sans_Extra_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const index = () => {
  return (
    <div className={OpenSans.className}>
      <InfographicHero />
      <GymSwoleMate />
      <InfographicDetails />
      <InfoGraphisMarketPlace />
      <OurProcess />
      <VideoInfographics />
    </div>
  );
};

export default index;
