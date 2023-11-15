"use client";

import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick';
import ModelBox from '../ModelBox/ModelBox';

const ImagesSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    const slider = React.useRef(null);

    const [modalIsOpen, setIsOpen] = useState(false);
    const [URL, setURL] = useState('');
    const OpenModelBox = (image) => {
        setURL(image)
        setIsOpen(true);
    }
    return (
        <>
            <section className="relative blogs">
                <Slider ref={slider} {...settings}>
                    {Gallery.map((image) => {
                        return (
                            <div key={image.img} className='p-3 hover:-translate-y-6 transform transition duration-700 ease-in-out'>
                                <div className={`relative h-[225px] w-full`}
                                    onClick={() => OpenModelBox(image)} >
                                    <img
                                        src={image.img}
                                        alt="img"
                                        className="h-full w-full object-cover"
                                    />

                                </div>
                            </div>
                        );
                    })}
                </Slider>
                <button className="absolute -top-10 left-auto right-20 transform -translate-y-1/2 bg-dark-gray rounded-full  active:scale-105 text-yellow  p-3 text-2xl " onClick={() => slider?.current?.slickPrev()}><IoIosArrowBack /></button>
                <button className="absolute -top-10 right-4 transform -translate-y-1/2 bg-dark-gray rounded-full  active:scale-105 text-yellow  p-3 text-2xl " onClick={() => slider?.current?.slickNext()}><IoIosArrowForward /></button>
            </section>
            {
                modalIsOpen && <ModelBox modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} URL={URL} />
            }
        </>
    )
}

export default ImagesSection

export const Gallery = [
    {
        img: "/assets/images/07.jpg",
    },
    {
        img: "/assets/images/08.jpg",
    },
    {
        img: "/assets/images/09.jpg",
    },
    {
        img: "/assets/images/10.jpg",
    },
    {
        img: "/assets/images/11.jpg",
    },
    {
        img: "/assets/images/12.jpg",
    },
];