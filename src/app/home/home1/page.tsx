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
import PostDesign2 from '@/components/post-design/post-design-2';
import VideosGallery from '@/components/videos-gallery/videos';
import Featured_News from '../../../components/featured-news/news';
import Gallery_images from '@/components/image-gallery';

const Home1 = () => {
  return (
    <>
      <Header1 />
      <Slider />
      <Layout>
        <section className="lg:flex gap-10 my-10 md:my-16 md:mt-16">
          <div className="">

            <div>
              <div className='my-5'>
                <h2 className="text-2xl uppercase font-ahle">
                  جماعتی خبریں
                </h2>
              </div>
              <Featured_News />
            </div>

            <div className="pt-[1px] bg-border my-16" />

            <div className='flex md:flex-row flex-col gap-6'>
              <div className='md:w-3/5 w-full'>
                <h2 className="text-2xl uppercase font-ahle my-5">
                  خوش آمدید
                </h2>
                <p className='mt-2 font-ahle text-lg text-gray-600 dark:text-text'>
                  ہم آپ کو مرکزی جمعیت اہل حدیث پاکستان کی ویب سائٹ پر خوش آمدید کہتے ہیں.
                </p>
                <p className='mt-2 font-ahle text-lg text-gray-600 dark:text-text mb-5'>
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
                  <div>
                    <figure className="relative group overflow-hidden">
                      <Image
                        src="/assets/images/abdullah.jpeg"
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
                </div>
              </div>
            </div>

            <div className="pt-[1px] bg-border my-16" />

            <div>
              <div className='my-5'>
                <h2 className="text-2xl uppercase font-ahle">
                  تازہ ترین وڈیوز
                </h2>
              </div>
              <VideosGallery />
            </div>

            <div className="pt-[1px] bg-border my-16" />

            <div>
              <div className='my-5'>
                <h2 className="text-2xl uppercase font-ahle">
                  کتب لائبریری
                </h2>
              </div>
              <div className="">
                <PostDesign2 />
              </div>
            </div>

          </div>
        </section>
      </Layout>
      <Layout>
        <div>
          <div className='my-5'>
            <h2 className="text-2xl uppercase font-ahle">
              اسلامک گرافکس
            </h2>
          </div>
          <Gallery_images />
        </div>
      </Layout>
      <Footer1 />
    </>
  )
}

export default Home1