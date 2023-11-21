"use client";
import Pagination from "@/components/Pagination/pagination";
import { SideBarHeading } from "@/components/aside";
import Featured_News from "@/components/featured-news/news";
import Footer from "@/components/footer";
import Header1 from "@/components/header/header1";
import PostDesign from "@/components/post-design/post-design";
import Button from "@/components/ui/button";
import { PostMokeData } from "@/const/post";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineClockCircle,
  AiOutlineEye,
} from "react-icons/ai";


const Blog = () => {

  const [pData, setPData] = useState()
  const PaginatedData = (res) => {
    setPData(res)
  }

  return (
    <main>
      <section className="md:mt-20 sm:mt-14 mt-10 pt-3">
        <Featured_News />
      </section>
      <section className='container px-4 md:px-10 mx-auto'>
        <div className="my-24">
          <SideBarHeading className="max-w-[18rem] mx-auto mb-12">
            جماعتی خبریں
          </SideBarHeading>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
            {PostMokeData.map((post, idx) => {
              return (
                <PostDesign post={post} idx={idx} layout={2} key={idx} />
              );
            })}
          </div>
        </div>
        <div className="pt-[1px] bg-border" />
        <div className="my-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8">
            {pData?.map((post, idx) => {
              if (idx === 3) {
                return (
                  <div
                    className="relative bg-light-gray bg-cover"
                    key={idx}
                    style={{ backgroundImage: `url(${post?.img})` }}
                  >
                    <div className="bg-black/40 inset-0 absolute" />
                    <div className="text-white z-10 relative p-10 text-center">
                      <h2 className="uppercase text-light-blue text-lg">
                        {post?.categories}
                      </h2>
                      <h2 className="text-2xl font-ahle capitalize mt-6">
                        {post?.title}
                      </h2>
                      <div className="text-white mb-20 flex gap-5 text-sm md:text-base justify-center item-center mt-5 pt-5 w-full border-t-[1px] border-white">
                        <span className="flex items-center gap-1">
                          <i>
                            <AiOutlineClockCircle />
                          </i>
                          2 .
                        </span>
                        <span className="flex items-center gap-1">
                          <i>
                            <AiOutlineEye className="text-lg" />
                          </i>
                          1.3k
                        </span>
                      </div>
                      <Link href={`blogs/${post?.title}`} className="flex justify-center">
                        <Button variants="primary" size="medium">View More</Button>
                      </Link>
                    </div>
                  </div>
                );
              } else {
                return (
                  <PostDesign post={post} idx={idx} layout={3} key={idx} />
                );
              }
            })}
          </div>
          <Pagination data={PostMokeData.slice(5)} PaginatedData={PaginatedData} />
        </div>
      </section>
    </main>
  );
};

export default Blog;
