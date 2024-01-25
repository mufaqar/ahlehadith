"use client";
import Pagination from "@/components/Pagination/pagination";
import { SideBarHeading } from "@/components/aside";
import Featured_News from "@/components/featured-news/news";
import Footer from "@/components/footer";
import Header1 from "@/components/header/header1";
import PostDesign from "@/components/post-design/post-design";
import Button from "@/components/ui/button";
import { AllPosts } from "@/config/queries";
import { PostMokeData } from "@/const/post";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineClockCircle,
  AiOutlineEye,
} from "react-icons/ai";


const Blog = () => {

  const { loading, error, data } = useQuery(AllPosts);

  const [pData, setPData] = useState()
  
  const PaginatedData = (res) => {
    setPData(res)
  }

  

  return (
    <main>
      <section className="md:mt-28 sm:mt-14 mt-10 pt-3">
        {/* <Featured_News data={data.posts.nodes.slice(0,3)}/> */}
      </section>
      <section className='container px-4 md:px-10 mx-auto'>
        <div className="my-24">
          <SideBarHeading className="max-w-[18rem] mx-auto mb-12">
            جماعتی خبریں
          </SideBarHeading>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
            {data?.posts?.nodes?.map((post, idx) => {
              return (
                <PostDesign post={post} idx={idx} layout={2} key={idx} />
              );
            })}
          </div>
        </div>
        {/* <div className="pt-[1px] bg-border" />
        <div className="my-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8">
            {pData?.map((post, idx) => {
              <PostDesign post={post} idx={idx} layout={3} key={idx} />
            })}
          </div>
          <Pagination data={data?.posts?.nodes.slice(5)} PaginatedData={data?.posts?.nodes.slice(3)} />
        </div> */}
      </section>
    </main>
  );
};

export default Blog;
