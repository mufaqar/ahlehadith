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
import Main1 from "@/components/main/main1";
import BooksSection from "@/components/books-section/books";
import ImagesSection from "@/components/images-section/imagesect";

const Home1 = () => {
  return (
    <>
      <Header1 />
      <Main1 />
      {/* <Slider /> */}
      <Layout>
        <section className="my-10 md:my-20 md:mt-20">
          <div className="">
            <div>
              <div className="my-5">
                <h2 className="text-3xl uppercase font-ahle ahle-heading">
                  جماعتی خبریں
                </h2>
              </div>
              <Featured_News />
            </div>
          </div>
        </section>
      </Layout>

      <section className="flex justify-center my-20 py-16 bg-[url('/assets/images/slid4.jpeg')] bg-center bg-no-repeat bg-cover bg-[#fff054] bg-blend-multiply relative before:content-[' '] before:absolute before:top-3 before:bottom-3 before:left-3 before:right-3 before:border-white/50 before:border group">
        <div className="md:w-2/4 w-3/4 text-center px-5 bg-white dark:bg-light-gray z-[2]">
          <h2 className="text-3xl uppercase font-ahle my-5 ahle-heading after:md:right-[45%] after:right-[40%]">
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
          <Link href='/introduction'
            className="bg-yellow text-black hover:bg-light-blue hover:text-white text-base px-8 py-2.5 uppercase ">
            مزید جانئیے
          </Link>
        </div>
        <div className="overlay absolute top-0 left-0 h-full w-full before:content-[' '] before:absolute before:top-3 before:bottom-3 before:left-3 before:right-3 before:border-white before:border-y before:scale-x-0 group-hover:before:scale-x-100 before:transform before:transition before:duration-700 before:ease-in-out 
        after:content-[' '] after:absolute after:top-3 after:bottom-3 after:left-3 after:right-3 after:border-white after:border-x after:scale-y-0 group-hover:after:scale-y-100 after:transform after:transition after:duration-700 after:ease-in-out "
        ></div>
      </section>

      <Layout>
        <section className="my-10 md:my-16 md:mt-16">
          <div className="">
            <div className="my-20">
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
                <BooksSection />
              </div>
            </div>
          </div >
        </section >
      </Layout >
      <Layout>

        <div className="my-20">

          <div className="my-14">
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
          <ImagesSection />
        </div>
      </Layout>
      <Footer2 />
    </>
  );
};

export default Home1;
