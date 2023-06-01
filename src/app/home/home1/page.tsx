"use client";
import Layout from "@/components/Layout/Layout";
import Header1 from "@/components/header/header1";
import Slider from "@/components/Slider/Slider";
import React from "react";
import Button from "@/components/ui/button";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import PostDesign2 from "@/components/post-design/post-design-2";
import VideosGallery from "@/components/videos-gallery/videos";
import Featured_News from "../../../components/featured-news/news";
import Gallery_images from "@/components/image-gallery";
import Footer2 from "@/components/footer";

const Home1 = () => {
  return (
    <>
      <Header1 />
      <Slider />
      <Layout>
        <section className="lg:flex gap-10 my-10 md:my-16 md:mt-16">
          <div className="">
            <div>
              <div className="my-5">
                <h2 className="text-3xl uppercase font-ahle ahle-heading">
                  جماعتی خبریں
                </h2>
              </div>
              <Featured_News />
            </div>

            <div className="pt-[1px] bg-border my-16" />

            <div className="flex md:flex-row flex-col gap-6">
              <div className="md:w-3/5 w-full">
                <h2 className="text-3xl uppercase font-ahle my-5 ahle-heading">
                  خوش آمدید
                </h2>
                <p className="mt-2 font-ahle text-lg text-gray-600 dark:text-text">
                  ہم آپ کو مرکزی جمعیت اہل حدیث پاکستان کی ویب سائٹ پر خوش آمدید
                  کہتے ہیں.
                </p>
                <p className="mt-2 font-ahle text-lg text-gray-600 dark:text-text mb-5">
                  مرکزی جمعیت اہل حدیث الحمدللہ دعوت و اصلاح ، تعلیم وتربیت ،
                  علم وتحقیق، نشر و اشاعت ،تنظیم واحصائیات اور تعمیرات ورفاہ
                  عامہ جیسے اہم محاذوں پر بھرپور جدوجہد کررہی ہے جس کے مبارک
                  ثمرات ملکی سطح پر محسوس کیے جارہے ہیں اور خود موقر مجالس عاملہ
                  وشوری مرکزی جمعیت اہل حدیث نے بھی اپنے حالیہ اجلاسوں میں جمعیت
                  کی ہمہ جہت کارکردگی پراطمینان کااظہار فرمایاہے.
                </p>
                <Button variants="primary" size="medium">
                  مزید جانئیے
                </Button>
              </div>
              <div className="md:w-2/5 w-full">
                <h2 className="text-3xl uppercase font-ahle my-5 ahle-heading">
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

                            <span className="text-sm md:text-base">
                              View More
                            </span>
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
              <div className="my-5">

              </div>

              <div className="my-5">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl uppercase font-ahle ahle-heading">
                    تازہ ترین وڈیوز
                  </h2>
                  <Link
                    href="#"
                    className="p-2 px-4 rounded-md bg-light-gray active:scale-105 hover:underline hover:shadow-lg"
                  >
                    وڈیو وزٹ  کریں
                  </Link>
                </div>
              </div>
              <VideosGallery />
            </div>

            <div className="pt-[1px] bg-border my-16" />

            <div>
              <div className="my-5">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl uppercase font-ahle ahle-heading">
                    کتب لائبریری
                  </h2>
                  <Link
                    href="#"
                    className=" p-2 px-4 rounded-md bg-light-gray active:scale-105 hover:underline hover:shadow-lg"
                  >
                    لائبریری وزٹ کریں
                  </Link>
                </div>
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

          <div className="my-5">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl uppercase font-ahle ahle-heading">
                اسلامک گرافکس
              </h2>
              <Link
                href="#"
                className="p-2 px-4 rounded-md bg-light-gray active:scale-105 hover:underline hover:shadow-lg"
              >
                اسلامک گرافکس وزٹ کریں
              </Link>
            </div>
          </div>
          <Gallery_images />
        </div>
      </Layout>
      <Footer2 />
    </>
  );
};

export default Home1;
