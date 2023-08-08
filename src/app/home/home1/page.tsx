import Layout from "@/components/Layout/Layout";
import React from "react";
import Link from "next/link";
import VideosGallery from "@/components/videos-gallery/videos";
import Footer from "@/components/footer";
import Main1 from "@/components/main/main1";
import BooksSection from "@/components/books-section/books";
import Team from "@/components/team/team";
import { PostMokeData } from "@/const/post";
import { GetWordStr } from "@/utils";
import Image from "next/image";
import { AiOutlineShareAlt } from "react-icons/ai";
import Header1 from "@/components/header/header1";
import Tabs from "@/components/tabs/tabs";
import Sub_Nav from "@/components/header/sub-nav";


const Home1 = () => {
  return (
    <>
      <Header1 />
      <Main1 />
      <Sub_Nav />
      <Tabs />
      <Layout>
        <div className="my-10 md:my-20 md:mt-20">
          <Image src="/assets/images/achievements.jpg" alt="img" width={1920} height={250} />
          <div className="flex justify-center gap-5 mt-10">
            <Link href="/"
              className="bg-yellow text-pure hover:bg-light-blue border-yellow hover:text-white border hover:border-light-blue text-base px-8 py-2.5 uppercase">
              مزید جانیں
            </Link>
            <Link href="/"
              className="bg-yellow text-pure hover:bg-light-blue border-yellow hover:text-white border hover:border-light-blue text-base px-8 py-2.5 uppercase">
              منشور ڈاؤن لوڈ کریں
            </Link>
          </div>
        </div>
      </Layout>
      <section className="py-12 bg-[url('/assets/images/bg-jui.jpg')] bg-center bg-cover">
        <Layout>
          <div className="flex md:flex-row flex-col gap-5">
            <div className="md:w-3/4 w-full flex md:flex-row flex-col gap-5 items-center">
              <div>
                <h2 className="text-2xl leading-[4rem] uppercase text-white font-ahle mb-3">
                  خوشحال پاکستان کے لیے
                </h2>
                <h3 className="text-5xl leading-[4rem] uppercase text-white font-ahle">
                  مرکزی جمعیت اہل حدیث کےممبربنیں
                </h3>
              </div>
              <div>
                <Link href="#"
                  className="bg-yellow text-pure hover:bg-light-blue border-yellow hover:text-white border hover:border-light-blue text-xl px-8 py-2.5 uppercase">
                  ممبر بنیں
                </Link>
              </div>
            </div>
            <div className="md:w-1/4 w-full">
              <Image src='/assets/images/sajid-mir.jpg' alt="sajid-mir" width={300} height={300} className="rounded-full h-60 w-60 object-cover mx-auto" />
            </div>
          </div>
        </Layout>
      </section>
      <Layout>
        <div className="my-10 md:my-20 md:mt-20">
          <div className="my-5">
            <h2 className="text-3xl leading-[4rem] uppercase font-ahle ahle-heading">
              جماعتی خبریں
            </h2>
          </div>
          <div className="md:flex gap-6">
            <div className="md:w-[40%] w-full overflow-hidden inline-block shadow-xl">
              {PostMokeData.slice(0, 1).map((item, idx) => {
                return (
                  <div key={idx} className="relative h-[540px] w-full bg-black">
                    <Image
                      src={item.img}
                      alt="thumbnil"
                      width={900}
                      height={50}
                      className="w-full h-full object-cover opacity-60"
                    />
                    <span className="bg-yellow text-black py-1 px-2 uppercase absolute md:top-5 top-0 md:right-5 right-0 text-sm">
                      {item?.categories}
                    </span>
                    <span className="bg-black text-yellow py-1 px-2 uppercase absolute md:top-5 top-0 md:left-5 left-0 text-sm">
                      22 فروری
                    </span>
                    <div className="absolute bottom-0 md:p-5 p-2 bg-white w-full border-t-4 border-yellow">
                      <Link href="#" className="text-2xl font-ahle text-black">
                        {item.title}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col mt-5 md:mt-0 justify-between gap-5 md:w-[60%] w-full">
              {PostMokeData.slice(0, 3).map((item, idx) => {
                return (
                  <div key={idx} className={`group overflow-hidden bg-light-gray shadow-lg md:flex`}
                  >
                    <Link href={`/blogs/${item.title}`} className={`md:w-1/3`}>
                      <figure
                        className={`overflow-hidden relative md:w-full`}
                      >
                        <Image
                          src={item?.img}
                          alt=""
                          width={200}
                          height={160}
                          className={`w-full group-hover:scale-110 transition-all duration-300 ease-in-out object-cover h-[240px] sm:h-[190px]`}
                        />
                        <div className={`absolute top-8 right-0 bg-yellow p-1.5 cursor-pointer px-4 text-sm uppercase text-dark-gray flex items-center `}>
                          Share <AiOutlineShareAlt size={22} />
                        </div>
                      </figure>
                    </Link>
                    <div
                      className={`bg-light-gray md:w-2/3 p-6 `}
                    >
                      <div className={``}>
                        <p className="capitalize text-light-blue text-sm">
                          By Danial Alam - <span className="uppercase">22 December</span>
                        </p>
                        <h2
                          className={`text-[18px] leading-[2.3rem] font-medium font-ahle `}
                        >
                          {item.title}
                        </h2>
                      </div>
                      <p className="mt-3 text-text font-normal">{GetWordStr(item?.body)}</p>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
      <Layout>
        <div className="my-10 md:my-20 md:mt-20">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5 ">
            <div className=" border border-light-gray">
              <div className="bg-[#012f1e] p-5 flex gap-3 items-center">
                <Image src="/assets/images/iqra-icon.png" alt="iqra-icon.png" width={50} height={50} />
                <h2 className="text-3xl leading-[4rem] uppercase font-ahle text-white">
                  روزانہ قرآن
                </h2>
              </div>
              <div className="p-5">
                <p className="font-ahle text-lg text-gray-600 dark:text-text">
                  ترجمہ :  ہاں، اللہ اس سے ہرگز نہیں شرماتا کہ مچھر یا اس سے بھی حقیر تر کسی چیز کی تمثیلیں دے جو لوگ حق بات کو قبول کرنے والے ہیں، وہ انہی تمثیلوں کو دیکھ کر جان لیتے ہیں کہ یہ حق ہے جو ان کے رب ہی کی طرف سے آیا ہے، اور جو ماننے والے نہیں ہیں، وہ انہیں سن کر کہنے لگتے ہیں کہ ایسی تمثیلوں سے اللہ کو کیا سروکار؟ اس طرح اللہ ایک ہی بات سے بہتوں کو گمراہی میں مبتلا کر دیتا ہے اور بہتوں کو راہ راست دکھا دیتا ہے اور گمراہی میں وہ انہی کو مبتلا کرتا ہے، جو فاسق ہیں ﴿۲۶﴾
                </p>
                <p className="font-ahle text-lg text-gray-600 dark:text-text mt-5">
                  سُوۡرَةُ البَقَرَة : 26
                </p>
              </div>
            </div>
            <div className=" border border-light-gray">
              <div className="bg-[#012f1e] p-5 flex gap-3 items-center">
                <Image src="/assets/images/iqra-icon.png" alt="iqra-icon.png" width={50} height={50} />
                <h2 className="text-3xl leading-[4rem] uppercase font-ahle text-white">
                  روزانہ کی حدیث
                </h2>
              </div>
              <div className="p-5">
                <p className="font-ahle text-lg text-gray-600 dark:text-text">
                  ترجمہ :  رسول اللہ ﷺ نے فرمایا جب اللہ تعالیٰ کسی بندے کی موت کے لیے کسی زمین کا فیصلہ کر دیتا ہے تو وہاں اس کی کوئی حاجت پیدا کر دیتا ہے۔
                </p>
                <p className="font-ahle text-lg text-gray-600 dark:text-text mt-5">
                  (جامع ترمذی ،۲۱۴۷)
                </p>
              </div>
            </div>
            <div className=" border border-light-gray">
              <div className="bg-[#012f1e] p-5 flex gap-3 items-center">
                <Image src="/assets/images/iqra-icon.png" alt="iqra-icon.png" width={50} height={50} />
                <h2 className="text-3xl leading-[4rem] uppercase font-ahle text-white">
                  اقتباس
                </h2>
              </div>
              <div className="px-5">
                <ul className="divide-y divide-border ">
                  <li className="py-3">
                    <p className="font-ahle text-lg text-pure">
                      شاہ کلید از "سید ابو الاعلیٰ مودودیؒ"
                    </p>
                    <p className="font-ahle text-lg text-gray-600 dark:text-text mt-5">
                      جاہلیت کے زمانے میں میں نے بہت کچھ پڑھا ہے۔ قدیم و جدید فلسفہ، سائنس
                    </p>
                    <Link href="#" className="font-ahle text-lg text-pure dark:text-text">
                      مزید پڑھیں
                    </Link>
                  </li>
                  <li className="py-3">
                    <p className="font-ahle text-lg text-pure">
                      شاہ کلید از "سید ابو الاعلیٰ مودودیؒ"
                    </p>
                    <p className="font-ahle text-lg text-gray-600 dark:text-text mt-5">
                      جاہلیت کے زمانے میں میں نے بہت کچھ پڑھا ہے۔ قدیم و جدید فلسفہ، سائنس
                    </p>
                    <Link href="#" className="font-ahle text-lg text-pure dark:text-text">
                      مزید پڑھیں
                    </Link>
                  </li>
                  <li className="py-3">
                    <p className="font-ahle text-lg text-pure">
                      شاہ کلید از "سید ابو الاعلیٰ مودودیؒ"
                    </p>
                    <p className="font-ahle text-lg text-gray-600 dark:text-text mt-5">
                      جاہلیت کے زمانے میں میں نے بہت کچھ پڑھا ہے۔ قدیم و جدید فلسفہ، سائنس
                    </p>
                    <Link href="#" className="font-ahle text-lg text-pure dark:text-text">
                      مزید پڑھیں
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <section className="py-16 bg-[url('/assets/images/tabdeeli.jpg')] bg-center bg-cover">
        <Layout>
          <div className="flex md:flex-row flex-col gap-5">
            <div className="md:w-1/4 w-full">
            </div>
            <div className="md:w-3/4 w-full flex md:flex-row flex-col gap-5 items-center justify-end">
              <div>
                <h2 className="text-2xl uppercase text-white font-ahle mb-3">
                  اس ملک میں حقیقی تبدیلی کے لئیے
                </h2>
                <h3 className="text-5xl uppercase text-white font-ahle">
                  مرکزی جمعیت اہل حدیث کے ووٹر بنیں
                </h3>
              </div>
              <div>
                <Link href="#"
                  className="bg-yellow text-pure hover:bg-light-blue border-yellow hover:text-white border hover:border-light-blue text-xl px-8 py-2.5 uppercase">
                  ووٹر بنیں
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </section>
      <Layout>
        <section className="my-10 md:my-16 md:mt-16">
          <div className="">
            <div className="my-20">
              <div className="my-5">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl leading-[4rem] uppercase font-ahle ahle-heading">
                    تازہ ترین وڈیوز
                  </h2>
                  <Link
                    href="/videos"
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
                  <h2 className="text-3xl leading-[4rem] uppercase font-ahle ahle-heading">
                    کتب لائبریری
                  </h2>
                  <Link
                    href="/books-library"
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
              <h2 className="text-3xl leading-[4rem] uppercase font-ahle ahle-heading">
                مشہور شخصیات
              </h2>
              <Link
                href="/islamic-graphics"
                className="p-2 px-4 rounded-md bg-light-gray active:scale-105 hover:underline hover:shadow-lg"
              >
                مشہور شخصیات
              </Link>
            </div>
          </div>
          <Team />
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Home1;


