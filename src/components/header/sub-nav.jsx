"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Slider from 'react-slick';
import Layout from '../Layout/Layout';

const Sub_Nav = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
        }
      }
    ]
  };
  return (
    <>
      <div className='py-10 max-w-[950px] mx-auto'>
        <Layout>
          <Slider {...settings}>
            {Nav_data.map((item, idx) => {
              return (
                <div key={idx} className='px-5'>
                  <div className={``}>
                    <Image
                      src={item?.img}
                      alt="img"
                      height={50}
                      width={50}
                      className="mx-auto"
                    />
                  </div>
                  <div className='text-center mt-2'>
                    <Link href={item?.link} className='text-xl font-ahle text-pure'>
                      {item?.name}
                    </Link>
                  </div>
                </div>
              );
            })}
          </Slider>
        </Layout>
      </div>
    </>
  )
}

export default Sub_Nav

export const Nav_data = [
  {
    img: "/assets/images/siteicon.png",
    link: "#",
    name: "تعارف",
  },
  {
    img: "/assets/images/tareekh.png",
    link: "#",
    name: "تاریخ",
  },
  {
    img: "/assets/images/kyadat.png",
    link: "#",
    name: "قیادت",
  },
  {
    img: "/assets/images/book.png",
    link: "#",
    name: "کتابیں",
  },
  {
    img: "/assets/images/manshor.png",
    link: "#",
    name: "منشور",
  },
  {
    img: "/assets/images/dastoor.png",
    link: "#",
    name: "دستور",
  },
];