"use client";

import Layout from "@/components/Layout/Layout";
import Aside, { SideBarHeading } from "@/components/aside";
import Footer from "@/components/footer";

import PageBanner from "@/components/page-banner/banner";
import PostDesign from "@/components/post-design/post-design";
import apolloClient from "@/config/client";
import { AllPosts } from "@/config/queries";
import { PostMokeData } from "@/const/post";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaRegCommentAlt,
  FaReply,
  FaTwitter,
} from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const Slug = ({PostsData}:any) => {
  console.log("🚀 ~ file: page.tsx:27 ~ Slug ~ PostsData:", PostsData)
  return (
    <>
      <PageBanner
        title="Lorem ipsum dolor sit amet consectetur"
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        image="/assets/images/Cars.jpg"
      />
      <Layout>
        <section className="lg:flex gap-10 my-10">
          <section className="lg:w-[73%]">
            <div className="flex items-center justify-start gap-2">
              <div className="p-[5px] bg-light-blue group-hover:bg-light-blue" />
              <h2 className="capitalize text-sm text-gray-400 group-hover:text-light-blue cursor-pointer ">
                Technology
              </h2>
            </div>
            <h2 className="text-xl md:text-2xl capitalize mt-2 font-ahle font-bold">{`Lorem ipsum dolor sit amet consectetur`}</h2>
            <figure className="relative">
              <Image
                src="/assets/images/Cars.jpg"
                alt="image"
                width={100}
                height={100}
                className="w-full mt-6"
              />
              <p className="absolute bottom-0 right-0 left-0 bg-black/30 p-2 text-gray-300 font-ahle text-sm font-light">
                <strong className="text-yellow">Source:</strong> Lorem ipsum
                dolor sit amet consectetur adipisicing elit.
              </p>
            </figure>
            <p className="mt-8 text-text leading-8 tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              repudiandae aliquid, atque veritatis, dolor, cumque dolores quo
              obcaecati harum laudantium reprehenderit temporibus numquam
              perspiciatis doloremque! Ratione reiciendis necessitatibus cumque
              ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis non sit, minus inventore nostrum, sapiente, corporis
              assumenda delectus ipsum repellat facilis omnis voluptatibus nam
              provident nihil culpa laborum alias illo.
            </p>
            <p className="mt-6 text-text leading-8 tracking-wide">
              Ratione reiciendis necessitatibus cumque ducimus. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Blanditiis non sit,
              minus inventore nostrum, sapiente, corporis assumenda delectus
              ipsum repellat facilis omnis voluptatibus nam provident nihil
              culpa laborum alias illo.
            </p>
            <p className="mt-6 text-text leading-8 tracking-wide">
              Corporis assumenda delectus ipsum repellat facilis omnis
              voluptatibus nam provident nihil culpa laborum alias illo. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Accusantium
              debitis, fuga corrupti autem similique reiciendis placeat,
              inventore dolorem nemo distinctio dignissimos. Quae, aut?
              Distinctio numquam hic fuga ut, blanditiis doloremque? Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              doloremque officia voluptates id dolore aspernatur! Temporibus ad
              id, non perferendis labore earum expedita sunt consequatur
              reiciendis, et corporis officia! Minus.
            </p>
            {/* <div className="bg-light-gray flex flex-col md:flex-row justify-between p-4 mt-7 gap-3 md:gap-0 md:items-center">
              <p className="uppercase text-sm font-bold text-light-blue">
                Keep Reading
              </p>
              <div className="flex item-center gap-3 md:gap-6 flex-col md:flex-row">
                <div className="text-gray-400 text-lg flex item-center gap-2">
                  <SlCalender />
                  <span className="text-xs mt-[2px]">April 20, 2023</span>
                </div>
                <div className="text-gray-400 text-lg flex item-center gap-2">
                  <FaRegCommentAlt />
                  <span className="text-xs">4 Comments</span>
                </div>
                <ul className="flex items-center gap-4 text-dark-gray dark:text-white">
                  <li className="hover:text-yellow text-lg">
                    <Link href="#">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li className="hover:text-yellow text-lg">
                    <Link href="#">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li className="hover:text-yellow text-lg">
                    <Link href="#">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li className="hover:text-yellow text-lg">
                    <Link href="#">
                      <FaPinterestP />
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}
            {/* <div className="my-10 sm:flex items-center gap-6 justify-start">
              <div className="w-40">
                <Image
                  src="/assets/images/Cars.jpg"
                  alt="profile"
                  width={200}
                  height={200}
                  className="w-40 h-40 rounded-full"
                  style={{ minWidth: "10rem" }}
                />
              </div>
              <div>
                <h4 className="text-lg text-dark-gray dark:text-gray-200 mt-6 sm:mt-0">
                  Expert design
                </h4>
                <p className="mt-3 mb-2 text-gray-400">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                  laudantium veritatis quae cum excepturi fugit quisquam
                  voluptatibus. Veniam inventore, necessitatibus iusto quo
                  adipisci laboriosam, fugit omnis esse nam deserunt incidunt!
                </p>
                <ul className="flex items-center gap-4 text-light-blue mt-4">
                  <li className="hover:text-yellow text-lg">
                    <Link href="#">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li className="hover:text-yellow text-lg">
                    <Link href="#">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li className="hover:text-yellow text-lg">
                    <Link href="#">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li className="hover:text-yellow text-lg">
                    <Link href="#">
                      <FaPinterestP />
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}
            <SideBarHeading long={true}> Related Post </SideBarHeading>
            <div className="grid gap-6 md:grid-cols-3 my-10">
              {PostMokeData.slice(0, 3).map((post, idx) => {
                return (
                  <PostDesign post={post} idx={idx} layout={3} key={idx} />
                );
              })}
            </div>
            {/* <SideBarHeading long={true}> Comments </SideBarHeading>
            <CommentDesign />
            <CommentDesign reply={true} />
            <CommentDesign /> */}
           
          
          </section>

          <Aside
            aboutAuthor={true}
            social={true}
            newsletter={true}
            latestPost={PostMokeData}
            latestCategories={PostMokeData}
            advertisement={true}
          />
        </section>
      </Layout>
  
      <Footer />
    </>
  );
};

export default Slug;

const CommentDesign = ({ reply }: any) => {
  return (
    <section>
      <div className={`flex gap-5 mb-8 first:mt-10 ${reply && "pl-12"}`}>
        <figure>
          <Image
            src="/assets/images/avatar.png"
            alt="avatar"
            width={70}
            height={70}
            className="rounded-full"
          />
        </figure>
        <div className={`border-b-[1px] border-border pb-8`}>
          <div className="flex justify-between ">
            <div>
              <h6 className="uppercase font-ahle">MARIE John </h6>
              <p className="text-gray-400 text-sm my-2">
                January 21, 2016 01.54 am
              </p>
            </div>
            <div className="text-light-blue flex item-center gap-2 hover:text-yellow cursor-pointer">
              <FaReply size={18} />
              <span className="text-sm">Reply</span>
            </div>
          </div>
          <p className="text-sm font-light leading-6">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore.
          </p>
        </div>
      </div>
    </section>
  );
};

const CommentForm = () => {
  return (
    <form className="mt-12">
      <textarea
        className="w-full h-60 bg-gray-100 dark:bg-light-gray text-gray-500 p-4 focus:outline-yellow text-sm"
        placeholder="Message"
      ></textarea>
      <div className="mt-2 md:flex gap-4">
        <input
          type="text"
          className="p-4 bg-gray-100 dark:bg-light-gray w-full text-gray-500 mt-4 md:mt-0 focus:outline-yellow border-none text-sm"
          placeholder="Name"
        />
        <input
          type="text"
          className="p-4 bg-gray-100 dark:bg-light-gray w-full text-gray-500 mt-4 md:mt-0 focus:outline-yellow border-none text-sm"
          placeholder="Email"
        />
        <input
          type="text"
          className="p-4 bg-gray-100 dark:bg-light-gray w-full text-gray-500 mt-4 md:mt-0 focus:outline-yellow border-none text-sm"
          placeholder="Web URL"
        />
      </div>
      <input
        type="button"
        value="submit"
        className="bg-yellow uppercase text-black w-full mt-4 p-3 hover:bg-light-blue cursor-pointer"
      />
    </form>
  );
};


export const getServerSideProps: GetServerSideProps = async () => {  
  const response = await apolloClient.query({
    query: AllPosts,
  });
  

  const PostsData = response.data.posts.nodes;

  return {
    props: {
      PostsData,
    },
  };
}

