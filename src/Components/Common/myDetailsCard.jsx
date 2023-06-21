import React from "react";

const MyDetailsCard = ({ LOGO, H1, P ,CLASS}) => {
  return (
    <div className={`md:w-[380px] lg:w-[420px] ${CLASS}`}>
      {LOGO ? <LOGO /> : ""}
      <h6 className="text-[#FF0066] text-xl font-extrabold mt-4">{H1}</h6>
      <p className="leading-6 font-normal test-[#494949] tracking-tight mt-2">
        {P}
      </p>
    </div>
  );
};

export default MyDetailsCard;
