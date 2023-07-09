import React, { useState } from "react";
import Rectangle_1 from "../../Assets/img/Rectangle 19.png";
import Rectangle_2 from "../../Assets/img/Rectangle 20.png";
import Rectangle_3 from "../../Assets/img/Rectangle 21.png";
import Rectangle_4 from "../../Assets/img/Rectangle 22.png";
import Rectangle_5 from "../../Assets/img/Rectangle 23.png";
import Rectangle_6 from "../../Assets/img/Rectangle 24.png";
import Rectangle_7 from "../../Assets/img/Rectangle 36.png";
import Rectangle_8 from "../../Assets/img/Rectangle 37.png";
import Rectangle_9 from "../../Assets/img/Rectangle 38.png";
import Rectangle_10 from "../../Assets/img/Rectangle 39.png";
import Rectangle_11 from "../../Assets/img/Rectangle 40.png";
import Rectangle_12 from "../../Assets/img/Rectangle 41.png";
import Image from "next/image";
import { PlayButtonIcon } from "@/Assets/SVGs/SVG";

const OurPortfolio = () => {
  const [activeLink, setActiveLink] = useState({});
  const buttonTExt = [
    "All",
    "White Background",
    "Product Infographic",
    "Product Video",
    "Rotating Videos",
  ];
  const [selectedBtn, setSelectedBtn] = useState(0);
  const handelButtonClick = (id) => setSelectedBtn(id);
  return (
    <div className="mt-[92px] mb-[92px]">
      <div className="2xl:container md:mx-auto">
        <div className="flex flex-col flex-wrap justify-center items-center">
          <h2 className="text-[32px] font-bold clip ">Our </h2>
          <h1 className="text-[64px] border_bottom font-semibold leading-[50px]">
            Portfolio
          </h1>
          <div className="mt-4 flex gap-4 text-[24px] text-center">
            {buttonTExt.map((btnText, i) => {
              return (
                <button
                  onClick={() => handelButtonClick(i)}
                  className={`hover:clip ${
                    selectedBtn === i ? "border_bottom" : ""
                  }`}
                >
                  {btnText}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-7 mt-8">
          {selectedBtn === 0 ? (
            <>
              <div className="servicecard">
                <Image src={Rectangle_1} width={240} height={240} />
              </div>
              <div className="servicecard">
                <Image src={Rectangle_2} width={240} height={240} />
              </div>
              <div className="servicecard">
                <Image src={Rectangle_3} width={240} height={240} />
              </div>
              <div className="servicecard">
                <Image src={Rectangle_4} width={240} height={240} />
              </div>
              <div className="servicecard">
                <Image src={Rectangle_5} width={240} height={240} />
              </div>
              <div className="servicecard">
                <Image src={Rectangle_6} width={240} height={240} />
              </div>

              <div className="servicecard relative">
                <Image src={Rectangle_7} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
              <div className="servicecard relative">
                <Image src={Rectangle_8} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
              <div className="servicecard relative">
                <Image src={Rectangle_9} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
              <div className="servicecard relative">
                <Image src={Rectangle_10} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
              <div className="servicecard relative">
                <Image src={Rectangle_11} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
              <div className="servicecard relative">
                <Image src={Rectangle_12} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
            </>
          ) : (
            ""
          )}
          {selectedBtn === 1 ? (
            <>
              <div className="servicecard">
                <Image src={Rectangle_1} width={240} height={240} />
              </div>
              <div className="servicecard">
                <Image src={Rectangle_2} width={240} height={240} />
              </div>
              <div className="servicecard">
                <Image src={Rectangle_3} width={240} height={240} />
              </div>
              <div className="servicecard relative">
                <Image src={Rectangle_7} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
              <div className="servicecard relative">
                <Image src={Rectangle_8} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
              <div className="servicecard relative">
                <Image src={Rectangle_9} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
            </>
          ) : (
            ""
          )}

          {selectedBtn === 2 ? (
            <>
              <div className="servicecard">
                <Image src={Rectangle_4} width={240} height={240} />
              </div>
              <div className="servicecard">
                <Image src={Rectangle_5} width={240} height={240} />
              </div>
              <div className="servicecard">
                <Image src={Rectangle_6} width={240} height={240} />
              </div>
              <div className="servicecard relative">
                <Image src={Rectangle_10} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
              <div className="servicecard relative">
                <Image src={Rectangle_11} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
              <div className="servicecard relative">
                <Image src={Rectangle_12} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
            </>
          ) : (
            ""
          )}

          {selectedBtn === 3 ? (
            <>
              <div className="servicecard relative">
                <Image src={Rectangle_7} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
              <div className="servicecard relative">
                <Image src={Rectangle_8} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
              <div className="servicecard relative">
                <Image src={Rectangle_9} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
              <div className="servicecard relative">
                <Image src={Rectangle_10} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
              <div className="servicecard relative">
                <Image src={Rectangle_11} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
              <div className="servicecard relative">
                <Image src={Rectangle_12} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
            </>
          ) : (
            ""
          )}

          {selectedBtn === 4 ? (
            <>
              <div className="servicecard relative">
                <Image src={Rectangle_9} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
              <div className="servicecard relative">
                <Image src={Rectangle_7} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default OurPortfolio;
