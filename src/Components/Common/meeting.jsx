import {
  Meting_ei_clock,
  Meting_logo_1,
  Meting_logo_2,
  Meting_right_arro,
  Meting_what,
} from "@/Assets/SVGs/SVG";
import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
const Meeting = ({ handelClose }) => {
  const [selectedTime, setSelectedTime] = useState({});
  const [value, onChange] = useState(new Date());

  return (
    <main className=" fixed top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] h-[42rem] w-[75rem]   rounded-[1.5625rem] bg-[#fff] shadow-md z-50 flex justify-between p-4">
      <section>
        <div className=" ml-12">
          <div className="flex">
            <div className="relative w-40">
              <Meting_logo_1 />
              <div className="absolute -top-4 right-0">
                <Meting_logo_2 />
              </div>
            </div>
            <h5 className="text-[28px] font-bold ml-[117px]">
              Onboarding Call
            </h5>
          </div>
          <div className="flex mt-6">
            <h5 className="text-[28px] font-bold">Hello, Let's Talk !</h5>
            <div className="flex align-top -mt-8 ml-24">
              <Meting_ei_clock />
              <div className="ml-7 mt-2">
                <h6 className="text-xl font-bold">Duration</h6>
                <p className="text-sm font-normal mt-4">30-40 mins</p>
              </div>
            </div>
          </div>
          <p className="text-base font-normal  mt-2">
            Schedule a 30 min one-to-one call to dicuss your goals and
            challenges
          </p>
          <div className="flex items-center  mt-2">
            <Meting_what />
            <p className="ml-2 text-base font-normal">
              This call is optional but highly recommended!
            </p>
          </div>

          <div className="mt-4 flex flex-wrap w-[38rem]  gap-2">
            <div className="flex items-center ">
              <Meting_right_arro />
              <p className="text-base ml-4">Get branding support </p>
            </div>
            <div className="flex items-center ml-8">
              <Meting_right_arro />
              <p className="text-base ml-4">low cost </p>
            </div>
            <div className="flex items-center ml-8">
              <Meting_right_arro />
              <p className="text-base ml-4">Efficient managing </p>
            </div>
            <div className="flex items-center">
              <Meting_right_arro />
              <p className="text-base ml-4">Pickup/ delivery option</p>
            </div>
            <div className="flex items-center ml-8">
              <Meting_right_arro />
              <p className="text-base ml-4">Accounting</p>
            </div>
          </div>
          <div>
            <div className="mt-2">
              <p className="text-base font-medium">Full Name</p>
              <div className="w-[522px] h-[46px] bgone rounded-lg grid place-content-center">
                <input
                  type="text"
                  className="w-[520px] h-[44px] border-none outline-none rounded-lg px-4"
                  placeholder="Enter Your Full Name Hear"
                />
              </div>
            </div>
            <div className="mt-2">
              <p className="text-base font-medium">Company Name</p>
              <div className="w-[522px] h-[46px] bgone rounded-lg grid place-content-center">
                <input
                  type="text"
                  className="w-[520px] h-[44px] border-none outline-none rounded-lg px-4"
                  placeholder="Enter Your Company Name Hear"
                />
              </div>
            </div>
            <div className="mt-2">
              <p className="text-base font-medium">Company Email</p>
              <div className="w-[522px] h-[46px] bgone rounded-lg grid place-content-center">
                <input
                  type="text"
                  className="w-[520px] h-[44px] border-none outline-none rounded-lg px-4"
                  placeholder="Enter Your Company Email Hear"
                />
              </div>
            </div>
            <div className="mt-2">
              <p className="text-base font-medium">Phone Number</p>
              <div className="w-[522px] h-[46px] bgone rounded-lg grid place-content-center">
                <input
                  type="text"
                  className="w-[520px] h-[44px] border-none outline-none rounded-lg px-4"
                  placeholder="Enter Your Phone Number Hear"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-11 mt-3 ">
            <button
              className="w-[239px] bg-black h-[50px]  text-[#FC365A] rounded-lg"
              onClick={handelClose}
            >
              Cancel
            </button>
            <button className="w-[239px] h-[50px] bgone text-[#fff] rounded-lg">
              Continue
            </button>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h6 className="text-2xl font-bold">Choose a Date</h6>
          <div className="h-[330px] w-[433px] p-4">
            <Calendar onChange={onChange} value={value} className="max-h-[310px] min-w-[450px] max-w-[450] -ml-4"/>
          </div>
        </div>
        <div className="">
          <h6 className="text-2xl font-bold">Pick a time</h6>
          <div className="w-[503px] flex flex-wrap gap-4 mt-3 max-h-[200px] overflow-y-scroll">
            <button
              className={`h-[40px] w-[102px] text-base font-normal bg-[#F3F2F5] rounded-md ${
                false && "bgone_calender"
              }`}
            >
              9:00 AM
            </button>
            <button
              className={`h-[40px] w-[102px] text-base font-normal bg-[#F3F2F5] rounded-md ${
                true && "bgone_calender"
              }`}
            >
              9:15 AM
            </button>
            <button
              className={`h-[40px] w-[102px] text-base font-normal bg-[#F3F2F5] rounded-md ${
                false && "bgone_calender"
              }`}
            >
              9:30 AM
            </button>
            <button
              className={`h-[40px] w-[102px] text-base font-normal bg-[#F3F2F5] rounded-md ${
                false && "bgone_calender"
              }`}
            >
              9:45 AM
            </button>
            <button
              className={`h-[40px] w-[102px] text-base font-normal bg-[#F3F2F5] rounded-md ${
                false && "bgone_calender"
              }`}
            >
              10:00 AM
            </button>
            <button
              className={`h-[40px] w-[102px] text-base font-normal bg-[#F3F2F5] rounded-md ${
                false && "bgone_calender"
              }`}
            >
              10:15 AM
            </button>
            <button
              className={`h-[40px] w-[102px] text-base font-normal bg-[#F3F2F5] rounded-md ${
                false && "bgone_calender"
              }`}
            >
              10:30 AM
            </button>
            <button
              className={`h-[40px] w-[102px] text-base font-normal bg-[#F3F2F5] rounded-md ${
                false && "bgone_calender"
              }`}
            >
              10:45 AM
            </button>
            <button
              className={`h-[40px] w-[102px] text-base font-normal bg-[#F3F2F5] rounded-md ${
                false && "bgone_calender"
              }`}
            >
              11:00 AM
            </button>
            <button
              className={`h-[40px] w-[102px] text-base font-normal bg-[#F3F2F5] rounded-md ${
                false && "bgone_calender"
              }`}
            >
              11:15 AM
            </button>
            <button
              className={`h-[40px] w-[102px] text-base font-normal bg-[#F3F2F5] rounded-md ${
                false && "bgone_calender"
              }`}
            >
              11:30 AM
            </button>
            <button
              className={`h-[40px] w-[102px] text-base font-normal bg-[#F3F2F5] rounded-md ${
                false && "bgone_calender"
              }`}
            >
              11:45 AM
            </button>
            <button
              className={`h-[40px] w-[102px] text-base font-normal bg-[#F3F2F5] rounded-md ${
                false && "bgone_calender"
              }`}
            >
              12:00 AM
            </button>
            <button
              className={`h-[40px] w-[102px] text-base font-normal bg-[#F3F2F5] rounded-md ${
                false && "bgone_calender"
              }`}
            >
              12:15 AM
            </button>
            <button
              className={`h-[40px] w-[102px] text-base font-normal bg-[#F3F2F5] rounded-md ${
                false && "bgone_calender"
              }`}
            >
              12:30 AM
            </button>
            <button
              className={`h-[40px] w-[102px] text-base font-normal bg-[#F3F2F5] rounded-md ${
                false && "bgone_calender"
              }`}
            >
              12:45 AM
            </button>
            <button
              className={`h-[40px] w-[102px] text-base font-normal bg-[#F3F2F5] rounded-md ${
                false && "bgone_calender"
              }`}
            >
              01:00 AM
            </button>
            <button
              className={`h-[40px] w-[102px] text-base font-normal bg-[#F3F2F5] rounded-md ${
                false && "bgone_calender"
              }`}
            >
              01:15 AM
            </button>
            <button
              className={`h-[40px] w-[102px] text-base font-normal bg-[#F3F2F5] rounded-md ${
                false && "bgone_calender"
              }`}
            >
              01:30 AM
            </button>
            <button
              className={`h-[40px] w-[102px] text-base font-normal bg-[#F3F2F5] rounded-md ${
                false && "bgone_calender"
              }`}
            >
              01:45 AM
            </button>
            <button
              className={`h-[40px] w-[102px] text-base font-normal bg-[#F3F2F5] rounded-md ${
                false && "bgone_calender"
              }`}
            >
              02:00 AM
            </button>
            <button
              className={`h-[40px] w-[102px] text-base font-normal bg-[#F3F2F5] rounded-md ${
                false && "bgone_calender"
              }`}
            >
              02:15 AM
            </button>
            <button
              className={`h-[40px] w-[102px] text-base font-normal bg-[#F3F2F5] rounded-md ${
                false && "bgone_calender"
              }`}
            >
              02:30 AM
            </button>
            <button
              className={`h-[40px] w-[102px] text-base font-normal bg-[#F3F2F5] rounded-md ${
                false && "bgone_calender"
              }`}
            >
              02:45 AM
            </button>
          </div>
          <div className="flex items-center  mt-2">
            <Meting_what />
            <p className="ml-2 text-base font-normal">
              All Times are in Eastern Time - US & Canada
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Meeting;
