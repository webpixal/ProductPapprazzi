import React, { useState } from "react";
import cvImg1 from "../../Assets/img/cv_img_1.png";
import cvImg2 from "../../Assets/img/cv_img_2.png";
import cvImg3 from "../../Assets/img/cv_img_3.png";
import resume_1 from "../../Assets/img/cv_rusumes_1.png";
import resume_2 from "../../Assets/img/cv_resumes_2.png";
import resume_3 from "../../Assets/img/cv_resumes_3.png";
import resume_4 from "../../Assets/img/cv_resumes_4.png";
import Image from "next/image";
import { Frame } from "@/Assets/SVGs/SVG";
import Btn_Zoom from "../Common/btn_Zoom";
import ImgShowModal from "../Common/ImgShowModal";
const CvBody = () => {
  const [selectedImg, setSelectedImg] = useState("");
  const HandelOpenModal = (data) => {
    setSelectedImg(data);
  };
  return (
    <div className="container mx-auto">
      <section className="lg:flex justify-between lg:gap-8 mx-4 mt-20">
        <div className="lg:w-[50%]">
          <h2 className="text-[28px] leading-[30px]  2xl:text-[48px] 2xl:leading-[60px] tracking-[-0.06rem] capitalize font-bold text-center lg:text-left italic">
            Are you tired of{" "}
            <span className="clip">
              your outdated, bland<span className="opacity-0">'</span> CV
              <span className="opacity-0">'</span>
              getting lost'
            </span>{" "}
            in the sea of{" "}
            <span className="clip">
              job<span className="opacity-0">'</span> applications?'
            </span>
          </h2>
          <h6 className="italic text-[22px] leading-7 text-center lg:text-start 2xl:text-[32px] font-medium 2xl:leading-[2.6875rem] tracking-[-0.04rem] mt-3 capitalize">
            Do you want{" "}
            <span className="clip">
              to stand out from the crowd and showcase
            </span>{" "}
            <span className="opacity-0">'</span>
            your skills in a{" "}
            <span className="clip">modern and visually appealing way </span>?
            Look no further than{" "}
            <span className="clip">
              our infographic modern CV service!
              <span className="opacity-0">'</span>
            </span>
          </h6>
          <p className="text-base  font-normal leading-[1.5rem] text-center lg:text-start mt-3 ">
            Our expert team of designers and writers will work with you to
            create a stunning, customized infographic CV that highlights your
            unique skills and experiences in a visually engaging way. Our
            service is designed to make your application stand out from the
            crowd and catch the attention of potential employers. <br />
            <br />
            Why is a modern, infographic CV important in today's job market?
            First impressions are everything, and your CV is often the first
            point of contact with a potential employer. A visually appealing CV
            can set you apart from other{" "}
            <br className="hidden xl:inline-block" />
            applicants and make a lasting impression.
          </p>
        </div>
        <div className="max-h-[479px]">
          <Image
            src={cvImg1}
            className="w-[635px] h-[417px] lg:w-[600px] lg:h-[400px] 2xl:w-[775px] 2xl:h-[479px] mx-auto mt-8 xl:mt-0"
          />
        </div>
      </section>

      <section className="flex justify-between flex-col lg:flex-row  lg:gap-14 mx-4 mt-20">
        <div className="relative">
          <Image
            src={cvImg2}
            className="w-[635px] h-[417px] lg:w-[600px] lg:h-[701px] 2xl:w-[775px] 2xl:h-[701px] mx-auto mt-8 xl:mt-0"
          />
          <div className="absolute top-[-31px] right-0 lg:top-[-45px] lg:-right-12">
            <Frame />
          </div>
          <div className="absolute -bottom-8 left-0 lg:-bottom-12 lg:-left-24 ">
            <Frame />
          </div>
        </div>
        <div className="lg:w-[50%] mt-12 lg:ml-4 lg:mt-0 ">
          <h2 className="text-[28px] leading-[30px]  2xl:text-[32] 2xl:leading-[2.687rem] capitalize font-medium text-center lg:text-left italic clip tracking-[-0.04rem]">
            Our infographic CVs offer many benefits and opportunities. They
          </h2>

          <div className="grid xl:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 place-items-center xl:place-items-start lg:mr-8 mr-0">
            <div className=" xl:w-[280px] 2xl:w-[323px] mb-5 mr-5">
              <p className="text-base font-normal leading-6">
                Provide a visual representation of your skills and experience,
                making it easier for potential employers to quickly assess your
                qualifications.
              </p>
            </div>
            <div className=" xl:w-[280px] 2xl:w-[323px] mb-5 mr-5">
              <p className="text-base font-normal leading-6">
                Set you apart from other applicants with a unique and memorable
                design.
              </p>
            </div>
            <div className="xl:w-[280px] 2xl:w-[323px]  mb-5 mr-5">
              <p className="text-base font-normal leading-6">
                Showcase your creativity and attention to detail, demonstrating
                your ability to think outside the box.
              </p>
            </div>
            <div className="xl:w-[280px] 2xl:w-[323px] mb-5 mr-5">
              <p className="text-base font-normal">
                Demonstrate your ability to effectively communicate complex
                information in a concise and engaging manner.
              </p>
            </div>
            <div className="xl:w-[280px] 2xl:w-[323px] mb-5 mr-5 relative xl:left-52">
              <p className="text-base font-normal">
                Are easily shareable on social media, allowing you to expand
                your network and increase your visibility to potential
                employers.
              </p>
            </div>
          </div>
          <p className="text-base font-normal text-center lg:text-start mt-3 ">
            Our service is tailored to meet your unique needs and preferences.
            We work with you to create a customized infographic CV that reflects
            your personal style and professional goals. We'll highlight your
            achievements and skills in a way that sets you apart from other
            applicants. <br />
            <br />
            Don't settle for a bland, outdated CV that fails to showcase your
            true potential. Invest in our infographic modern CV service today
            and take the first step towards landing your dream job. Contact us
            now to learn more about our services and how we can help you stand
            out in today's competitive job market.
          </p>
        </div>
      </section>

      <section className="lg:flex justify-between lg:gap-8 mx-4 mt-8">
        <div className="lg:w-[50%]">
          <h2 className="text-[28px] leading-[30px]  2xl:text-[32px] clip 2xl:leading-[2.6875rem] tracking-[-0.04rem] capitalize font-medium text-center lg:text-left italic mt-36 lg:mt-20">
            There are several websites that offer services for creating
            infographic resumes or CVs. Here are some of the best oness
          </h2>
          <div className="2xl:w-[731px] md:w-[700px] w-[600px] flex flex-wrap justify-center lg:justify-start gap-4 mt-4 mx-auto xl:mt-20">
            <Image
              src={resume_1}
              width={350}
              height={219}
              className="h-[119px] w-[250px] 2xl:h-[219px] 2xl:w-[350px] grid-rows-1"
              onClick={() => HandelOpenModal(resume_1)}
            />
            <Image
              src={resume_2}
              width={350}
              height={500}
              className="h-[370px] w-[250px] 2xl:h-[470px] 2xl:w-[350px]"
              onClick={() => HandelOpenModal(resume_2)}
            />
            <Image
              src={resume_3}
              width={350}
              height={473}
              className="h-[373px] w-[250px] 2xl:h-[473px] 2xl:w-[350px] relative top-[-255px]"
              onClick={() => HandelOpenModal(resume_3)}
            />
            <Image
              src={resume_4}
              width={350}
              height={219}
              className="h-[119px] w-[250px] 2xl:h-[219px] 2xl:w-[350px]"
              onClick={() => HandelOpenModal(resume_4)}
            />
          </div>
        </div>
        <div className="relative">
          <Image
            src={cvImg3}
            className="w-[635px] h-[417px] lg:w-[600px] lg:h-[700px] 2xl:w-[731px] 2xl:h-[1054px] mx-auto mt-8 xl:-mt-16"
          />
          <div className="absolute sm:hidden top-[-31px] right-0 lg:top-[-45px] lg:right-0 xl:-top-24">
            <Frame />
          </div>
          <p className="text-base font-normal text-center lg:text-start mt-3 ">
            Overall, each of these websites offers unique features and benefits
            for creating infographic resumes. It's a good idea to try a few of
            them out to see which one best fits your needs and preferences.
          </p>
        </div>
      </section>
      <div className="lg:-mt-44">
        <Btn_Zoom
          P="Book a Zoom call with us today to learn more about our"
          P2="CV Design Services  and take the first step in building your presence and authority on LinkedIn."
        />
      </div>
      {selectedImg && (
        <ImgShowModal
          data={selectedImg}
          handelCloseModal={() => setSelectedImg("")}
        />
      )}
    </div>
  );
};

export default CvBody;
