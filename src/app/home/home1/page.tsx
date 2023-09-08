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
                      </figure>
                    </Link>
                    <div
                      className={`bg-light-gray md:w-2/3 p-6 `}
                    >
                      <div className={``}>
                        <p className="capitalize text-light-blue text-sm">
                          By Farhan  - <span className="uppercase">23 September</span>
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
                وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَأَطِيعُوا الرَّسُولَ لَعَلَّكُمْ تُرْحَمُونَ
              </p>
               <p className="font-ahle text-lg text-gray-600 dark:text-text">
                
                  اور چاہیے کہ نماز کا اہتمام کرو، زکوۃ ادا کرنے میں سرگرم رہو اور اللہ کے رسول کا کہا مانو، کچھ بعید نہیں کہ رحمت الٰہی کے سزاوار ہو
               </p>
                <p className="font-ahle text-lg text-gray-600 dark:text-text mt-5">
                ۔النور:56
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
                رسول اللہ ﷺ نے فرمایا: ”تم میں سے جو شخص اس حال میں صبح کرے کہ وہ اپنی جان کی طرف سے بے خوف ہو، جسمانی اعتبار سے صحت مند ہو، ایک دن کی خوراک کا سامان اس کے پاس ہو، تو گویا اس کے لیے ساری دنیا جمع کردی گئی  </p>
                <p className="font-ahle text-lg text-gray-600 dark:text-text mt-5">
                ۔صحیح الجامع:6042
                </p>
              </div>
            </div>
            <div className=" border border-light-gray">
              <div className="bg-[#012f1e] p-5 flex gap-3 items-center">
                <Image src="/assets/images/iqra-icon.png" alt="iqra-icon.png" width={50} height={50} />
                <h2 className="text-3xl leading-[4rem] uppercase font-ahle text-white">
                اقوالِ سلف
                </h2>
              </div>
              <div className="px-5">
                <ul className="divide-y divide-border ">
                
                  <li className="py-3">
                    <p className="font-ahle text-lg text-pure">
                    تابعی طاؤوس بن كيسان رحمہ اللہ دعا کیا کرتے تھے  </p>
                    <p className="font-ahle text-lg text-gray-600 dark:text-text mt-5">
                    :"اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ غِنًى مُبْطِرٍ، وَفَقْرٍ مُلِبٍّ، أَوْ مُرِبٍّ."
                    ”اے اللہ! میں تیری پناہ میں آتا ہوں آپے سے باہر کر دینے والی امیری سے، اور جان نہ چھوڑنے والی فقیری سے۔“
                      </p>
                    <p className="font-ahle text-lg text-pure dark:text-text">
                    (جامع معمر بن راشد : ١٩٦٣٣)  </p>
                  </li>
                  </ul>
                 
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <section className="py-16 bg-[url('/assets/images/tabdeeli.jpg')] bg-center bg-cover bg-black/50 bg-blend-multiply">
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


