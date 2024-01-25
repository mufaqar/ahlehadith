import Image from "next/image";
import React from "react";
import { GetWordStr } from "../../utils";
import { AiOutlineShareAlt } from "react-icons/ai";
import Link from "next/link";

const PostDesign = ({ post, layout, home, rounded }: any) => {
  return (
    <div
      className={`group overflow-hidden bg-light-gray shadow-lg
      ${rounded && 'rounded-3xl overflow-hidden'} 
      ${layout === 2 && "md:flex"}
      ${layout === 3 && "bg-transparent"}
      `}
    >
      <Link href={`/blogs/${post.id}`} className={`${layout === 2 && "md:w-1/3"}`}>
        <figure
          className={`overflow-hidden relative ${layout === 2 && "md:w-full"}`}
        >
          <Image
            src={post?.img || post.featuredImage.node.mediaItemUrl}
            alt=""
            width={200}
            height={200}
            className={`w-full group-hover:scale-110 transition-all duration-300 ease-in-out object-cover ${layout === 2 ? "h-[240px]" : "h-[250px] sm:h-[300px]"}
            ${layout === 3 && home ? 'sm:h-[240px]' : "sm:h-[270px]"}
          `}
          />
          {layout !== 3 && (
            <div className={`absolute top-8 right-0 bg-yellow p-1.5 cursor-pointer px-4 text-sm uppercase text-dark-gray flex items-center ${rounded && 'rounded-full shadow-xl right-4'}`}>
              Share <AiOutlineShareAlt size={22} />
            </div>
          )}
        </figure>
      </Link>
      <div
        className={`px-4 pb-3 bg-light-gray ${layout === 2 && "md:w-2/3"} ${layout === 3 ? "p-0 bg-transparent" : 'p-6'
          }
        ${layout === 3 && "p-0 pt-6"}`}
      >
        <div className={`${layout === 3 && "flex flex-col-reverse"}`}>
          <p className="capitalize text-light-blue text-sm">
            By Danial Alam - <span className="uppercase">22 December</span>
          </p>
          <Link href={`/blogs/${post.id}`}>
          <h2
            className={`text-[18px] font-medium font-ahle ${layout === 3
                ? " mb-3 leading-6"
                : " text-pure leading-7 mt-2"
              }`}
          >
            {post.title}
          </h2>
          </Link>
        </div>
        {layout !== 3 && (
          <div className="mt-3 text-text font-normal" dangerouslySetInnerHTML={{ __html: GetWordStr(post?.excerpt)}}/>
        )}
      </div>
    </div>
  );
};

export default PostDesign;
