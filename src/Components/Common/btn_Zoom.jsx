import Patter_color from "@/Assets/SVGs/Patter_color";
import { Pattern, ZIcon } from "@/Assets/SVGs/SVG";
import React, { useState } from "react";
import Meeting from "./meeting";

const Btn_Zoom = ({ colorTrue = false }) => {
  const [handelMeting, setHandelMeting] = useState(false);
  const HandelZoom = () => setHandelMeting((pre) => !pre);
  console.log(handelMeting);
  return (
    <>
      <section className="flex justify-center relative lg:mt-28 mx-4 mt-6">
        <Pattern className="absolute left-0 xl:-left-12 xl:top-20 top-36 " />
        <div className="grid justify-items-center">
          <h1
            className={`text-center text-3xl leading-10 italic font-extrabold  ${
              colorTrue ? "cliptwo" : "clip"
            }`}
          >
            Don't leave opportunities on the table
          </h1>
          <p
            className={`text-center italic text-2xl font-semibold leading-8 mt-3 relative z-1 ${
              colorTrue ? "text-white" : ""
            }`}
          >
            Book a Zoom call with us today to learn more about our <br />
            White background Photography and enhance your product images and
            boost your sales success.
          </p>
          <button
            className="btn_light_primary2 mt-8 flex items-center justify-center"
            onClick={HandelZoom}
          >
            <ZIcon /> Book a Zoom call
          </button>
        </div>
        <Patter_color classNAME="absolute hidden md:block -top-28 xl:-top-24  right-8 xl:right-0 -z-10 md:z-10" />
      </section>
      {handelMeting ? <Meeting handelClose={HandelZoom} /> : ""}
    </>
  );
};

export default Btn_Zoom;
