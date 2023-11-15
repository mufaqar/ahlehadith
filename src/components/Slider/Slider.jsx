import React from "react";
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

const SliderComponent = (_data) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const slider = React.useRef<Slider>(null);


  return (
    <>
      <section className="h-screen relative 2xl:h-[800px] blogs">
        <Slider ref={slider} {...settings}>
          {Slide_BG.map((item, idx) => {
            return (
              <div className={`h-screen relative 2xl:h-[800px]`} key={idx}>
                <img
                  src={item?.img}
                  alt="img"
                  className="h-full w-full object-cover"
                />

              </div>
            );
          })}
        </Slider>
        <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-dark-gray rounded-full  active:scale-105 text-yellow  p-3 text-4xl " onClick={() => slider?.current?.slickPrev()}><IoIosArrowBack /></button>
        <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-dark-gray rounded-full  active:scale-105 text-yellow  p-3 text-4xl " onClick={() => slider?.current?.slickNext()}><IoIosArrowForward /></button>
      </section>
    </>
  );
};

export default SliderComponent;

export const Slide_BG = [
  {
    img: "/assets/images/slid1.jpeg",
  },
  {
    img: "/assets/images/slid2.jpeg",
  },
  {
    img: "/assets/images/slid3.jpeg",
  },
  {
    img: "/assets/images/slid4.jpeg",
  },
  {
    img: "/assets/images/slid5.jpeg",
  },
];