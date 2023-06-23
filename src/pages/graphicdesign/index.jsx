import React from "react";
import { Fira_Sans_Extra_Condensed } from "next/font/google";
import GraphicDesignHero from "@/Components/graphicDesignComponents/graphicDesignHero";
import GraphicDesignBody from "@/Components/graphicDesignComponents/graphicDesignBody";
const OpenSans = Fira_Sans_Extra_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const index = () => {
  return (
    <div className={OpenSans.className}>
      <GraphicDesignHero />
      <GraphicDesignBody />
    </div>
  );
};

export default index;
