"use client"

import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { SettingsContext } from "@/context/setting-context";
import { PostMokeData } from '../../const/post'


const Main1 = () => {
  const { windowSize } = useContext(SettingsContext)
  const [post, setPost] = useState<any>([])

  useEffect(() => {
    windowSize[0] <= 1080 ? setPost(Slide_BG.slice(1, 3)) : setPost(Slide_BG.slice(1, 3))
  }, [])

  return (
    <>
      <main className="h-[580px] md:grid grid-cols-2 -mt-[60px]">
        <div className="">
          <MainPost post={Slide_BG[0]} className="text-xl md:text-3xl  font-ahle" />
        </div>
        <div>
          <div className="grid grid-cols-2 _grid h-full">
            {
              post.map((item: any, idx: number) => {
                return (
                  <MainPost post={item} className="text-sm md:text-lg font-ahle" key={idx} />
                )
              })
            }
          </div>

        </div>
      </main>

    </>
  );
};

export default Main1;

const MainPost = ({ className, post }: any) => {
  console.log("🚀 ~ file: main1.tsx:43 ~ MainPost ~ post:", post)
  return (
    <div
      className="relative h-[300px] md:h-full group bg-cover bg-no-repeat bg-center md:mt-[56px]"
      style={{ backgroundImage: `url(${post?.img})` }}
    >
      {/* <div className="absolute top-0 right-0 p-4 md:p-10 flex flex-col justify-end left-0 bottom-0 bg-black/30">
        <span className="text-yellow text-xs md:text-base uppercase">Extreme</span>
        <Link href="#">
          <h2 className={`uppercase group-hover:underline group-hover:text-yellow mt-2 max-w-[480px] text-white ${className}`}>
            {post?.title}
          </h2>
        </Link>
        <Link href="#" className="group-hover:text-yellow mt-3 text-white">
          <AiOutlinePlusCircle size={32} />
        </Link>
      </div> */}
    </div>
  );
};

export const Slide_BG = [
  {
    img: "/assets/images/slid1.jpeg",
  },
  {
    img: "/assets/images/slid2.jpeg",
  },
  {
    img: "/assets/images/slid3.jpeg",
  },
  {
    img: "/assets/images/slid4.jpeg",
  },
  {
    img: "/assets/images/slid5.jpeg",
  },
];