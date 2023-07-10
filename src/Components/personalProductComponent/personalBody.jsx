import React from "react";
import personalImage1 from "../../Assets/img/personal_1.png";
import personalImage2 from "../../Assets/img/personal_2.png";
import {
  Box_dot,
  Circle_Dash,
  Personal_display_on_website,
  Personal_incorporate_into,
  Personal_leverage_customer,
  Personal_utilise,
  ZIcon,
} from "@/Assets/SVGs/SVG";
import MyDetailsCard from "../Common/myDetailsCard";
import Image from "next/image";
import PlayIcon from "@/Assets/SVGs/Play";
import Patter from "@/Assets/SVGs/Patter";
import Patter_color from "@/Assets/SVGs/Patter_color";
import Btn_Zoom from "../Common/btn_Zoom";

const PersonalBody = () => {
  return (
    <main className="container mx-auto">
      <section className="lg:flex justify-between lg:gap-8 mx-4 mt-28">
        <div className="lg:w-[50%]">
          <h2 className="text-[28px] leading-[30px]  2xl:text-[48px] 2xl:leading-[60px] tracking-tight capitalize font-extrabold text-center lg:text-left italic">
            Looking for a way to {" "}
            <span className="clip inline-block 2xl:w-[515px]">showcase the people behind</span> your
            business in a visually <span className="clip inline-block 2xl:w-[300px]">engaging way?</span>
          </h2>
          <h6 className="italic text-[22px] leading-7 text-center lg:text-start 2xl:text-[32px] font-semibold 2xl:leading-10 tracking-tight mt-3">
            Our <span className="clip inline-block 2xl:w-[155px]">personalized</span> infographics and
            plain white photography services{" "}
            <span className="clip ">are the perfect solution.</span>
          </h6>
          <p className="text-base xl:text-xl font-semibold xl:leading-7 text-center lg:text-start mt-3 ">
            Our expert designers will work with you to create customized
            infographics that feature personal images of your team members, or
            provide high-quality images featuring your team members or products
            against a plain white background. These images can be placed in
            various lifestyle placements, such as social media, marketing
            materials, and your website, to help build confidence with your
            customers and promote your brand.
          </p>
          <ul>
            Personalized infographics and plain white photography offer many
            benefits, including:
            <div className="ml-8 lg:w-[90%]">
              <li className="list-disc ">
                A unique and memorable way to showcase the people behind your
                business and differentiate yourself from the competition.
              </li>
              <li className="list-disc">
                A chance to build trust and confidence with your customers by
                showcasing the real people behind the brand.
              </li>
              <li className="list-disc ">
                The ability to tell your brand's story in a visually engaging
                way, making it easier for customers to understand and connect
                with your message.
              </li>
              <li className="list-disc ">
                Increased engagement on social media and other platforms, as
                personalized images are more likely to be shared and liked by
                customers
              </li>
            </div>
          </ul>
        </div>
        <div>
          <Image
            src={personalImage1}
            className="w-[635px] h-[417px] lg:w-[600px] lg:h-[400px] 2xl:w-[735px] 2xl:h-[417px] mx-auto mt-8 xl:mt-0"
          />
        </div>
      </section>

      <section className="flex justify-between flex-col xl:flex-row  lg:gap-14 mx-4 mt-8">
        <div className="relative w-[500px] h-[500px] xl:w-[702px] xl:h-[701px] mx-auto">
          <Image
            src={personalImage2}
            // width={675}
            // height={675}
            layout="fill"
            className="rounded-3xl object-cover"
          />
          <div className="absolute top-[-31px] right-0 lg:top-[-45px] lg:right-[-12px] xl:-right-16">
            <Circle_Dash />
          </div>
          <div className="absolute -bottom-8 left-0 lg:-bottom-14 lg:-left-24 ">
            <Box_dot />
          </div>
        </div>
        <div className="xl:w-[50%]">
          <div className="-ml-4 2xl:-ml-4">
            <h1 className="text-2xl 2xl:text-[48px] xl:leading-10 2xl:leading-[60px] leading-5 italic mt-8 xl:mt-0 text-center xl:text-left  2xl:ml-4">
              The versatility of {" "}
              <span className="clip">plain white photography {" "}</span> 
            </h1>
            <p className="text-center lg:text-left 2xl:ml-4">
              Which can be used in a variety of ways to showcase your team
              members or products in a consistent and professional manner. To
              best promote your business and brand using personalised
              infographics and plain white photography, we recommend the
              following strategies:
            </p>
          </div>
          <section className=" grid grid-cols-1 md:grid-cols-2  justify-items-center gap-8 mt-4 mx-4 lg:mx-0 text-center lg:text-left">
            <MyDetailsCard
              LOGO={Personal_utilise}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Utilise social media"
              P="Share your personalized infographics and plain white images on social media platforms like Instagram and Facebook, along with a personal message from each team member. Encourage your followers to share and engage with the content."
            />
            <MyDetailsCard
              LOGO={Personal_incorporate_into}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Incorporate into marketing materials"
              P="Use your personalized infographics and plain white images in marketing materials like brochures, flyers, and newsletters to showcase the people behind your brand or highlight product features in a clear and concise manner."
            />
            <MyDetailsCard
              LOGO={Personal_display_on_website}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Display on website"
              P="Place your personalized infographics and plain white images on your website's 'About Us' or 'Meet the Team' page to provide a personal touch and build trust with your customers."
            />
            <MyDetailsCard
              LOGO={Personal_leverage_customer}
              CLASS="lg:max-w-[301px] grid justify-items-center lg:block"
              H1="Leverage customer reviews"
              P="Encourage your satisfied customers to leave reviews of your brand, including positive feedback about your personalized infographics and plain white photography."
            />
          </section>
        </div>
      </section>
      <div>
        <p className="text-center mt-16">
          In conclusion, personalized infographics and plain white photography
          are unique and memorable ways to showcase the people behind your
          business and build trust with your customers. By promoting your images
          through social media, marketing materials, and your website, you can
          increase engagement and build a strong brand reputation. Contact us
          today to learn more about how personalized infographics and plain
          white photography can benefit your business.
        </p>
      </div>
      <Btn_Zoom />
    </main>
  );
};

export default PersonalBody;
