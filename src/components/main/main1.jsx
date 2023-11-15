"use client"
import React, { useContext, useEffect, useState } from "react";
import { SettingsContext } from "@/context/setting-context";
import Slider from "react-slick";
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'

const Main1 = () => {
  const { windowSize } = useContext(SettingsContext)
  const [post, setPost] = useState<any>([])

  useEffect(() => {
    windowSize[0] <= 1080 ? setPost(Slide_BG) : setPost(Slide_BG)
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
  };
  const slider = React.useRef<Slider>(null);

  return (
    <>
      <main className="h-[580px] md:grid grid-cols-1 gap-2 md:mt-[90px] mt-[50px]">
        <div className="relative w-full">
        <Slider ref={slider} {...settings}>
            {
              Slide_BG.map((item, idx) => {
                return (
                  <img src={item.img} alt="img" key={idx} className="h-[580px] w-full object-cover"/>
                )
              })
            }
          
        </Slider>
        <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-yellow active:scale-105 text-black text-3xl p-2 md:p-4 rounded-full " onClick={() => slider?.current?.slickPrev()}><IoIosArrowBack/></button>
        <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-yellow active:scale-105 text-black text-3xl p-2 md:p-4 rounded-full " onClick={() => slider?.current?.slickNext()}><IoIosArrowForward /></button>
        </div>
      </main>

    </>
  );
};

export default Main1;



export const Slide_BG = [
  {
    img: "/assets/images/banner/1.jpg",
  },
  {
    img: "/assets/images/banner/2.jpg",
  },
  {
    img: "/assets/images/banner/3.jpg",
  },
  {
    img: "/assets/images/banner/4.jpg",
  },
  {
    img: "/assets/images/banner/5.jpg",
  },
  {
    img: "/assets/images/banner/6.jpg",
  }
];