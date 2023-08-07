"use client"
import React from 'react';

import Layout from "@/components/Layout/Layout";
const Page = () => {

  return (
    <>
      <Layout>
        <div className='items-center font-ahle my-10 md:my-20 md:mt-20 grid gap-10'>
          <div className="my-10 grid md:grid-cols-3 grid-cols-1 gap-7">
            {Video_Data.map((item, idx) => {
              return <div key={idx} className="">
                <iframe
                  src={`https://www.youtube.com/embed/${item.url}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow=""
                  allowFullScreen
                  className="w-full h-full aspect-square"></iframe>
              </div>
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Page;

export const Video_Data = [
  {
    url: 'az_4cAYj0Cw',
  },
];