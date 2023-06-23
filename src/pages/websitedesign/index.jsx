import WebsiteDesignHero from "@/Components/websiteDesignComponent/websiteDesignHero";
import React from "react";
import { Fira_Sans_Extra_Condensed } from "next/font/google";
import WebDesignBuild from "@/Components/websiteDesignComponent/webDesignBuild";

const OpenSans = Fira_Sans_Extra_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const index = () => {
  return (
    <div className={OpenSans.className}>
      <WebsiteDesignHero />
      <WebDesignBuild />
    </div>
  );
};

export default index;
