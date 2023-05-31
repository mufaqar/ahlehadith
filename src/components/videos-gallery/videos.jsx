import Image from "next/image";
import React, { useContext } from "react";
import ReactPlayer from "react-player";
import { BsPlayCircle } from "react-icons/bs";
import Modal from "react-modal";
import { SettingsContext } from "@/context/setting-context";

const VideosGallery = () => {
  const { modalIsOpen, setIsOpen } = useContext(SettingsContext);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <section className="md:flex gap-6">
        <div className="rounded-3xl relative md:w-[77%] overflow-hidden inline-block border-[10px] border-white dark:border-transparent shadow-xl">
          {/* <Image
            src="/assets/images/thumbnil1.jpg"
            alt="thumbnil"
            width={900}
            height={900}
            className="w-full h-full object-cover"
          /> */}
          {Video_Data.slice(0, 1).map((item, idx) => {
            return (
              <div key={idx} className="player-wrapper w-full h-full object-cover">
                <ReactPlayer
                  className="react-player w-full h-full object-cover"
                  url={item.url}
                  width="100%"
                  height="100%"
                />
              </div>

            );
          })}
          <BsPlayCircle
            onClick={openModal}
            className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-yellow active:scale-105 animate-pulse text-7xl"
          />
        </div>
        <div className="flex flex-col mt-5 md:mt-0 justify-between gap-5 md:w-[23%]">
          {Video_Data.slice(0, 3).map((item, idx) => {
            return (
              <div key={idx} className="rounded-2xl relative md:rounded-3xl h-[33%] border-[6px] border-white dark:border-transparent shadow-xl overflow-hidden inline-block">
                <div className="player-wrapper w-full h-full object-cover">
                  <ReactPlayer
                    className="react-player w-full h-full object-cover"
                    url={item.url}
                    width="100%"
                    height="100%"
                  />
                </div>
                <BsPlayCircle
                  onClick={openModal}
                  className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-yellow active:scale-105 animate-pulse text-5xl"
                />
              </div>
            );
          })}
          {/* <div className="rounded-2xl relative md:rounded-3xl h-[33%] border-[6px] border-white dark:border-transparent shadow-xl overflow-hidden inline-block">
            <Image
              src="/assets/images/thumbnil1.jpg"
              alt="thumbnil"
              width={900}
              height={900}
              className="w-full h-full object-cover"
            />
            <BsPlayCircle
              onClick={openModal}
              className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-yellow active:scale-105 animate-pulse text-5xl"
            />
          </div>
          <div className="rounded-2xl relative md:rounded-3xl h-[33%] border-[6px] border-white dark:border-transparent shadow-xl overflow-hidden inline-block">
            <Image
              src="/assets/images/thumbnil1.jpg"
              alt="thumbnil"
              width={900}
              height={900}
              className="w-full h-full object-cover"
            />
            <BsPlayCircle
              onClick={openModal}
              className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-yellow active:scale-105 animate-pulse text-5xl"
            />
          </div> */}
        </div>
      </section>
      {modalIsOpen && <VideoModelBox />}
    </>
  );
};

export default VideosGallery;

const VideoModelBox = () => {
  const { modalIsOpen, setIsOpen } = useContext(SettingsContext);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundImage: "transparent",
    },
  };
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button onClick={closeModal}>close</button>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=DASJPMM-LSs"
            width="100%"
            height="100%"
          />
        </div>
      </Modal>
    </div>
  );
};

export const Video_Data = [
  {
    url: "https://www.youtube.com/watch?v=DASJPMM-LSs",
  },
  {
    url: "https://www.youtube.com/watch?v=vzElLps3GQI",
  },
  {
    url: "https://www.youtube.com/watch?v=QfOGNxFvgtY",
  },
];