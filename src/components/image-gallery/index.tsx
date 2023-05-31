import Image from 'next/image';
import React from 'react';
import { IoLogoInstagram } from 'react-icons/io';

const Gallery_images = () => {
    return (
        <div className="my-10">
            <h2 className="text-3xl uppercase font-ahle ahle-heading">
                اسلامک گرافکس
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1 mt-10">
                {Gallery.map((item, idx) => {
                    return (
                        <div className="relative group overflow-hidden cursor-zoom-in" key={idx}>
                            <Image
                                src={item.img}
                                alt="image"
                                width={350}
                                height={350}
                                className="w-full object-cover h-[300px] transition-all duration-300 ease-in-out group-hover:scale-110"
                            />
                            <div className="absolute top-0 right-0 cursor-zoom-in left-0 bottom-0 bg-black/30" />
                            <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10 text-yellow hidden group-hover:block">
                                <IoLogoInstagram size={46} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Gallery_images;

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