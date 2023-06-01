import Image from "next/image";
import React, { useContext, useState } from "react";
import ReactPlayer from "react-player";
import { BsPlayCircle } from "react-icons/bs";
import ModelBox from "../ModelBox/ModelBox";

const VideosGallery = () => {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [URL, setURL] = useState('');
  const OpenModelBox = (video) => {
    setURL(video)
    setIsOpen(true); 
  }

  return (
    <>
    <section className="md:flex gap-6">
    <div className="rounded-3xl relative md:w-[77%] overflow-hidden inline-block border-[10px] border-white dark:border-transparent shadow-xl">
      <Image
        src="/assets/images/thumbnil1.jpg"
        alt="thumbnil"
        width={900}
        height={900}
        className="w-full h-full object-cover"
      />
      <BsPlayCircle
        onClick={()=>OpenModelBox(`https://www.youtube.com/watch?v=DASJPMM-LSs`)}
        className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-yellow active:scale-105 animate-pulse text-7xl"
      />
    </div>
    <div className="flex md:flex-col mt-5 md:mt-0 justify-between gap-5 md:w-[23%]">
      <div className="rounded-2xl relative md:rounded-3xl h-[33%] border-[6px] border-white dark:border-transparent shadow-xl overflow-hidden inline-block">
        <Image
          src="/assets/images/thumbnil1.jpg"
          alt="thumbnil"
          width={900}
          height={900}
          className="w-full h-full object-cover"
        />
        <BsPlayCircle
          onClick={`openModal`}
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
          onClick={`openModal`}
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
          onClick={`openModal`}
          className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-yellow active:scale-105 animate-pulse text-5xl"
        />
      </div>
    </div>
  </section>
  {
    modalIsOpen && <ModelBox modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} URL={URL} video={true}/>
  } 
    </>
  );
};

export default VideosGallery;


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