import Layout from '@/components/Layout/Layout';
import Footer from '@/components/footer';
import Header1 from '@/components/header/header1';
import PageBanner from '@/components/page-banner/banner';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

export const metadata = {
    title: 'Haft Roza Ahlehadith',
    description: '',
  };
  

const Haft_Roza_Ahlehadith = () => {
    return (
        <>
            <Header1 />
            <PageBanner
                title="ہفت روزہ اہلحدیث"
                subTitle=""
                image="/assets/images/contat.jpg"
                buttontext=""
                buttonLink=""
            />
            <Layout>
                <section className="my-10 md:my-16 md:mt-16 grid md:grid-cols-2 grid-cols-1">
                    <div>
                        <figure className="relative group overflow-hidden">
                            <Image
                                src="/assets/images/shumara1.jpeg"
                                alt="image"
                                width={400}
                                height={400}
                                className="h-40 sm:h-60 group-hover:scale-110 xl:h-80 w-full object-contain transition-all duration-200 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-black/40 hidden group-hover:block">
                                <Link href="#">
                                    <div className="flex flex-col justify-center items-center h-full text-yellow">
                                        <AiOutlinePlusCircle
                                            size={30}
                                            className="group-hover:scale-110 transition-all duration ease-in-out"
                                        />

                                        <span className="text-sm md:text-base">View More</span>
                                    </div>
                                </Link>
                            </div>
                        </figure>
                    </div>

                    <div>
                        <figure className="relative group overflow-hidden">
                            <Image
                                src="/assets/images/shumara6.png"
                                alt="image"
                                width={400}
                                height={400}
                                className="h-40 sm:h-60 group-hover:scale-110 xl:h-80 w-full object-contain transition-all duration-200 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-black/40 hidden group-hover:block">
                                <Link href="#">
                                    <div className="flex flex-col justify-center items-center h-full text-yellow">
                                        <AiOutlinePlusCircle
                                            size={30}
                                            className="group-hover:scale-110 transition-all duration ease-in-out"
                                        />

                                        <span className="text-sm md:text-base">View More</span>
                                    </div>
                                </Link>
                            </div>
                        </figure>
                    </div>
                </section>
            </Layout>
            <Footer />
        </>
    )
}

export default Haft_Roza_Ahlehadith