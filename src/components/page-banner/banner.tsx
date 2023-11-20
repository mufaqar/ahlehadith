"use client";

import React from "react";
import Header1 from "../header/header1";
import Button from "../ui/button";
import Link from "next/link";

interface IPageBanner {
  title?: string;
  subTitle?: string;
  image: string;
  buttontext?: string;
  buttonLink?: string | number | any;
  rounded?: boolean;
}

const PageBanner = ({
  title,
  subTitle,
  image,
  buttontext,
  buttonLink,
  rounded
}: IPageBanner) => {
  return (
    <>
      <div
        className={`h-[450px] mt-[112px] bg-cover bg-no-repeat bg-center relative ${rounded && 'container mt-40 px-4 md:px-10 mx-auto rounded-[60px]'}`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={` absolute top-0 p-4 flex flex-col justify-center text-white items-center right-0 bottom-0 left-0 bg-black/30 ${rounded && 'container px-4 md:px-10 mx-auto rounded-[60px]'}`}>
          <h1 className="text-xl md:text-4xl pt-10 text-yellow font-bold font-ahle text-center capitalize max-w-[700px]">
            {title}
          </h1>
          {subTitle && <div dangerouslySetInnerHTML={{__html:subTitle}} className="mt-7 text-lg font-ahle font-light max-w-[600px] text-center mb-5"/>}
          
          {buttontext && (
            <Link href={buttonLink}>
              <Button variants={`${rounded ? 'primary' : 'outlined'}`} size="medium" rounded={true}>
                {buttontext}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default PageBanner;
