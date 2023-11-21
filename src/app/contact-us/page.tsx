import GoogleMap from "@/components/map/googleMap";
import PageBanner from "@/components/page-banner/banner";
import Button from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneSquareAlt } from "react-icons/fa";

export const metadata = {
  title: 'Contact Us',
  description: '',
};

const ContactUs = () => {
  return (
    <main>
      <PageBanner
          title="رابطہ کریں"
          subTitle=""
          image="/assets/images/contat.jpg"
          buttontext=""
          buttonLink=""
        />
       <section className='container px-4 md:px-10 mx-auto'>
        <form className="my-12">
          <div className='my-8'>
            <h2 className="text-3xl uppercase font-ahle ahle-heading">
              میسج کے ذریعے فوری رابطہ
            </h2>
            <p className='mt-5 font-ahle text-lg text-gray-600 dark:text-text'>
              درج ذیل فارم کو پر کریں. ہمارا نمائندہ بہت جلد آپ سے رابطہ کرے گا
            </p>
          </div>
          <div className="mt-2 mb-5 md:flex gap-4">
            <input
              type="text"
              className="p-4 bg-gray-100 dark:bg-light-gray w-full text-gray-500 mt-4 md:mt-0 focus:outline-yellow border-none text-sm font-ahle"
              placeholder="آپ کا نام"
            />
            <input
              type="tel"
              className="p-4 bg-gray-100 dark:bg-light-gray w-full text-gray-500 mt-4 md:mt-0 focus:outline-yellow border-none text-sm font-ahle"
              placeholder="فون نمبر"
            />
            <input
              type="email"
              className="p-4 bg-gray-100 dark:bg-light-gray w-full text-gray-500 mt-4 md:mt-0 focus:outline-yellow border-none text-sm font-ahle"
              placeholder="ای میل ایڈریس"
            />
          </div>
          <div className="mt-2 mb-5 ">
            <input
              type="text"
              className="p-4 bg-gray-100 dark:bg-light-gray w-full text-gray-500 mt-4 md:mt-0 focus:outline-yellow border-none text-sm font-ahle"
              placeholder="مضمون"
            />
          </div>
          <textarea
            className="w-full h-60 mb-4 bg-gray-100 dark:bg-light-gray text-gray-500 p-4 focus:outline-yellow text-sm font-ahle"
            placeholder="تفصیل"
          ></textarea>
          <div className="flex justify-center items-center font-ahle">
            <Button variants="primary" size="large">
              ارسال کریں
            </Button>
          </div>
        </form>
        <div className="grid md:grid-cols-3 my-24">
          <div className="flex flex-col text-gray-500 gap-1 items-center">
            <FaPhoneSquareAlt size={80} className="text-yellow" />
            <h4 className="text-xl mt-6 text-dark-gray font-ahle">فون نمبر</h4>
            <div className="p-[2px] w-32 bg-gray-100 my-5" />
            <Link href="tel:03208453475" className="font-ahle">03208453475</Link>
            <Link href="tel:04237729933" className="font-ahle">04237729933</Link>
          </div>
          <div className="flex flex-col text-gray-500 gap-1 items-center">
            <FaMapMarkedAlt size={80} className="text-yellow" />
            <h4 className="text-xl mt-6 text-dark-gray font-ahle">
              ایڈریس
            </h4>
            <div className="p-[2px] w-32 bg-gray-100 my-5" />
            <p className="max-w-[250px] text-center font-ahle">
              مرکز اہلحدیث، 106 راوی روڈ، لاہور، پاکستان
            </p>
          </div>
          <div className="flex flex-col text-gray-500  gap-1 items-center">
            <FaEnvelope size={80} className="text-yellow" />
            <h4 className="text-xl mt-6 text-dark-gray font-ahle">ای میل ایڈریس</h4>
            <div className="p-[2px] w-32 bg-gray-100 my-5" />
            <Link href="mailto:mjah106@gmail.com" target="_blank" className="max-w-[250px] text-center font-ahle">
              mjah106@gmail.com
            </Link>
          </div>
        </div>
        <div className="mb-10">
          <GoogleMap />
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
