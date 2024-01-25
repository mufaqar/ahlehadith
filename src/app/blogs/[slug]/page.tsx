"use client";
import Aside, { SideBarHeading } from "@/components/aside";
import Footer from "@/components/footer";
import PageBanner from "@/components/page-banner/banner";
import PostDesign from "@/components/post-design/post-design";
import { AllPosts, singlePost } from "@/config/queries";
import { PostMokeData } from "@/const/post";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import {
  FaReply,
} from "react-icons/fa";

const Slug = () => {

  const path = useParams()

  const { loading, error, data } = useQuery(singlePost, {
    variables: { id: path?.slug},
  });
  const postsRes = useQuery(AllPosts);
    
  return (
    <>
      <PageBanner
        title={data?.post?.title}
        subTitle={data?.post?.excerpt}
        image={data?.post?.featuredImage?.node?.mediaItemUrl}
      />
       <section className='container px-4 md:px-10 mx-auto'>
        <div className="lg:flex gap-10 my-10">
          <section className="lg:w-[73%]">
            <div className="flex items-center justify-start gap-2">
              <div className="p-[5px] bg-light-blue group-hover:bg-light-blue" />
              <h2 className="capitalize text-sm text-gray-400 group-hover:text-light-blue cursor-pointer ">
                {data?.post?.categories?.nodes[0]?.name}
              </h2>
            </div>
            <h2 className="text-xl md:text-2xl capitalize mt-2 font-ahle font-bold">{data?.post?.title}</h2>
            <figure className="relative">
              <Image
                src={data?.post?.featuredImage?.node?.mediaItemUrl}
                alt="image"
                width={100}
                height={100}
                className="w-full mt-6"
              />
            </figure>
            <div className="mt-8 text-text leading-8 tracking-wide" dangerouslySetInnerHTML={{__html:data?.post?.content}}/>
            
            <SideBarHeading long={true} className="mt-20"> Related Post </SideBarHeading>
            <div className="grid gap-6 md:grid-cols-3 my-10">
              {postsRes?.data?.posts?.nodes?.slice(0, 3).map((post:any, idx:number) => {
                return (
                  <PostDesign post={post} idx={idx} layout={3} key={idx} />
                );
              })}
            </div>
           
          
          </section>

          <Aside
            aboutAuthor={true}
            social={true}
            newsletter={true}
            latestPost={PostMokeData}
            latestCategories={PostMokeData}
            advertisement={true}
          />
        </div>
      </section>
  
      <Footer />
    </>
  );
};

export default Slug;

