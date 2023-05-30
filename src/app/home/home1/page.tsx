"use client"

import Layout from '@/components/Layout/Layout';
import Aside from '@/components/aside';
import Footer1 from '@/components/footer';
import Header1 from '@/components/header/header1';
import Insta from '@/components/insta';
import Main1 from '@/components/main/main1';
import PostDesign from '@/components/post-design/post-design';
import { PostMokeData } from '@/const/post';
import Slider from "@/components/Slider/Slider";
import React from 'react'
import Button from '@/components/ui/button';
import { AiOutlineClockCircle, AiOutlineEye, AiOutlinePlusCircle } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';

const Home1 = () => {
  return (
    <>
      <Header1 />
      <Slider data={PostMokeData.slice(0, 4)} />
      <Layout>
        <section className="lg:flex gap-10 my-10 md:my-20 md:mt-28">
          <div className="">
            <div className='flex md:flex-row flex-col gap-6'>
              <div className='md:w-3/5 w-full'>
                <h2 className="text-2xl uppercase font-ahle my-5">
                  خوش آمدید
                </h2>
                <p className='mt-2 font-poppins text-lg text-gray-600 dark:text-text'>
                  ہم آپ کو مرکزی جمعیت اہل حدیث پاکستان کی ویب سائٹ پر خوش آمدید کہتے ہیں.
                </p>
                <p className='mt-2 font-poppins text-lg text-gray-600 dark:text-text mb-5'>
                  مرکزی جمعیت اہل حدیث الحمدللہ دعوت و اصلاح ، تعلیم وتربیت ، علم وتحقیق، نشر و اشاعت ،تنظیم واحصائیات اور تعمیرات ورفاہ عامہ جیسے اہم محاذوں پر بھرپور جدوجہد کررہی ہے جس کے مبارک ثمرات ملکی سطح پر محسوس کیے جارہے ہیں اور خود موقر مجالس عاملہ وشوری مرکزی جمعیت اہل حدیث نے بھی اپنے حالیہ اجلاسوں میں جمعیت کی ہمہ جہت کارکردگی پراطمینان کااظہار فرمایاہے.
                </p>
                <Button variants="primary" size="medium">
                  مزید جانئیے
                </Button>
              </div>
              <div className='md:w-2/5 w-full'>
                <h2 className="text-2xl uppercase font-ahle my-5">
                  ہفت روزہ اہلحدیث
                </h2>
                <div className="">
                  {PostMokeData.slice(1, 2).map((item, idx) => {
                    return (
                      <div key={idx}>
                        <figure className="relative group overflow-hidden">
                          <Image
                            src={item?.img}
                            alt="image"
                            width={400}
                            height={400}
                            className="h-40 sm:h-60 group-hover:scale-110 xl:h-80 w-full object-cover transition-all duration-200 ease-in-out"
                          />
                          <div className="absolute inset-0 bg-black/40 hidden group-hover:block">
                            <div className="flex flex-col justify-center items-center h-full text-yellow">
                              <AiOutlinePlusCircle
                                size={30}
                                className="group-hover:scale-110 transition-all duration ease-in-out"
                              />
                              <span className="text-sm md:text-base">View More</span>
                            </div>
                            <Link
                              href={item?.title}
                              className="text-white flex gap-5 text-sm md:text-base justify-center item-center absolute bottom-2 pt-2 md:bottom-4 w-full border-t-[1px] border-gray-300 md:pt-4"
                            >
                              <span className="flex items-center gap-1">
                                <i>
                                  <AiOutlineClockCircle />
                                </i>{" "}
                                2 .
                              </span>
                              <span className="flex items-center gap-1">
                                <i>
                                  <AiOutlineEye className="text-lg" />
                                </i>{" "}
                                1.3k
                              </span>
                            </Link>
                          </div>
                        </figure>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="pt-[1px] bg-border my-16" />
            <div>
              <div className='my-5'>
                <h2 className="text-2xl uppercase font-ahle">
                  جماعتی خبریں
                </h2>
              </div>
              <div className="flex gap-6 flex-col">
                {PostMokeData.slice(0, 2).map((post, idx) => {
                  return <PostDesign post={post} idx={idx} layout={2} key={idx} />;
                })}
              </div>
            </div>
            <div className="pt-[1px] bg-border my-16" />
            <div>
              <div className='my-5'>
                <h2 className="text-2xl uppercase font-ahle">
                  تازہ ترین وڈیوز
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {PostMokeData.slice(0, 4).map((post, idx) => {
                  return <PostDesign post={post} idx={idx} key={idx} />;
                })}
              </div>
            </div>
            <div className="pt-[1px] bg-border my-16" />
            <div>
              <div className='my-5'>
                <h2 className="text-2xl uppercase font-ahle">
                  کتب لائبریری
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {PostMokeData.slice(0, 3).map((post, idx) => {
                  return <PostDesign post={post} idx={idx} home={true} layout={3} key={idx} />;
                })}
              </div>
            </div>
          </div>

        </section>
      </Layout>
      <Insta />
      <Footer1 />
    </>
  )
}

export default Home1