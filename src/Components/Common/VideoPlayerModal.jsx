import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import { FiX } from "react-icons/fi";

const VideoPlayerModal = ({ video = null, handelCloseModal }) => {
  return (
    <>
      <div className="inset-0 fixed bg-[rgba(0,0,0,.25)] z-10"></div>
      <div className="animate-top z-20 h-[400px] w-[600px] p-8 bg-white shadow-xl rounded-lg">
        <div className="relative">
          <button
            className="text-xl cursor-pointer bg-[#ededed] hover:bg-[#fff8] rounded-lg w-[25px] h-[25px] flex justify-center items-center absolute -right-4 -top-4"
            onClick={handelCloseModal}
          >
            <FiX />
          </button>
          <div className="pt-4">
            <Video>
              <source src={video} type="video/mp4" />
            </Video>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPlayerModal;
