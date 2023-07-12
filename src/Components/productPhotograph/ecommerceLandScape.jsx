import React from "react";
// import Show1 from "../../Assets/img/Image 05 1.png";
// import Show2 from "../../Assets/img/Image 2  1.png";
// import Show3 from "../../Assets/img/Image 3 1.png";
// import Show4 from "../../Assets/img/Image 8 1.png";
import cameraMan from "../../Assets/img/cameraman.png";
import show1 from "../../Assets/img/img2.png"
import show2 from "../../Assets/img/img3.png"
import show3 from "../../Assets/img/img5.png"
import show4 from "../../Assets/img/img8.png"
import Image from "next/image";

const Ecommercelandscape = () => {
  return (
    <main className="container mx-auto mt-28">
      <div className="mx-4 flex justify-between flex-col xl:flex-row items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-[30px] leading-[40px]  xl:text-[48px] max-w-[739px] h-[117px] xl:leading-[60px] font-bold italic font-sans w-full xl:w-9/12 text-cap capitalize">
            In today's{" "}
            <span className="text-[#F02E6B]">
              competitive
              <br />e-commerce
            </span>{" "}
            landscape
          </h1>

          <p className="w-[608px] h-[92px] text-zinc-700 text-xl font-normal leading-[30px] mt-4">
            The professional product photography is vital for driving success.
            High-quality <br />
            images can captivate potential customers, ultimately influencing
            their purchasing decisions.
          </p>
          <div className="flex  gap-4 mt-11 w-[537px] lg:w-[800px] mx-auto">
            <div className="bgone w-[122px] h-[122px] lg:w-[172px] lg:h-[172px] relative  mb-28">
              <Image
                src={show1}
                width={120} height={120}
                className="absolute top-[1px] left-[1px] -bottom-20 object-cover w-[120px] h-[120px] lg:w-[170px] lg:h-[170px]"
              />
            </div>

            <div className="bgone w-[122px] h-[122px] lg:w-[172px] lg:h-[172px] relative -bottom-28">
              <Image
                src={show2}
                width={120} height={120}
                className="w-[120px] h-[120px] lg:w-[170px] lg:h-[170px] absolute top-[1px] left-[1px]"
              />
            </div>
            <div className="bgone relative w-[122px] h-[122px] lg:w-[172px] lg:h-[172px]">
              <Image
                src={show3}
                width={120} height={120}
                className="absolute top-[1px] left-[1px] w-[120px] h-[120px] lg:w-[170px] lg:h-[170px]"
              />
            </div>
            <div className="bgone relative w-[122px] h-[122px] lg:w-[172px] lg:h-[172px] -bottom-28">
              <Image
                src={show4}
                width={120} height={120}
                className="w-[120px] h-[120px] lg:w-[170px] lg:h-[170px] absolute top-[1px] left-[1px]"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 xl:mt-0">
          <Image src={cameraMan} className="w-[777px] h-[439px] rounded-3xl" />
        </div>
      </div>
    </main>
  );
};

export default Ecommercelandscape;
