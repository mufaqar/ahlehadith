import { PostMokeData } from "@/const/post";
import { GetWordStr } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsPlayCircle } from "react-icons/bs";

const Featured_News = () => {

    return (
        <>
            <section className="md:flex gap-6">
                <div className="md:w-[65%] w-full overflow-hidden inline-block shadow-xl">
                    {PostMokeData.slice(0, 1).map((item, idx) => {
                        return (
                            <div key={idx} className="relative h-full w-full">
                                <span className="bg-yellow text-black py-1 px-2 uppercase absolute md:top-5 top-0 md:right-5 right-0 text-sm">{item?.categories}</span>
                                <Image
                                    src={item.img}
                                    alt="thumbnil"
                                    width={900}
                                    height={50}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 md:p-5 p-2">
                                    <Link href="#" className="text-2xl font-medium font-ahle text-white">
                                        {item.title}
                                    </Link>
                                    <p className="capitalize text-light-blue md:text-base text-sm md:mt-2">
                                        22 December
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="flex md:flex-col mt-5 md:mt-0 justify-between gap-5 md:w-[35%] w-full">
                    {PostMokeData.slice(1, 3).map((item, idx) => {
                        return (
                            <div key={idx} className="relative h-full w-full">
                                <span className="bg-yellow text-black py-1 px-2 uppercase absolute md:top-5 top-0 md:right-5 right-0 text-xs">{item?.categories}</span>
                                <Image
                                    src={item.img}
                                    alt="thumbnil"
                                    width={900}
                                    height={50}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 md:p-5 p-2">
                                    <Link href="#" className=" md:text-lg text-sm font-medium font-ahle text-white">
                                        {item.title}
                                    </Link>
                                    <p className="capitalize text-light-blue md:text-base text-sm leading-none md:mt-2">
                                       22 December
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Featured_News;
