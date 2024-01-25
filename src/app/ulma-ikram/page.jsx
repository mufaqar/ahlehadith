"use client";
import ModelBox from "@/components/ModelBox/ModelBox";
import React, { useEffect, useState } from "react";
import { Ulma_Data } from '@/const/ulma'
import apolloClient from "@/config/client";
import { Members } from "@/config/queries";
import PageBanner from "@/components/page-banner/banner";
import { useQuery } from "@apollo/client";
import Image from "next/image";

const Page = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [URL, setURL] = useState('');
    const OpenModelBox = (image) => {
        setURL(image)
        setIsOpen(true);
    }
    const { loading, error, data } = useQuery(Members, {
        variables: {
            first: 100,
        }
      });

    return (
        <main>
            <PageBanner
                title="علمائےکرام/معروف شخصیات"
                subTitle=""
                image="/assets/images/slid1.jpeg"
                buttontext=""
                buttonLink=""
            />
            <section className="relative blogs">
                <div className='container px-4 md:px-10 mx-auto'>
                    <div className='my-10 md:my-20 md:mt-20 file:grid gap-10'>
                        <div className="grid md:grid-cols-4 grid-cols-1 gap-7">
                            {data?.members?.nodes?.map((item) => {
                                return (
                                    <div key={item.img} className=''>
                                        <div className='shadow-md'>
                                            <div className={`relative h-[300px] w-full`}
                                                onClick={() => OpenModelBox(item)} >
                                                <Image
                                                    src={item?.featuredImage?.node?.mediaItemUrl}
                                                    alt="img"
                                                    width={250}
                                                    height={250}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className='p-5 text-center'>
                                                <h3 className='text-xl font-ahle text-yellow mb-5'>
                                                    {item?.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
            {
                modalIsOpen && <ModelBox modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} URL={URL} />
            }
        </main>
    )
}

export default Page;

