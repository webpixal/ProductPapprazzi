import React, { useState } from "react";
// import recept1 from "../../Assets/img/Rectangle 19.png";
// import recept2 from "../../Assets/img/Rectangle 20.png";
// import recept3 from "../../Assets/img/Rectangle 21.png";
// import recept4 from "../../Assets/img/Rectangle 22.png";
// import recept5 from "../../Assets/img/Rectangle 23.png";
// import recept6 from "../../Assets/img/Rectangle 24.png";
// import recept1 from "../../Assets/img/Rectangle 36.png";
// import recept2 from "../../Assets/img/Rectangle 37.png";
// import recept3 from "../../Assets/img/Rectangle 38.png";
// import recept4 from "../../Assets/img/Rectangle 39.png";
// import recept5 from "../../Assets/img/Rectangle 40.png";
// import recept6 from "../../Assets/img/Rectangle 41.png";
import recept1 from "../../Assets/img/recept_1.png"
import recept2 from "../../Assets/img/recept_2.png"
import recept3 from "../../Assets/img/recept_3.png"
import recept4 from "../../Assets/img/recept_4.png"
import recept5 from "../../Assets/img/recept_5.png"
import recept6 from "../../Assets/img/recept_6.png"
import Image from "next/image";
import { PlayButtonIcon } from "@/Assets/SVGs/SVG";
import ImgShowModal from "../Common/ImgShowModal";
import VideoPlayerModal from "../Common/VideoPlayerModal";

const OurPortfolio = () => {
  const [activeLink, setActiveLink] = useState({});
  const [openVideoModal, setOpenVideoModal] = useState(false);
  const [videoData, setVideoData] = useState("");
  const buttonTExt = [
    "All",
    "White Background",
    "Product Infographic",
    "Product Video",
    "Rotating Videos",
  ];
  const [selectedBtn, setSelectedBtn] = useState(0);
  const [selectedImg, setSelectedImg] = useState("");
  const handelButtonClick = (id) => setSelectedBtn(id);
  const HandelOpenModal = (data) => {
    setSelectedImg(data);
  };
  const handelVideoModal = (video) => {
    setOpenVideoModal(true);
    setVideoData(video);
  };

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
                <Image
                  onClick={() => HandelOpenModal(recept1)}
                  src={recept1}
                  width={240}
                  height={240}
                />
              </div>
              <div className="servicecard">
                <Image
                  onClick={() => HandelOpenModal(recept2)}
                  src={recept2}
                  width={240}
                  height={240}
                />
              </div>
              <div className="servicecard">
                <Image
                  onClick={() => HandelOpenModal(recept3)}
                  src={recept3}
                  width={240}
                  height={240}
                />
              </div>
              <div className="servicecard">
                <Image
                  onClick={() => HandelOpenModal(recept4)}
                  src={recept4}
                  width={240}
                  height={240}
                />
              </div>
              <div className="servicecard">
                <Image
                  onClick={() => HandelOpenModal(recept5)}
                  src={recept5}
                  width={240}
                  height={240}
                />
              </div>
              <div className="servicecard">
                <Image
                  onClick={() => HandelOpenModal(recept6)}
                  src={recept6}
                  width={240}
                  height={240}
                />
              </div>

              <div
                className="servicecard relative"
                onClick={() => handelVideoModal("videos/photo.webm")}
              >
                <Image src={recept1} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
              <div
                className="servicecard relative"
                onClick={() => handelVideoModal("videos/photo.webm")}
              >
                <Image src={recept2} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
              <div
                className="servicecard relative"
                onClick={() => handelVideoModal("videos/photo.webm")}
              >
                <Image src={recept3} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
              <div
                className="servicecard relative"
                onClick={() => handelVideoModal("videos/photo.webm")}
              >
                <Image src={recept4} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
              <div
                className="servicecard relative"
                onClick={() => handelVideoModal("videos/photo.webm")}
              >
                <Image src={recept5} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
              <div
                className="servicecard relative"
                onClick={() => handelVideoModal("videos/photo.webm")}
              >
                <Image src={recept6} width={240} height={240} />
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
                <Image
                  onClick={() => HandelOpenModal(recept1)}
                  src={recept1}
                  width={240}
                  height={240}
                />
              </div>
              <div className="servicecard">
                <Image
                  onClick={() => HandelOpenModal(recept2)}
                  src={recept2}
                  width={240}
                  height={240}
                />
              </div>
              <div className="servicecard">
                <Image
                  onClick={() => HandelOpenModal(recept3)}
                  src={recept3}
                  width={240}
                  height={240}
                />
              </div>
             
            </>
          ) : (
            ""
          )}

          {selectedBtn === 2 ? (
            <>
              <div className="servicecard">
                <Image
                  onClick={() => HandelOpenModal(recept4)}
                  src={recept4}
                  width={240}
                  height={240}
                />
              </div>
              <div className="servicecard">
                <Image
                  onClick={() => HandelOpenModal(recept5)}
                  src={recept5}
                  width={240}
                  height={240}
                />
              </div>
              <div className="servicecard">
                <Image
                  onClick={() => HandelOpenModal(recept6)}
                  src={recept6}
                  width={240}
                  height={240}
                />
              </div>
            </>
          ) : (
            ""
          )}

          {selectedBtn === 3 ? (
            <>
              <div
                className="servicecard relative"
                onClick={() => handelVideoModal("videos/photo.webm")}
              >
                <Image src={recept1} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
              <div
                className="servicecard relative"
                onClick={() => handelVideoModal("videos/photo.webm")}
              >
                <Image src={recept2} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
              <div
                className="servicecard relative"
                onClick={() => handelVideoModal("videos/photo.webm")}
              >
                <Image src={recept3} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
              <div
                className="servicecard relative"
                onClick={() => handelVideoModal("videos/photo.webm")}
              >
                <Image src={recept4} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
              <div
                className="servicecard relative"
                onClick={() => handelVideoModal("videos/photo.webm")}
              >
                <Image src={recept5} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
              <div
                className="servicecard relative"
                onClick={() => handelVideoModal("videos/photo.webm")}
              >
                <Image src={recept6} width={240} height={240} />
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
              <div
                className="servicecard relative"
                onClick={() => handelVideoModal("videos/photo.webm")}
              >
                <Image src={recept3} width={240} height={240} />
                <div className="absolute top-20 left-20">
                  <PlayButtonIcon />
                </div>
              </div>
              <div
                className="servicecard relative"
                onClick={() => handelVideoModal("videos/photo.webm")}
              >
                <Image src={recept1} width={240} height={240} />
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
      <>
        {selectedImg && (
          <ImgShowModal
            data={selectedImg}
            handelCloseModal={() => setSelectedImg("")}
          />
        )}

        {openVideoModal && (
          <VideoPlayerModal
            handelCloseModal={() => setOpenVideoModal(false)}
            video={videoData}
          />
        )}
      </>
    </div>
  );
};

export default OurPortfolio;
