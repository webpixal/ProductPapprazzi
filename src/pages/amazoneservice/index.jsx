import AmazonHero from '@/Components/amazoneComponent/amazoneHero'
import React from 'react';
import ExpertServices from "@/Components/amazoneComponent/expertServices"
import { Fira_Sans_Extra_Condensed } from "next/font/google";
import ProductManagement from '@/Components/amazoneComponent/ProductManagement';
import AmazonServices from '@/Components/amazoneComponent/amazonServices';
const OpenSans = Fira_Sans_Extra_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const index = () => {
  return (
    <div className={OpenSans.className}>
    <AmazonHero />
    <ProductManagement />
    <AmazonServices />
    <ExpertServices />
    </div>
  )
}

export default index