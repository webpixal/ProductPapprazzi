import BrandDetails from "@/Components/productPhotograph/brandDetails";
import Ecommercelandscape from "@/Components/productPhotograph/ecommerceLandScape";
import InfoGraphics from "@/Components/productPhotograph/infoGraphics";
import ProductPhotographHero from "@/Components/productPhotograph/productPhotographHero";
import React from "react";
import { Fira_Sans_Extra_Condensed } from "next/font/google";
import ImageEditor from "@/Components/productPhotograph/imageEditor";
const OpenSans = Fira_Sans_Extra_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ProductPhotography = () => {
  return (
    <main className={OpenSans.className}>
      <ProductPhotographHero />
      <Ecommercelandscape />
      <BrandDetails />
      <InfoGraphics />
      <ImageEditor />
    </main>
  );
};

export default ProductPhotography;
