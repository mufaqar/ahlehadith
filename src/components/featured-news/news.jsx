import { PostMokeData } from '@/const/post';
import { GetWordStr } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsPlayCircle } from 'react-icons/bs';

const Featured_News = () => {
  return (
    <>
      <section className="md:flex gap-6">
        <div className="md:w-[65%] w-full overflow-hidden inline-block shadow-xl">
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
        <div className="flex flex-col mt-5 md:mt-0 justify-between gap-5 md:w-[35%] w-full">
          {PostMokeData.slice(1, 3).map((item, idx) => {
            return (
              <div key={idx} className="relative h-[260px] w-full bg-black shadow-xl">
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

                <div className="absolute bottom-0 md:p-2 p-2 w-full bg-white border-t-4 border-yellow">
                  <Link href="#" className="text-xl font-ahle text-black">
                  {GetWordStr(item?.title, 10)}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Featured_News;
