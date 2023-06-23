import React from 'react'
import { Fira_Sans_Extra_Condensed } from 'next/font/google';
import PersonalProductHero from '@/Components/personalProductComponent/personalProductHero';
import PersonalBody from '@/Components/personalProductComponent/personalBody';
const OpenSans = Fira_Sans_Extra_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const index = () => {
  return (
    <div className={OpenSans.className}>
    <PersonalProductHero />
    <PersonalBody />
    </div>
  )
}

export default index;