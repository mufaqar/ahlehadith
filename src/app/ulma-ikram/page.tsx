"use client";
import Layout from "@/components/Layout/Layout";
import ModelBox from "@/components/ModelBox/ModelBox";
import React, { useState } from "react";
import Slider from "react-slick";
import {Ulma_Data} from '@/const/ulma'

const Page = () => {
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
    const slider = React.useRef<Slider>(null);

    const [modalIsOpen, setIsOpen] = useState(false);
    const [URL, setURL] = useState('');
    const OpenModelBox = (image: any) => {
        setURL(image)
        setIsOpen(true);
    }
    return (
        <>
            <section className="relative blogs">
                <Layout>
                    <div className='my-10 md:my-20 md:mt-20 file:grid gap-10'>
                        <div className="grid md:grid-cols-4 grid-cols-1 gap-7">
                            {Ulma_Data?.map((item) => {
                                return (
                                    <div key={item.img} className=''>
                                        <div className='shadow-md'>
                                            <div className={`relative h-[300px] w-full`}
                                                onClick={() => OpenModelBox(item)} >
                                                <img
                                                    src={item?.img}
                                                    alt="img"
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className='p-5 text-center'>
                                                <h3 className='text-xl font-ahle text-yellow mb-5'>
                                                    {item?.name}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Layout>
            </section>
            {
                modalIsOpen && <ModelBox modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} URL={URL} />
            }
        </>
    )
}

export default Page;