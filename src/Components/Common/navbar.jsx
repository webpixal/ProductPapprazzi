import React from "react";
import { Cart, Login, Logo } from "@/Assets/SVGs/SVG";
import Link from "next/link";

import { Open_Sans } from "next/font/google";
const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: [ "300", "400", "500", "600", "700", "800"],
});

import {
  Line_left,
  ProducImajon,
  Product_Chart,
  Product_Cv,
  Product_Pay,
  Product_home,
  Product_linkedin_small,
  Product_network,
  Product_no_img,
  Product_pan_graphic,
  Product_personalguidance_personal,
  Product_photograph,
  Product_seo,
  Product_webbild,
} from "@/Assets/SVGs/SVG";
const Navbar = () => {
  return (
    <div
      className={`bg-black drop-shadow-[0px_25px_13px_rgba(0,0,0,26%)] w-full h-[130px]  ${OpenSans.className}`}
    >
      <div className="md:mx-auto">
        <div className=" flex justify-between mx-8 lg:mx-32 items-center h-[131px] ">
          <div>
            {/* Logo */}
           <Link href="/"> <Logo className="w-[170px] h-full" /></Link>
          </div>
          {/* <div className="flex items-center">
            <p color="text-white ">Call Us : +44 (0) 1234 567890 </p>
            <p className="text-white">Email Us : info@productpapprazzi.co.uk</p>
            <p className="text-white">WhatsApp Us: +44 (0) 1234 567890</p>
          </div> */}
          <div className="flex items-center justify-between">
            {/* nav Menu */}
            <ul className="md:flex md:items-center">
              {/* {Links.map((link) => (
                <li
                  key={link.name}
                  className="md:ml-8 text-lg text-white font-light hover:cliptwo"
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))} */}
              <li className="md:ml-8 text-lg text-white font-light hover:cliptwo">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="md:ml-8 text-lg text-white font-light hover:cliptwo">
                <Link href={"/#about"}>About Us</Link>
              </li>
              <li className="md:ml-8 text-lg text-white font-light hover:cliptwo relative group h-24 -mb-16">
                <p className="cursor-pointer group-hover:block">Services</p>
                <div className="absolute z-50 top-20 right-0 text-black hidden group-hover:block transition duration-500 ease-in-out">
                  {/* <NavContext /> */}
                  <>
                    <section className="h-[313px] w-[965px] bg-white">
                      <section className="py-8 px-8 flex justify-between relative">
                        <div>
                          <Link href={"/ProductPhotography"}>
                            <h1 className="flex items-center text-[22px] font-semibold leading-7 text-black cursor-pointer  tracking-tight">
                              <Product_photograph className="mr-3" /> Product
                              Photography
                            </h1>
                          </Link>
                          <div className="mt-3 ml-10">
                            <p className="flex items-center text-[18px] cursor-pointer leading-6 font-semibold tracking-tight">
                              <Product_no_img className="mr-3" /> White
                              background Photography
                            </p>
                            <p className="flex items-center text-[18px] cursor-pointer leading-6 font-semibold tracking-tight mt-2">
                              <Product_no_img className="mr-3" /> 180 Degree
                              plain white imagery
                            </p>
                            <p className="flex items-center text-[18px] cursor-pointer leading-6 font-semibold tracking-tight mt-2">
                              <Product_no_img className="mr-3" /> Product
                              Rotating Videos
                            </p>
                            <div className="absolute top-11 left-[22rem]">
                              <Line_left />
                            </div>
                          </div>
                        </div>
                        <div>
                          <Link href={"/infographic"}>
                            <h1 className="flex items-center text-[22px] font-semibold leading-7 text-black cursor-pointer  tracking-tight">
                              <Product_network className="mr-3" /> Infographics
                              services
                            </h1>
                          </Link>
                          <div className="mt-3 ml-10">
                            <p className="flex items-center text-[18px] cursor-pointer leading-6 font-semibold tracking-tight">
                              <Product_Chart className="mr-3" /> Product
                              Infographics
                            </p>
                            <p className="flex items-center text-[18px] cursor-pointer leading-6 font-semibold tracking-tight mt-2">
                              <Product_Chart className="mr-3" /> Video
                              Infographics
                            </p>
                            <div className="absolute top-11 left-[41rem]">
                              <Line_left />
                            </div>
                          </div>
                        </div>
                        <div>
                          <Link href={"/amazoneservice"}>
                            <h1 className="flex items-center text-[22px] font-semibold leading-7 cursor-pointer text-[#0B002D] tracking-tight">
                              <ProducImajon className="mr-3" /> Amazon Services
                            </h1>
                          </Link>

                          <div className="mt-3 ml-10">
                            <p className="flex items-center text-[18px] cursor-pointer leading-6 font-semibold text-[#0B002D] tracking-tight">
                              <Product_seo className="mr-3" /> SEO / Product
                              copywriting
                            </p>
                            <p className="flex items-center text-[18px] cursor-pointer leading-6 font-semibold text-[#0B002D] tracking-tight mt-2">
                              <Product_Pay className="mr-3" /> Amazon PPC
                              Services
                            </p>
                          </div>
                        </div>
                      </section>
                      <div className="h-[1px] w-[552px] bgone relative left-48 -top-4"></div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8">
                        <Link href="/personalportal">
                          <h2 className="flex items-center text-[22px] font-semibold leading-7 text-black cursor-pointer  tracking-tight">
                            <Product_personalguidance_personal className="mr-3" />{" "}
                            Personal e-Commerce Portraits
                          </h2>
                        </Link>
                        <Link href={"/commerialproduct"}>
                          <h2 className="flex items-center text-[22px] font-semibold leading-7 text-black cursor-pointer  ">
                            <Product_home className="mr-3" /> Commercial Product
                            videos
                          </h2>
                        </Link>
                        <Link href={"/graphicdesign"}>
                          <h2 className="flex items-center text-[22px] font-semibold leading-7 text-black cursor-pointer  ">
                            <Product_pan_graphic className="mr-3" /> Graphic
                            Design Services
                          </h2>
                        </Link>
                        <Link href={"/websitedesign"}>
                          <h2 className="flex items-center text-[22px] font-semibold leading-7 text-black cursor-pointer  ">
                            <Product_webbild className="mr-3" /> Website Builds
                          </h2>
                        </Link>
                        <Link href={"/linkedinservices"}>
                          <h2 className="flex items-center text-[22px] font-semibold leading-7 text-black cursor-pointer  ">
                            <Product_linkedin_small className="mr-3" /> Linkedin
                            services.
                          </h2>
                        </Link>
                        <Link href={"/cvdesignservices"}>
                          <h2 className="flex items-center text-[22px] font-semibold leading-7 text-black cursor-pointer  ">
                            <Product_Cv className="mr-3" /> CV services
                          </h2>
                        </Link>
                      </div>
                    </section>
                  </>
                </div>
              </li>
              <li className="md:ml-8 text-lg text-white font-light hover:cliptwo">
                <Link href={"/contactus"}>Contuct Us</Link>
              </li>
              <li className="md:ml-8 text-lg font-semibold">
                <Cart />
              </li>
              <li className="md:ml-8 text-lg font-semibold">
                <Login />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
