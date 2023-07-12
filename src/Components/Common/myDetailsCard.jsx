import React from "react";

const MyDetailsCard = ({ LOGO, H1, P, CLASS }) => {
  return (
    // <div className={`md:w-[380px] lg:w-[410px] ${CLASS}`}>
    //   {LOGO ? <LOGO /> : ""}
    //   <h6 className="text-[#FF0066] text-xl font-bold mt-4">{H1}</h6>
    //   <p className="leading-6 font-normal text-base test-[#494949] mt-2">
    //     {P}
    //   </p>
    // </div>
    <div className={`w-[376px] ${CLASS}`}>
      {LOGO ? <LOGO /> : ""}
      <h6 className="text-[#F06] text-xl font-medium leading-[30px] mt-5">{H1}</h6>
      <p className=" text-[#494949;] text-base font-normal leading-normal">
        {P}
      </p>
    </div>
  );
};

export default MyDetailsCard;
