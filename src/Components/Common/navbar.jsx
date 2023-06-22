import React from "react";
import { Cart, Login, Logo } from "@/Assets/SVGs/SVG";
import NavContext from "./NavContext";
import { Fira_Sans_Extra_Condensed } from "next/font/google";
import Link from "next/link";

const OpenSans = Fira_Sans_Extra_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const Navbar = () => {
  let Links = [
    { name: "Home", link: "./" },
    { name: "About Us", link: "./" },
    { name: "Services", link: "./" },
    { name: "Contuct Us", link: "./" },
  ];
  return (
    <div
      className={`bg-black drop-shadow-[0px_25px_13px_rgba(0,0,0,26%)] w-full h-[130px]  ${OpenSans.className}`}
    >
      <div className="2xl:container md:mx-auto">
        <div className=" flex justify-between mx-32 items-center h-[131px] ">
          <div>
            {/* Logo */}
            <Logo className="w[170px] h-full" />
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
                <Link href={"/"}>About Us</Link>
              </li>
              <li className="md:ml-8 text-lg text-white font-light hover:cliptwo relative group h-24 -mb-16">
                <p className="cursor-pointer group-hover:block">Services</p>
                <div className="absolute z-50 top-20 right-0 text-black hidden group-hover:block transition duration-500 ease-in-out">
                  <NavContext />
                </div>
              </li>
              <li className="md:ml-8 text-lg text-white font-light hover:cliptwo">
                <Link href={"/"}>Contuct Us</Link>
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
