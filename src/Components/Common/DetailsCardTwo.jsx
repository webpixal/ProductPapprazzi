import React from "react";

const MyDetailsCardTwo = ({ LOGO, H1, P, CLASS }) => {
  return (
    // <div className={`md:w-[380px] lg:w-[410px] ${CLASS}`}>
    //   {LOGO ? <LOGO /> : ""}
    //   <h6 className="cliptwo text-xl font-bold mt-4">{H1}</h6>
    //   <p className="leading-6 font-normal text-white tracking-tight mt-2">
    //     {P}
    //   </p>
    // </div>
    <div className={`w-[23.625rem] ${CLASS}`}>
      {LOGO ? <LOGO /> : ""}
      <h6 className="cliptwo text-xl font-medium leading-[30px] mt-[1.19rem]">
        {H1}
      </h6>
      <p className="text-white text-base font-normal leading-normal mt-[.5rem]">
        {P}
      </p>
    </div>
  );
};

export default MyDetailsCardTwo;
