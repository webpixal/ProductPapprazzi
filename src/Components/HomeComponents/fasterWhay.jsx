import React from "react";
const FasterWhay = () => {
  return (
    <div
      className="w-full h-[326px] xl:h-[655px] bg-cover bg-center flex justify-between items-center"
      style={{
        backgroundImage: `url("bg_faster.png")`,
      }}
    >
      <div className="m-4 w-[50%]">
        <div className="xl:w-[501px] xl:mx-auto">
          <h1 className="text-[#2A3342] text-[36px] leading-[44px]">
            The fastest way from idea to live site. Period.
          </h1>
          <p className="text-[#556987] text-[20px] leading-[30px]">
            Flex is a Small SaaS Business. Flex isn’t a traditional company.
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center w-[50%] m-4">
        <button className="btn_light_primary">Get Started</button>
        <button className="btn_light_secondary">
          <span className="clip">Learn More</span>
        </button>
      </div>
    </div>
  );
};

export default FasterWhay;
