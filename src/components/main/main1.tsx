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
              post.map((item: any, idx: number) => {
                return (
                  <img src={item.img} alt="img" key={idx} className="h-[580px] w-full object-cover"/>
                )
              })
            }
          
        </Slider>
        <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-yellow active:scale-105 text-black text-3xl p-2 md:p-4 rounded-full " onClick={() => slider?.current?.slickPrev()}><IoIosArrowBack/></button>
        <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-yellow active:scale-105 text-black text-3xl p-2 md:p-4 rounded-full " onClick={() => slider?.current?.slickNext()}><IoIosArrowForward /></button>

          {/* <MainPost post={Slide_BG[0]} className="text-xl md:text-3xl  font-ahle" /> */}
        </div>
        {/* <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-2 _grid h-full">
            {
              post.map((item: any, idx: number) => {
                return (
                  <MainPost post={item} className="text-sm md:text-lg font-ahle" key={idx} />
                )
              })
            }
          </div>
        </div> */}
      </main>

    </>
  );
};

export default Main1;

const MainPost = ({ className, post }: any) => {
  //console.log("🚀 ~ file: main1.tsx:43 ~ MainPost ~ post:", post)
  return (
    <div
      className="relative h-[300px] md:h-full group bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${post?.img})` }}
    >
    </div>
  );
};

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
  },
  {
    img: "/assets/images/banner/7.jpg",
  },
];