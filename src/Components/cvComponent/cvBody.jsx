import React from 'react';
import linkedImg1 from "../../Assets/img/linked_1.png";
import linkedImg2 from "../../Assets/img/linked_2.png";
import Image from 'next/image';
import { Box_dot, Circle_Dash } from '@/Assets/SVGs/SVG';
const CvBody = () => {
  return (
    <div>
     <section className="lg:flex justify-between lg:gap-8 mx-4 mt-20">
        <div className="lg:w-[50%]">
          <h2 className="text-[28px] leading-[30px]  2xl:text-[48px] 2xl:leading-[50px] tracking-tight capitalize font-extrabold text-center lg:text-left italic ">
            Are you looking to{" "}
            <span className="clip">increase your professional network</span> and
            grow your business
          </h2>
          <h6 className="italic text-[22px] leading-7 text-center lg:text-start 2xl:text-[32px] font-semibold 2xl:leading-10 tracking-tight mt-3 capitalize">
            Look no further than LinkedIn, the world's{" "}
            <span className="clip">
              largest professional network with over 134 million daily active
              users.
            </span>
            But with so many users, how can you stand out? That's where our
            LinkedIn services come in.
          </h6>
          <p className="text-base xl:text-xl font-semibold xl:leading-7 text-center lg:text-start mt-3 ">
            We offer a range of services to help you build your presence and
            authority fast on LinkedIn. We'll create a captivating LinkedIn
            profile that proves your talents and highlights your experiences
            credibly, so your ideal clients will feel spoken to and like you
            know their business and their lives.
          </p>
        </div>
        <div className="max-h-[479px]">
          <Image
            src={linkedImg1}
            className="w-[635px] h-[417px] lg:w-[600px] lg:h-[400px] 2xl:w-[775px] 2xl:h-[479px] mx-auto mt-8 xl:mt-0"
          />
        </div>
      </section>

      <section className="flex justify-between flex-col lg:flex-row  lg:gap-14 mx-4 mt-20">
        <div className="max-h-[479px] relative">
          <Image
            src={linkedImg2}
            className="w-[635px] h-[417px] lg:w-[600px] lg:h-[400px] 2xl:w-[775px] 2xl:h-[561px] mx-auto mt-8 xl:mt-0"
          />
          <div className="absolute top-[-31px] right-0 lg:top-[-45px] lg:right-[-12px]">
            <Circle_Dash />
          </div>
          <div className="absolute -bottom-8 left-0 lg:-bottom-14 lg:-left-24 ">
            <Box_dot />
          </div>
        </div>
        <div className="lg:w-[50%] mt-4 lg:mt-0">
          <h2 className="text-[28px] leading-[30px]  2xl:text-[48px] 2xl:leading-[50px] tracking-tight capitalize font-extrabold text-center lg:text-left italic clip">
            But creating a brilliant LinkedIn profile can be challenging
          </h2>
          <p className="text-base xl:text-xl font-semibold xl:leading-7 text-center lg:text-start mt-3 ">
            Six common mistakes can get in the way of a fantastic LinkedIn
            profile, including an incomplete headline, a summary that lacks
            differentiation, insufficient connections or recommendations, and no
            video testimonials or other media on the profile.
            <br />
            <br />
            Don't stress, we're here to help. Our team of experts has spent
            countless hours crafting the perfect profiles for our clients. With
            a compelling mix of content, character limits, and formatting
            tailored to your vision, we'll make the best use of all that
            LinkedIn real estate. Every section of your profile will be
            optimized to high standards to show you in the best light.
          </p>
        </div>
      </section>
    
    </div>
  )
}

export default CvBody;