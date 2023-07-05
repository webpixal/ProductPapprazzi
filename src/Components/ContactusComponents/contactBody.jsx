import {
  Contact_email,
  Contact_location,
  Contact_phone,
} from "@/Assets/SVGs/SVG";
import React from "react";

const ContactBody = () => {
  return (
    <main className="mx-4">
      <section className="container mx-auto">
        <div className="mt-32">
          <h1 className="text-5xl font-bold leading-[60px]">
            Let's stay connected
          </h1>
          <p className="text-xl font-medium leading-7 text-[#556987] mt-7">
            It's never been easier to get in touch with Flex. Call us, use our
            live chat widget or email and we'll get back to you as soon as
            possible!
          </p>
        </div>
        <div className="flex justify-between mt-12 flex-col xl:flex-row ">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <Contact_email />
              <h2 className="mt-8 text-3xl font-bold">Email</h2>
              <p className="text-xl font-medium mt-8">
                info@productpaprazzi.co.uk
              </p>
            </div>
            <div>
              <Contact_phone />
              <h2 className="mt-8 text-3xl font-bold">Phone</h2>
              <p className="text-xl font-medium mt-8">+44 (0) 1234 567890</p>
            </div>

            <div>
              <Contact_location />
              <h2 className="mt-8 text-3xl font-bold">Office</h2>
              <p className="text-xl font-medium mt-8">
                3 Charndon Close, Barton Hill, <br />
                Luton, Bedfordshire <br />
                United Kingdom, LU3 4DU.
              </p>
            </div>
          </div>
          <div className="lg:w-[48.875rem] lg:h-[32.375rem] relative">
            <div className="mt-10">
              <p className="text-base font-medium text-[#333F51]">Email</p>
              <div className="w-[30rem] lg:w-[46.375rem] h-[2.875rem] border-2 bg-gradient-to-r from-[#FC365A] to-[#A00BFB] rounded-lg flex justify-center items-center">
                <input
                  type="text"
                  placeholder="pat@shuffle.dev"
                  className="w-[29.70rem] lg:w-[46rem] h-[2.475rem] border-none outline-none px-4 rounded-lg"
                />
              </div>
            </div>
            <div className="mt-6">
              <p className="text-base font-medium text-[#333F51]">Message</p>
              <div className="h-[13.75rem] w-[30rem] lg:w-[46.3225rem] border-2 bg-gradient-to-r from-[#FC365A] to-[#A00BFB] rounded-lg flex justify-center items-center">
                <textarea
                  className="max-h-[13.40rem] min-h-[13.35rem] w-[29.70rem] lg:w-[45.90rem] border-none outline-none p-4 rounded-lg text-[#FC365A]"
                  name=""
                  id=""
                  placeholder="Your message..."
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <button className="h-[3.5rem] w-[30rem] lg:w-[46.3125rem] text-[#ffffff] bg-gradient-to-r from-[#FC365A] to-[#A00BFB] rounded-lg text-xl mt-6">
              Send
            </button>
            <div className="h-[31.875rem] w-[20rem] lg:w-[34.625rem] bg-[#F7F8F9] absolute top-0 left-0 -z-10"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactBody;
