import React from "react";
import Link from "next/link";
import VideosGallery from "@/components/videos-gallery/videos";
import Main1 from "@/components/main/main1";
import BooksSection from "@/components/books-section/books";
import Team from "@/components/team/team";
import { ConvertDateIntoUrdu, GetWordStr } from "@/utils";
import Image from "next/image";
import Tabs from "@/components/tabs/tabs";
import Sub_Nav from "@/components/header/sub-nav";
import apolloClient from '@/config/client';
import { AllPosts, Books, Members, UpdatesByCategoryHadees, UpdatesByCategoryQoute, UpdatesByCategoryQuran, Videos } from '@/config/queries';

const Home1 = async () => {

  const { postData, dailyHadees, dailyQuran, dailyQoute, videosData, booksData, membersData } = await getData()
  
  const posts = postData

  return (
    <>
      <Main1 />
      <Sub_Nav />
      <Tabs />
      <section className='container px-4 md:px-10 mx-auto'>
        <div className="my-10 md:my-20 md:mt-20">
          <div className="my-5">
            <h2 className="text-3xl leading-[4rem] uppercase font-ahle ahle-heading">
              جماعتی خبریں
            </h2>
          </div>
          <div className="md:flex gap-6">
            <div className="md:w-[40%] w-full overflow-hidden inline-block shadow-xl">
              {posts?.slice(0, 1).map((item, idx) => {
                return (
                  <div key={idx} className="relative h-[540px] w-full bg-black">
                    <Link href={`/blogs/${item.id}`}>
                    <img
                      src={item?.featuredImage?.node?.mediaItemUrl}
                      alt="thumbnil"
                     
                      className="w-full h-full object-cover opacity-60"
                    />
                    </Link>
                    <span className="bg-yellow text-black py-1 !pb-3 px-2 uppercase absolute md:top-5 top-0 md:right-5 right-0 text-sm">
                      {item?.categories?.nodes[0]?.name}
                    </span>
                    <span className="bg-black text-yellow py-1 !pb-3 px-2 uppercase absolute md:top-5 top-0 md:left-5 left-0 text-sm">
                      {ConvertDateIntoUrdu(item?.date)}
                    </span>
                    <div className="absolute bottom-0 md:p-5 p-2 bg-white w-full border-t-4 border-yellow">
                      <Link href={`/blogs/${item.id}`} className="text-2xl font-ahle text-black">
                        {item?.title}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col mt-5 md:mt-0 justify-between gap-5 md:w-[60%] w-full">
              {posts?.slice(1, 4).map((item, idx) => {
                return (
                  <div key={idx} className={`group overflow-hidden bg-light-gray shadow-lg md:flex`}
                  >
                    <Link href={`/blogs/${item?.id}`} className={`md:w-1/3`}>
                      <figure
                        className={`overflow-hidden relative md:w-full h-full`}
                      >
                        <img
                          src={item?.featuredImage?.node?.mediaItemUrl}
                          alt=""
                        
                          className={`w-full md:h-full group-hover:scale-110 transition-all duration-300 ease-in-out object-cover h-[240px] sm:h-[190px]`}
                        />
                      </figure>
                    </Link>
                    <div
                      className={`bg-light-gray md:w-2/3 p-6 `}
                    >
                      <div className={``}>
                        <p className="capitalize text-light-blue text-sm">
                          <span className="uppercase">{ConvertDateIntoUrdu(item.date)}</span>
                          <span> - </span>
                          <span>By {item?.author?.node?.name}</span>
                        </p>
                        <Link href={`/blogs/${item?.id}`}>
                        <h2
                          className={`text-[18px] mt-2 leading-[2.3rem] font-medium font-ahle `}
                        >
                          {item?.title}
                        </h2>
                        </Link>
                      </div>
                      <div className="mt-3 text-text leading-8 font-normal" dangerouslySetInnerHTML={{ __html: GetWordStr(item?.excerpt) }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className='container px-4 md:px-10 mx-auto'>
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
                  <span>{dailyQuran[0]?.title}: </span>
                  <span>{dailyQuran[0]?.dailyUpdatesInfo?.description}</span>
                </p>

                <p className="font-ahle text-lg text-gray-600 dark:text-text mt-5">
                  {dailyQuran[0]?.dailyUpdatesInfo?.source}
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
                  <span>{dailyHadees[0]?.title}: </span>
                  <span>{dailyHadees[0]?.dailyUpdatesInfo?.description}</span>
                </p>
                <p className="font-ahle text-lg text-gray-600 dark:text-text mt-5">۔ {dailyHadees[0]?.dailyUpdatesInfo?.source}</p>
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
                      <span>{dailyQoute[0]?.title}: </span>
                      <span>{dailyQoute[0]?.dailyUpdatesInfo?.description}</span>
                    </p>
                    <p className="font-ahle text-lg text-pure dark:text-text mt-5">۔ {dailyQoute[0]?.dailyUpdatesInfo?.source}</p>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[url('/assets/images/tabdeeli.jpg')] bg-center bg-cover bg-black/50 bg-blend-multiply">
        <section className='container px-4 md:px-10 mx-auto'>
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
        </section>
      </section>
      <section className='container px-4 md:px-10 mx-auto'>
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
              <VideosGallery videosData={videosData}/>
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
                <BooksSection booksData={booksData} />
              </div>
            </div>
          </div >
        </section >
      </section>
      <section className='container px-4 md:px-10 mx-auto'>
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
          <Team membersData={membersData}/>
        </div>
      </section>
    </>
  );
};

export default Home1;




async function getData() {
  const [posts, hadees, quran, qoute, videos, books, members] = await Promise.all([
    apolloClient.query({ query: AllPosts }),
    apolloClient.query({ query: UpdatesByCategoryHadees }),
    apolloClient.query({ query: UpdatesByCategoryQuran }),
    apolloClient.query({ query: UpdatesByCategoryQoute }),
    apolloClient.query({ query: Videos }),
    apolloClient.query({ query: Books }),
    apolloClient.query({
        query: Members,
        variables: {
          first: 10,
        },
    }),
  ]);
  const postData = posts?.data?.posts?.nodes
  const dailyHadees = hadees?.data?.updateType?.updates?.nodes
  const dailyQuran = quran?.data?.updateType?.updates?.nodes
  const dailyQoute = qoute?.data?.updateType?.updates?.nodes
  const videosData = videos?.data?.videos?.nodes
  const booksData = books?.data?.books?.edges
  const membersData = members?.data?.members?.nodes

  if (!postData) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return { postData, dailyHadees, dailyQuran, dailyQoute, videosData, booksData, membersData }
}
