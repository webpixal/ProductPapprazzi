import CommercialProductBody from '@/Components/commerialproductComponent/commercialProductBody';
import CommerialproductHeader from '@/Components/commerialproductComponent/commerialproductHeader';
import React from 'react'
import { Fira_Sans_Extra_Condensed } from "next/font/google";
const OpenSans = Fira_Sans_Extra_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const index = () => {
  return (
    <div className={OpenSans.className}>
    <CommerialproductHeader />
    <CommercialProductBody />
    </div>
  )
}

export default index;